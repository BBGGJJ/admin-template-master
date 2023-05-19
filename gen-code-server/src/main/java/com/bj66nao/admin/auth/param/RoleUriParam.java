package com.bj66nao.admin.auth.param;


/**
 * 角色与权限对应关系
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class RoleUriParam {

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

    public static RoleUriParam ofUriId(Integer uriId) {
        RoleUriParam param = new RoleUriParam();
        param.setUriId(uriId);
        return param;
    }

    public static RoleUriParam ofRoleId(Integer roleId) {
        RoleUriParam param = new RoleUriParam();
        param.setRoleId(roleId);
        return param;
    }


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


    public RoleUriParam() {
    }

    private RoleUriParam(Builder builder) {

        setId(builder.id);

        setUriId(builder.uriId);

        setRoleId(builder.roleId);

    }

    public static final class Builder {
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

        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder uriId(Integer uriId) {
            this.uriId = uriId;
            return this;
        }

        public Builder roleId(Integer roleId) {
            this.roleId = roleId;
            return this;
        }

        public RoleUriParam build() {
            return new RoleUriParam(this);
        }

    }
}