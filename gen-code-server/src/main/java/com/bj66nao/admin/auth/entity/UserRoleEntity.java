package com.bj66nao.admin.auth.entity;




/**
*  角色与用户对应关系
*
*  Created by  on '2020-05-15 06:39:55'.
*/
public class UserRoleEntity {

    /**
    * ID
    */
    private Integer id;

    /**
    * 用户ID
    */
    private Integer userId;

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

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

}