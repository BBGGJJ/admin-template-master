package com.bj66nao.admin.auth.entity;



import java.util.Date;

/**
*  权限管理用户表
*
*  Created by  on '2020-05-19 06:07:49'.
*/
public class AuthUserEntity {

    /**
    * 唯一主键
    */
    private Integer id;

    /**
    * 用户ID
    */
    private Long  userId;

    /**
    * 系统ID
    */
    private Integer appsourceId;

    /**
    * 状态
    */
    private Boolean status;

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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getAppsourceId() {
        return appsourceId;
    }

    public void setAppsourceId(Integer appsourceId) {
        this.appsourceId = appsourceId;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
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