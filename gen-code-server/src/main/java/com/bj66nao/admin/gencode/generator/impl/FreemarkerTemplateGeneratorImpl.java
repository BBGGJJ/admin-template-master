package com.bj66nao.admin.gencode.generator.impl;

import org.apache.commons.lang3.StringUtils;
import com.bj66nao.admin.gencode.generator.IGenerator;
import com.bj66nao.admin.gencode.model.ClassFieldInfo;
import com.bj66nao.admin.gencode.model.ClassInfo;
import com.bj66nao.admin.gencode.param.GenParam;
import com.bj66nao.admin.utils.FreemarkerUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;


import java.io.*;
import java.nio.charset.Charset;
import java.util.*;
import java.util.stream.Collectors;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import java.util.zip.ZipOutputStream;

/**
 * Created by admin on 2019/12/15.
 */
@Service
public class FreemarkerTemplateGeneratorImpl implements IGenerator {

    private static final Logger logger = LoggerFactory.getLogger(FreemarkerTemplateGeneratorImpl.class);

    @Override
    public void execute(InputStream templateFileInputStream, GenParam param, String dirName, ZipOutputStream zipOutputStream) throws Exception {
        List<Map<String, Object>> menuTree = menuTree(param.getTables());
        Map<String, Object> templateParam = new HashMap<>();
        String packagePath = param.getPackagePath() + "." + param.getProjectName();
        packagePath = packagePath.replace("-", ".").replace("_", ".").toLowerCase();
        templateParam.put("routes", menuTree);
        templateParam.put("jdbcUrl", param.getUri());
        templateParam.put("jdbcPassword", param.getPassword());
        templateParam.put("jdbcUsername", param.getUserName());
        templateParam.put("packageName", param.getPackagePath());
        templateParam.put("packagePath", packagePath);
        templateParam.put("projectName", param.getProjectName());
        templateParam.put("projectDesc", param.getProjectDesc());
        templateParam.put("classInfos", param.getTables());
        ZipInputStream zipInputStream = new ZipInputStream(templateFileInputStream);
        generatorZip(zipInputStream, packagePath, templateParam, param, dirName, zipOutputStream);

    }

    private List<Map<String, Object>> menuTree(List<ClassInfo> classInfos) {
        Map<String, List<ClassInfo>> maps = classInfos.stream().collect((Collectors.groupingBy(o -> o.getBusinessModule())));
        List<Map<String, Object>> result = new ArrayList<>(maps.size());
        for (String key : maps.keySet()) {
            Map<String, Object> map = new HashMap<>();
            map.put("module", key);
            map.put("moduleName", maps.get(key).get(0).getBusinessModuleDesc());
            map.put("children", maps.get(key));
            result.add(map);
        }
        return result;
    }

    public void generatorZip(ZipInputStream in, String packagePath, Map<String, Object> templateParam, GenParam reqParam, String dirName, ZipOutputStream zipOutputStream) throws Exception {
        ZipEntry entry;
        while ((entry = in.getNextEntry()) != null) {
            String fileName = entry.getName();
            if (fileName.endsWith(".ftl")) {
                logger.info("file:{}", fileName);
                BufferedReader br = new BufferedReader(new InputStreamReader(in, Charset.forName("utf-8")));
                String line = br.readLine();
                if ("!#parse".equals(org.apache.commons.lang3.StringUtils.trim(line))) {
                    Parse parse = Parse.parse(br, fileName);
                    if (parse.isList()) {
                        List<ClassInfo> classInfos = reqParam.getTables();
                        for (ClassInfo classInfo : classInfos) {
                            ClassFieldInfo primaryKey = classInfo.getPrimaryKey();
                            classInfo.setPackagePath(packagePath);
                            classInfo.setPrimaryKey(primaryKey);
                            classInfo.getColumnList().forEach(e -> {
                                        if (e.getTableColumn().getColumnName().equals(primaryKey.getTableColumn().getColumnName()))
                                            BeanUtils.copyProperties(e, primaryKey);
                                    }
                            );
                            templateParam.put("classInfo", classInfo);
                            String namePath = FreemarkerUtil.processPlainTextTemplate(parse.getFileName() + ".name", parse.getFileName(), templateParam);
                            String value = StringUtils.trim(FreemarkerUtil.processPlainTextTemplate(parse.getFileName(), parse.content, templateParam));
                            zip(value, dirName, convertName(namePath), zipOutputStream);
                        }
                        continue;
                    } else {
                        String namePath = FreemarkerUtil.processPlainTextTemplate(parse.getFileName() + ".name", parse.getFileName(), templateParam);
                        String value = StringUtils.trim(FreemarkerUtil.processPlainTextTemplate(parse.getFileName(), parse.content, templateParam));
                        zip(value, dirName, convertName(namePath), zipOutputStream);
                    }
                } else {
                    ByteArrayOutputStream baos = new ByteArrayOutputStream();
                    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(baos, Charset.forName("utf-8")));
                    while (line != null) {
                        bw.write(line);
                        bw.newLine();
                    }
                    bw.flush();
                    bw.close();
                    baos.close();
                    byte[] buff = baos.toByteArray();
                    zip(new ByteArrayInputStream(buff), dirName, fileName, zipOutputStream);
                }
            } else {
                if (!entry.isDirectory()) {
                    zip(in, dirName, fileName, zipOutputStream);
                }
            }
        }
    }


    private String convertName(String namePath) {
        int suffixIndex = namePath.lastIndexOf("/");
        String suffix = StringUtils.substring(namePath, suffixIndex);
        String fileNamePath = StringUtils.substring(namePath, 0, suffixIndex);
        fileNamePath = StringUtils.replace(fileNamePath, ".", "/");
        while (fileNamePath.indexOf("//") >= 0) {
            fileNamePath = StringUtils.replace(fileNamePath, "//", "/");
        }
        return fileNamePath + suffix;
    }

    private void zip(InputStream inputStream, String dirName, String namePath, ZipOutputStream zipOutputStream) throws Exception {
        String fileNane = dirName + "/" + namePath;
        fileNane = fileNane.replace(" ", "");
        fileNane = fileNane.replace("//", "/");
        logger.info(fileNane);
        zipOutputStream.putNextEntry(new ZipEntry(fileNane));
        byte[] buff = new byte[4096];
        int len;
        while ((len = inputStream.read(buff)) != -1) {
            zipOutputStream.write(buff, 0, len);
        }
        zipOutputStream.closeEntry();
    }

    private void zip(String context, String dirName, String namePath, ZipOutputStream zipOutputStream) throws Exception {
        String fileNane = dirName + "/" + namePath;
        fileNane = fileNane.replace(" ", "");
        fileNane = fileNane.replace("//", "/");
        logger.info(fileNane);
        zipOutputStream.putNextEntry(new ZipEntry(fileNane));
        zipOutputStream.write(context.getBytes(Charset.forName("utf-8")));
        zipOutputStream.closeEntry();

    }

    private static class Parse {
        private String tmplateName;
        private boolean isList;
        private String fileName;
        private String content;

        private BufferedReader br;


        public static Parse parse(BufferedReader br, String tmplateName) throws Exception {
            Parse parse = new Parse(br, tmplateName);
            parse.invoke();
            return parse;
        }

        private void invoke() throws Exception {
            String line = br.readLine();
            String fileName = tmplateName;
            StringBuilder sb = new StringBuilder();
            if (line.startsWith("!#name")) {
                fileName = StringUtils.replace(line, "!#name", "");
                line = br.readLine();
                if (StringUtils.isNotEmpty(line) && line.startsWith("!#list")) {
                    isList = true;
                    line = br.readLine();
                }
            }
            while (StringUtils.isEmpty(line)) {
                line = br.readLine();
            }
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(baos, Charset.forName("utf-8")));
            while (line != null) {
                bw.write(line);
                bw.newLine();
                line = br.readLine();
            }
            bw.flush();
            bw.close();
            baos.close();
            byte[] buff = baos.toByteArray();
            this.content = new String(buff, Charset.forName("utf-8"));
            this.fileName = fileName;
        }

        private Parse(BufferedReader br, String tmplateName) {
            this.br = br;
            this.tmplateName = tmplateName;
        }

        public String getFileName() {
            return fileName;
        }

        public boolean isList() {
            return isList;
        }


        public String getContent() {
            return content;
        }

    }
}
