package com.bj66nao.admin.auth.dto;


import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
*  角色管理
*
*  Created by  '2020-05-15 06:39:55'.
*/
public class RoleDto implements Serializable{

    /**
    * 角色ID
    */
    private Integer id;

    /**
    * 角色状态
    */
    private Boolean roleStatus;

    /**
    * 角色名称
    */
    private String roleName;

    /**
    * 角色描述
    */
    private String roleDescription;

    /**
    * 系统编号
    */
    private Integer appCode;


    /**
     * 系统名称
     */
    private String appName;
    /**
    * 创建时间
    */
    private Date createTime;

    /**
    * 修改时间
    */
    private Date updateTime;

    private List<Integer> uriIds;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getRoleStatus() {
        return roleStatus;
    }

    public void setRoleStatus(Boolean roleStatus) {
        this.roleStatus = roleStatus;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }

    public Integer getAppCode() {
        return appCode;
    }

    public void setAppCode(Integer appCode) {
        this.appCode = appCode;
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

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public List<Integer> getUriIds() {
        return uriIds;
    }

    public void setUriIds(List<Integer> uriIds) {
        this.uriIds = uriIds;
    }
}