package com.bj66nao.admin.sys.entity;



import java.util.Date;

/**
*  系统列表
*
*  Created by  on '2020-05-15 06:39:55'.
*/
public class AppsourceEntity {

    /**
    * 唯一标识
    */
    private Integer id;

    /**
    * 系统名称
    */
    private String name;

    /**
    * 系统说明
    */
    private String desc;

    /**
    * 系统编码
    */
    private String appCode;

    /**
    * 分组
    */
    private String group;

    /**
    * 系统状态
    */
    private Boolean status;

    /**
    * 创建人
    */
    private Long createBy;

    /**
    * 系统标识
    */
    private String token;

    /**
    * 创建时间
    */
    private Date createTime;

    /**
    * 修改时间
    */
    private Date updateTime;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getAppCode() {
        return appCode;
    }

    public void setAppCode(String appCode) {
        this.appCode = appCode;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Long getCreateBy() {
        return createBy;
    }

    public void setCreateBy(Long createBy) {
        this.createBy = createBy;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
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