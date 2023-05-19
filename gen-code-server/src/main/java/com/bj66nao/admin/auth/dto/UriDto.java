package com.bj66nao.admin.auth.dto;


import java.io.Serializable;
import java.util.Date;

/**
 * 权限管理
 * <p>
 * Created by  '2020-05-15 06:39:55'.
 */
public class UriDto implements Serializable {

    /**
     * 权限ID
     */
    private Integer id;

    /**
     * url路径
     */
    private String path;

    /**
     * 权限名称
     */
    private String uriName;

    /**
     * 权限描述
     */
    private String uriDescription;

    /**
     * 父权限id
     */
    private Integer parentId;

    /**
     * 系统编码
     */
    private Integer appCode;

    /**
     * uri类型
     */
    private Integer type;

    private String typeDesc;

    /**
     * 创建时间
     */
    private Date createTime;

    private Integer index;

    /**
     * 修改时间
     */
    private Date updateTime;

    private String uriCode;
    private String icon;
    private String funcCode;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getUriName() {
        return uriName;
    }

    public void setUriName(String uriName) {
        this.uriName = uriName;
    }

    public String getUriDescription() {
        return uriDescription;
    }

    public void setUriDescription(String uriDescription) {
        this.uriDescription = uriDescription;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Integer getAppCode() {
        return appCode;
    }

    public void setAppCode(Integer appCode) {
        this.appCode = appCode;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getTypeDesc() {
        return typeDesc;
    }

    public void setTypeDesc(String typeDesc) {
        this.typeDesc = typeDesc;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getUriCode() {
        return uriCode;
    }

    public void setUriCode(String uriCode) {
        this.uriCode = uriCode;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getFuncCode() {
        return funcCode;
    }

    public void setFuncCode(String funcCode) {
        this.funcCode = funcCode;
    }
}