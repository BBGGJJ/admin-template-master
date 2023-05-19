package com.bj66nao.admin.gencode.core;

import com.bj66nao.admin.gencode.exception.BaseException;
import com.bj66nao.admin.gencode.model.*;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.sql.*;
import java.util.*;

/**
 * Created by peng.liu11 on 2019/5/25.
 */
@Service
public class MySqlDbHepler implements DbHelper {

    private static Logger logger = LoggerFactory.getLogger(MySqlDbHepler.class);
    private static Map<String, String> javaTypeConverMapp = new HashMap<>();
    private static Map<String, String> jdbcTypeConverMapp = new HashMap<>();

    static {
        javaTypeConverMapp.put(java.sql.Timestamp.class.getName(), java.util.Date.class.getName());
        javaTypeConverMapp.put(java.sql.Date.class.getName(), java.util.Date.class.getName());
        javaTypeConverMapp.put(BigInteger.class.getName(), Long.class.getName());
        jdbcTypeConverMapp.put("INT", "INTEGER");
        jdbcTypeConverMapp.put("DATETIME", "DATE");
        jdbcTypeConverMapp.put("MEDIUMTEXT", "BLOB");


    }

    @Override
    public List<ClassInfo> tableList(String url, String userName, String password, String prefix) throws Exception {
        Connection conn = null;
        ResultSet rs = null;
        List<ClassInfo> result = new ArrayList<>();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url, userName, password);
            DatabaseMetaData metaData = conn.getMetaData();
            rs = metaData.getTables(null, null, null, new String[]{"TABLE"});
            List<String> tables = new ArrayList<>();
            String dbName = getDbName(url);
            while (rs.next()) {
                ResultSetMetaData resultSetMetaData = rs.getMetaData();
                String tablsName = rs.getString("TABLE_NAME");
                String tableCat = rs.getString("TABLE_CAT");
                if (!tableCat.equals(dbName) || tablsName.indexOf(".") > -1) {
                    continue;
                }
                tables.add(tablsName);
            }
            rs.close();
            String[] prefixs = StringUtils.split(prefix, ",");
            return genClassInfoByTables(url, userName, password, dbName, tables, prefixs);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw e;
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (conn != null) {
                conn.close();
            }
        }
    }

    private String getDbName(String url) {
        String split = StringUtils.split(url, "?")[0];
        return split.substring(split.lastIndexOf("/") + 1);
    }

    private List<ClassInfo> genClassInfoByTables(String url, String userName, String password, String dbName, List<String> tables, String[] prefixs) throws Exception {
        List<ClassInfo> classInfos = new ArrayList<>(tables.size());
        Connection conn = DriverManager.getConnection(url, userName, password);
        tables.forEach(t -> {
                    ClassInfo classInfo = genClassInfoByTable(conn, dbName, t, prefixs);
                    fillComment(conn, classInfo);
                    classInfos.add(classInfo);
                }
        );
        conn.close();
        return classInfos;
    }

    private ClassInfo genClassInfoByTable(Connection conn, String dbName, String table, String[] prefixs) {
        logger.info("table:{}", table);
        String sql = "select * from  " + table + " limit 1";
        Statement statement = null;
        ResultSet resultSet = null;
        DatabaseMetaData databaseMetaData = null;
        ResultSet primaryKeysResultSet = null;
        ResultSetMetaData resultSetMetaData = null;
        try {
            databaseMetaData = conn.getMetaData();
            primaryKeysResultSet = databaseMetaData.getPrimaryKeys(conn.getCatalog(), null, table);
            ResultSetMetaData metaData = primaryKeysResultSet.getMetaData();
            ClassInfo classInfo = new ClassInfo();
            ClassFieldInfo primarKey = null;
            if (primaryKeysResultSet.next()) {
                primarKey = new ClassFieldInfo();
                String columnName = primaryKeysResultSet.getString("COLUMN_NAME");
                int len = primaryKeysResultSet.getMetaData().getColumnCount();
                TableColumn tableColumn = new TableColumn();
                BeanAttr beanAttr = new BeanAttr();
                ViewAttr viewAttr = new ViewAttr();
                tableColumn.setColumnName(columnName);
                primarKey.setTableColumn(tableColumn);
                primarKey.setBeanAttr(beanAttr);
                primarKey.setViewAttr(viewAttr);
            } else {
                logger.error("table:{}", table);
                throw new BaseException("表[" + table + "]没有主键");
            }
            statement = conn.createStatement();
            resultSet = statement.executeQuery(sql);
            resultSetMetaData = resultSet.getMetaData();
            int columtLen = resultSetMetaData.getColumnCount();
            List<ClassFieldInfo> fieldInfos = new ArrayList<>();
            Set<String> classFieldNames = new HashSet<>();
            for (int i = 1; i <= columtLen; i++) {
                String columnName = resultSetMetaData.getColumnName(i);
                ClassFieldInfo fieldInfo;
                logger.info("columnName:{}", columnName);
                logger.info("primarKey:{},getTableColumn:{}", primarKey, primarKey.getTableColumn());
                if (columnName.equals(primarKey.getTableColumn().getColumnName())) {
                    fieldInfo = primarKey;
                    fieldInfo.getTableColumn().setPrimarKey(true);

                } else {
                    TableColumn tableColumn = new TableColumn();
                    BeanAttr beanAttr = new BeanAttr();
                    ViewAttr viewAttr = new ViewAttr();
                    tableColumn.setColumnName(columnName);
                    fieldInfo = new ClassFieldInfo();
                    fieldInfo.setBeanAttr(beanAttr);
                    fieldInfo.setViewAttr(viewAttr);
                    fieldInfo.setTableColumn(tableColumn);
                    fieldInfo.getViewAttr().setDisabled(false);
                }
                columnName = columnName.toLowerCase();
                fieldInfo.getTableColumn().setColumnName(columnName);
                String className = resultSetMetaData.getColumnClassName(i);
                if (javaTypeConverMapp.containsKey(className)) {
                    className = javaTypeConverMapp.get(className);
                }
                fieldInfo.getBeanAttr().setJavaType(className);
                String[] split = StringUtils.split(className, ".");
                fieldInfo.getBeanAttr().setTypeClassName(split[split.length - 1]);
                String type = resultSetMetaData.getColumnTypeName(i);
                if (jdbcTypeConverMapp.containsKey(type)) {
                    fieldInfo.getTableColumn().setType(jdbcTypeConverMapp.get(type));
                } else {
                    type = StringUtils.split(type)[0];
                    if (jdbcTypeConverMapp.containsKey(type)) {
                        fieldInfo.getTableColumn().setType(jdbcTypeConverMapp.get(type));
                    } else {
                        fieldInfo.getTableColumn().setType(type);
                    }
                }
                String columnClassName = com.bj66nao.admin.utils.StringUtils.underlineToCamelCase(columnName);
                if (JAVA_KEYWORD.contains(columnClassName)) {
                    columnClassName = columnClassName + KEYWORD_APPEND_CHAR;
                } else if (PROJECT_FIELD_KEYWORD.contains(columnName)) {
                    columnClassName = columnClassName + KEYWORD_APPEND_CHAR;
                }
                if (classFieldNames.contains(columnClassName)) {
                    fieldInfo.getBeanAttr().setName(columnName);
                } else {
                    fieldInfo.getBeanAttr().setName(columnClassName);
                }
                classFieldNames.add(fieldInfo.getBeanAttr().getName());
                fieldInfo.getTableColumn().setDesc(columnName);
                fieldInfo.getBeanAttr().setCnName(columnName);
                fieldInfo.getTableColumn().setLenth(resultSetMetaData.getColumnDisplaySize(i));
                fieldInfos.add(fieldInfo);
            }
            classInfo.setColumnList(fieldInfos);
            classInfo.setTableName(table);
            classInfo.setDesc(table);
            classInfo.setPrimaryKey(primarKey);
            classInfo.setBusinessModule(dbName);
            classInfo.setBusinessModuleDesc("首页");
            String temp = subPrefix(table, prefixs);
            String className = com.bj66nao.admin.utils.StringUtils.upperCaseFirst(com.bj66nao.admin.utils.StringUtils.underlineToCamelCase(temp));
            classInfo.setName(className);
            return classInfo;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage(), e);
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }

                if (primaryKeysResultSet != null) {
                    primaryKeysResultSet.close();
                }

            } catch (Exception e) {
                logger.error(e.getMessage(), e);
            }
        }
    }

    private String subPrefix(String table, String[] prefixs) {
        if(prefixs==null||prefixs.length<1){
            return table;
        }
        String result = "";
        for (String prefix : prefixs) {
            if (table.startsWith(prefix)) {
                result = table.substring(prefix.length() - 1);
            }
        }
        if (result.startsWith("_") && result.length() > 1) {
            result = result.substring(1, result.length() - 1);
        }
        if (StringUtils.isEmpty(result)) {
            return table;
        }
        return result;
    }

    private void fillComment(Connection conn, ClassInfo classInfo) {
        ResultSet showTableResultSet = null;
        Statement showTableStatement = null;
        try {
            showTableStatement = conn.createStatement();
            showTableResultSet = showTableStatement.executeQuery("show create table " + classInfo.getTableName());
            showTableResultSet.next();
            String createTableSql = showTableResultSet.getString(2);
            fillTableComment(classInfo, createTableSql);
            fillFieleComment(classInfo, createTableSql);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage(), e);
        } finally {
            try {
                if (showTableResultSet != null) {
                    showTableResultSet.close();
                }
                if (showTableStatement != null) {
                    showTableStatement.close();
                }
            } catch (Exception e) {
                logger.error(e.getMessage(), e);
            }
        }
    }

    private void fillTableComment(ClassInfo classInfo, String tableSql) {
        String classCommentTmp = tableSql.substring(tableSql.lastIndexOf("COMMENT=") + 8).trim();
        classCommentTmp = replace(classCommentTmp);
        classCommentTmp = StringUtils.trim(classCommentTmp);
        classInfo.setDesc(classCommentTmp);
    }

    private String replace(String classCommentTmp) {
        classCommentTmp = StringUtils.split(classCommentTmp, " ")[0];
        classCommentTmp = StringUtils.replace(classCommentTmp, "'", "");
        classCommentTmp = StringUtils.replace(classCommentTmp, ";", "");
        classCommentTmp = StringUtils.replace(classCommentTmp, ",", "");
        classCommentTmp = StringUtils.replace(classCommentTmp, "`", "");
        classCommentTmp = StringUtils.replace(classCommentTmp, "\n", "");
        classCommentTmp = StringUtils.replace(classCommentTmp, "\t", "");
        classCommentTmp = StringUtils.trim(classCommentTmp);
        return classCommentTmp;
    }

    private void fillFieleComment(ClassInfo classInfo, String tableSql) {
        String fieldSql = tableSql.substring(tableSql.indexOf("(") + 1, tableSql.lastIndexOf(")"));
        String[] fieldDescs = StringUtils.split(fieldSql, "\n");
        Map<String, ClassFieldInfo> commentMapp = new HashMap<>();
        for (ClassFieldInfo fieldInfo : classInfo.getColumnList()) {
            commentMapp.put(fieldInfo.getTableColumn().getColumnName().toUpperCase(), fieldInfo);
        }
        for (String fieldDesc : fieldDescs) {
            String trim = StringUtils.trim(fieldDesc);
            String fieldName = StringUtils.split(trim, " ")[0].toUpperCase();
            fieldName = replace(fieldName);
            String upper = fieldDesc.toUpperCase();
            if (upper.contains("AUTO_INCREMENT")) {
                if (Arrays.asList(StringUtils.split(upper, " ")).contains("AUTO_INCREMENT")) {
                    commentMapp.get(fieldName).getTableColumn().setAutoIncrement(true);
                    commentMapp.get(fieldName).getViewAttr().setDisabled(true);
                }
            }
            if (!fieldDesc.contains("COMMENT")) {
                continue;
            }
            String[] splits = StringUtils.split(trim, "COMMENT");
            String comment = splits[splits.length - 1];
            comment = replace(comment);
            if (commentMapp.containsKey(fieldName)) {
                commentMapp.get(fieldName).getTableColumn().setDesc(comment);
                commentMapp.get(fieldName).getBeanAttr().setCnName(comment);
            } else {
                logger.info("table:{},fileName:{}", classInfo.getTableName(), fieldDesc);
            }
        }
        String classCommentTmp = tableSql.substring(tableSql.lastIndexOf("COMMENT=") + 8).trim();
        classCommentTmp = replace(classCommentTmp);
        classInfo.setDesc(classCommentTmp);
    }

    @Override
    public String dbName() {
        return "MySql";
    }

}
