package com.bj66nao.admin.gencode.controller;

import com.alibaba.fastjson.JSONArray;
import com.bj66nao.admin.gencode.core.MySqlDbHepler;
import com.bj66nao.admin.gencode.generator.IGenerator;
import com.bj66nao.admin.gencode.model.ClassInfo;
import com.bj66nao.admin.gencode.model.Result;
import com.bj66nao.admin.gencode.param.GenParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.util.*;
import java.util.zip.ZipOutputStream;

/**
 * sso server (for web)
 *
 * @author xuxueli 2017-08-01 21:39:47
 */
@Controller
@RequestMapping("/api/gencode/v1")
public class IndexController {
    private static final Logger logger = LoggerFactory.getLogger(IndexController.class);

    private static List<HashMap> template = new ArrayList<>();

    static {
        try {
            ClassPathResource classPathResource = new ClassPathResource("template.json");
            InputStream is = classPathResource.getInputStream();
            String str = StreamUtils.copyToString(is, Charset.forName("utf-8"));
            List<HashMap> value = JSONArray.parseArray(str, HashMap.class);
            template = value;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
    }

    @Autowired
    private MySqlDbHepler mySqlDbHepler;

    @Resource
    private IGenerator freemarkerTemplateGeneratorImpl;


    @RequestMapping("/")
    @ResponseBody
    public String index() {
        return "index";
    }

    @RequestMapping("/template")
    @ResponseBody
    public Result<List<HashMap>> templates() {
        return Result.success(template);
    }


    @RequestMapping("/tableList")
    @ResponseBody
    public Result<List<ClassInfo>> codeGenerate(@RequestBody GenParam param) throws Exception {
        try {
            return Result.success(mySqlDbHepler.tableList(param.getUri(), param.getUserName(), param.getPassword(), param.getPrefix()));
        } catch (Exception e) {
            return Result.error(e.getMessage());
        }
    }

    @RequestMapping("/codeGenerate")
    @ResponseBody
    public void codeGenerate(@RequestBody GenParam param, HttpServletResponse resp) throws Exception {
        try {
            resp.setHeader("Content-Disposition", "attachment; filename=\"" + param.getProjectName() + ".zip\"");
            resp.setContentType("application/octet-stream;charset=UTF-8");
            ZipOutputStream zipOut = new ZipOutputStream(resp.getOutputStream());
            List<String> resource = param.getTemplate();
            logger.info("template:{}", resource);
            if (!CollectionUtils.isEmpty(resource)) {
                resource.forEach(name -> {
                    try {
                        ClassPathResource fileRource = new ClassPathResource("templates/" + name + ".zip");
                        freemarkerTemplateGeneratorImpl.execute(fileRource.getInputStream(), param, param.getProjectName() + "-" + name, zipOut);
                    } catch (Exception e) {
                        throw new RuntimeException(e.getMessage(), e);
                    }
                });
            }

            zipOut.closeEntry();
            zipOut.finish();
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            resp.sendError(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage());
        }
    }
}