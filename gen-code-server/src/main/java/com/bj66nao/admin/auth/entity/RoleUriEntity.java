package com.bj66nao.admin.auth.entity;




/**
*  角色与权限对应关系
*
*  Created by  on '2020-05-15 06:39:55'.
*/
public class RoleUriEntity {

    /**
    * ID
    */
    private Integer id;

    /**
    * 权限ID
    */
    private Integer uriId;

    /**
    * 角色ID
    */
    private Integer roleId;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUriId() {
        return uriId;
    }

    public void setUriId(Integer uriId) {
        this.uriId = uriId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

}