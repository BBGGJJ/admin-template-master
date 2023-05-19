package com.bj66nao.admin.auth.param;


/**
 * 角色与用户对应关系
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class UserRoleParam  {

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

    public static UserRoleParam of(Integer userId, Integer roleId) {
        UserRoleParam userRoleParam = new UserRoleParam();
        userRoleParam.setUserId(userId);
        userRoleParam.setRoleId(roleId);
        return userRoleParam;
    }

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