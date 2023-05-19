package com.bj66nao.admin.auth.param;


import com.bj66nao.admin.bean.page.PageRequest;

import java.util.Date;

/**
 * 系统列表
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class AppsourceParam extends PageRequest {

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

    private String suggest;


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

    public String getSuggest() {
        return suggest;
    }

    public void setSuggest(String suggest) {
        this.suggest = suggest;
    }

    public AppsourceParam() {
    }

    private AppsourceParam(Builder builder) {

        setId(builder.id);

        setName(builder.name);

        setDesc(builder.desc);

        setAppCode(builder.appCode);

        setGroup(builder.group);

        setStatus(builder.status);

        setCreateBy(builder.createBy);

        setToken(builder.token);

        setCreateTime(builder.createTime);

        setUpdateTime(builder.updateTime);
        setSuggest(builder.suggest);

    }

    public static final class Builder {
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

        private String suggest;

        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder desc(String desc) {
            this.desc = desc;
            return this;
        }

        public Builder appCode(String appCode) {
            this.appCode = appCode;
            return this;
        }

        public Builder group(String group) {
            this.group = group;
            return this;
        }

        public Builder status(Boolean status) {
            this.status = status;
            return this;
        }

        public Builder createBy(Long createBy) {
            this.createBy = createBy;
            return this;
        }

        public Builder token(String token) {
            this.token = token;
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

        public Builder suggest(String suggest) {
            this.suggest = suggest;
            return this;
        }

        public AppsourceParam build() {
            return new AppsourceParam(this);
        }

    }
}