package com.bj66nao.admin.sys.param;


import com.bj66nao.admin.bean.page.PageRequest;

import java.util.Date;

/**
 * 数据源配置
 * <p>
 * Created by  on '2020-06-09 14:31:37'.
 */
public class DatasourceParam extends PageRequest {

    /**
     * 唯一主键
     */
    private Integer id;

    /**
     * 数据库类型
     */
    private Integer datebaseType;

    /**
     * 名称
     */
    private String sourceName;

    /**
     * 链接字符串
     */
    private String url;

    /**
     * 用户名
     */
    private String userName;

    /**
     * 密码
     */
    private String password;

    /**
     * 驱动名
     */
    private String driver;

    /**
     * 备注
     */
    private String remark;

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


    public Integer getDatebaseType() {
        return datebaseType;
    }

    public void setDatebaseType(Integer datebaseType) {
        this.datebaseType = datebaseType;
    }


    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }


    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getDriver() {
        return driver;
    }

    public void setDriver(String driver) {
        this.driver = driver;
    }


    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
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

    public DatasourceParam() {
    }

    private DatasourceParam(Builder builder) {

        setId(builder.id);

        setDatebaseType(builder.datebaseType);

        setSourceName(builder.sourceName);

        setUrl(builder.url);

        setUserName(builder.userName);

        setPassword(builder.password);

        setDriver(builder.driver);

        setRemark(builder.remark);

        setCreateTime(builder.createTime);

        setUpdateTime(builder.updateTime);

    }

    public static final class Builder {
        /**
         * 唯一主键
         */
        private Integer id;

        /**
         * 数据库类型
         */
        private Integer datebaseType;

        /**
         * 名称
         */
        private String sourceName;

        /**
         * 链接字符串
         */
        private String url;

        /**
         * 用户名
         */
        private String userName;

        /**
         * 密码
         */
        private String password;

        /**
         * 驱动名
         */
        private String driver;

        /**
         * 备注
         */
        private String remark;

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

        public Builder datebaseType(Integer datebaseType) {
            this.datebaseType = datebaseType;
            return this;
        }

        public Builder sourceName(String sourceName) {
            this.sourceName = sourceName;
            return this;
        }

        public Builder url(String url) {
            this.url = url;
            return this;
        }

        public Builder userName(String userName) {
            this.userName = userName;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

        public Builder driver(String driver) {
            this.driver = driver;
            return this;
        }

        public Builder remark(String remark) {
            this.remark = remark;
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

        public DatasourceParam build() {
            return new DatasourceParam(this);
        }

    }
}