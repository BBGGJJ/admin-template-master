package com.bj66nao.admin.auth.dto;


import java.io.Serializable;
import java.util.Date;
/**
*  uri白名单管理
*
*  Created by  '2020-05-20 05:42:51'.
*/
public class UriWhiteListDto implements Serializable{

    /**
    * 唯一主键
    */
    private Integer id;

    /**
    * 状态
    */
    private Boolean status;

    /**
    * 系统编号
    */
    private Integer appId;

    private String appCode;
    private String appName;

    /**
    * 白名单路径
    */
    private String excludeUri;

    /**
    * 备注
    */
    private String desc;

    /**
    * 创建时间
    */
    private Date createTime;

    /**
    * 修改时间
    */
    private Date updateTime;

    public String getAppCode() {
        return appCode;
    }

    public void setAppCode(String appCode) {
        this.appCode = appCode;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Integer getAppId() {
        return appId;
    }

    public void setAppId(Integer appId) {
        this.appId = appId;
    }

    public String getExcludeUri() {
        return excludeUri;
    }

    public void setExcludeUri(String excludeUri) {
        this.excludeUri = excludeUri;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
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

}