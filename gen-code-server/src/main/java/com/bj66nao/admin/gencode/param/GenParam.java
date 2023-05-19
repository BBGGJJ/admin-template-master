package com.bj66nao.admin.gencode.param;

import com.bj66nao.admin.gencode.model.ClassInfo;

import java.io.Serializable;
import java.util.List;

/**
 * Created by admin on 2019/12/7.
 */
public class GenParam implements Serializable {
    private List<ClassInfo> tables;
    private String uri;
    private String userName;
    private String password;
    private String packageName;
    private String projectName;
    private String packagePath;
    private String projectDesc;
    private String author;
    private String prefix;
    private List<String> template;

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<ClassInfo> getTables() {
        return tables;
    }

    public void setTables(List<ClassInfo> tables) {
        this.tables = tables;
    }


    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectDesc() {
        return projectDesc;
    }

    public void setProjectDesc(String projectDesc) {
        this.projectDesc = projectDesc;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPackagePath() {
        return packagePath;
    }

    public void setPackagePath(String packagePath) {
        this.packagePath = packagePath;
    }

    public List<String> getTemplate() {
        return template;
    }

    public void setTemplate(List<String> template) {
        this.template = template;
    }
}
