package com.bj66nao.admin.auth.param;



import com.bj66nao.admin.bean.page.PageRequest;

import java.util.Date;
/**
*  权限管理
*
*  Created by  on '2020-05-15 06:39:55'.
*/
public class UriParam extends PageRequest {

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

    private String appName;
    /**
    * uri类型
    */
    private Integer type;

    /**
    * 创建时间
    */
    private Date createTime;

    /**
    * 修改时间
    */
    private Date updateTime;

    private String uriCode;
    private String icon;
    private String funcCode;

    public String getFuncCode() {
        return funcCode;
    }

    public void setFuncCode(String funcCode) {
        this.funcCode = funcCode;
    }

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

    public UriParam() {
    }

    private UriParam(Builder builder) {

        setId(builder.id);

        setPath(builder.path);

        setUriName(builder.uriName);

        setUriDescription(builder.uriDescription);

        setParentId(builder.parentId);

        setAppCode(builder.appCode);

        setType(builder.type);

        setCreateTime(builder.createTime);

        setUpdateTime(builder.updateTime);

    }

    public static final class Builder {
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

        public Builder path(String path) {
            this.path = path;
            return this;
        }

        public Builder uriName(String uriName) {
            this.uriName = uriName;
            return this;
        }

        public Builder uriDescription(String uriDescription) {
            this.uriDescription = uriDescription;
            return this;
        }

        public Builder parentId(Integer parentId) {
            this.parentId = parentId;
            return this;
        }

        public Builder appCode(Integer appCode) {
            this.appCode = appCode;
            return this;
        }

        public Builder type(Integer type) {
            this.type = type;
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

        public UriParam build() {
              return new UriParam(this);
        }

    }
}