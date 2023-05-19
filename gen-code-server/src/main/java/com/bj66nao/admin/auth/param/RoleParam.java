package com.bj66nao.admin.auth.param;



import com.bj66nao.admin.bean.page.PageRequest;

import java.util.Date;
/**
*  角色管理
*
*  Created by  on '2020-05-15 06:39:55'.
*/
public class RoleParam extends PageRequest {

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
    private Long appCode;

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


    public Long getAppCode() {
     return appCode;
    }

    public void setAppCode(Long appCode) {
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


    public RoleParam() {
    }

    private RoleParam(Builder builder) {

        setId(builder.id);

        setRoleStatus(builder.roleStatus);

        setRoleName(builder.roleName);

        setRoleDescription(builder.roleDescription);

        setAppCode(builder.appCode);

        setCreateTime(builder.createTime);

        setUpdateTime(builder.updateTime);

    }

    public static final class Builder {
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
        private Long appCode;

        /**
        * 创建时间
        */
        private Date createTime;

        /**
        * 修改时间
        */
        private Date updateTime;

        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder roleStatus(Boolean roleStatus) {
            this.roleStatus = roleStatus;
            return this;
        }

        public Builder roleName(String roleName) {
            this.roleName = roleName;
            return this;
        }

        public Builder roleDescription(String roleDescription) {
            this.roleDescription = roleDescription;
            return this;
        }

        public Builder appCode(Long appCode) {
            this.appCode = appCode;
            return this;
        }

        public Builder createTime(Date createTime) {
            this.createTime = createTime;
            return this;
        }

        public Builder updateTime(Date updateTime) {
            this.updateTime = updateTime;
            return this;
        }

        public RoleParam build() {
              return new RoleParam(this);
        }

    }
}