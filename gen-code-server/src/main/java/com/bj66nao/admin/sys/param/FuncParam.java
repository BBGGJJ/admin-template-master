package com.bj66nao.admin.sys.param;


import java.util.Date;

import com.bj66nao.admin.bean.page.PageRequest;

/**
 * 功能管理
 * <p>
 * Created by  on '2020-08-07 15:58:33'.
 */
public class FuncParam extends PageRequest {

    /**
     * 唯一主键
     */
    private Integer id;

    /**
     * 功能名称
     */
    private String name;

    /**
     * 功能编码
     */
    private String code;

    /**
     * 表名称
     */
    private String tableName;

    /**
     * 是否可以新增
     */
    private Boolean isCreate;

    /**
     * 是否可以编辑
     */
    private Boolean isEdit;

    /**
     * 是否可以查看详情
     */
    private Boolean isDetail;

    /**
     * 是否可以删除
     */
    private Boolean isDelete;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 修改时间
     */
    private Date updateTime;

    /**
     * 状态（有效0无效）
     */
    private Boolean status;

    private String suggest;
    private Integer  dataSourceId;

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


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }


    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }


    public Boolean getIsCreate() {
        return isCreate;
    }

    public void setIsCreate(Boolean isCreate) {
        this.isCreate = isCreate;
    }


    public Boolean getIsEdit() {
        return isEdit;
    }

    public void setIsEdit(Boolean isEdit) {
        this.isEdit = isEdit;
    }


    public Boolean getIsDetail() {
        return isDetail;
    }

    public void setIsDetail(Boolean isDetail) {
        this.isDetail = isDetail;
    }


    public Boolean getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Boolean isDelete) {
        this.isDelete = isDelete;
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


    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getSuggest() {
        return suggest;
    }

    public void setSuggest(String suggest) {
        this.suggest = suggest;
    }

    public Integer getDataSourceId() {
        return dataSourceId;
    }

    public void setDataSourceId(Integer dataSourceId) {
        this.dataSourceId = dataSourceId;
    }

    public FuncParam() {
    }

    private FuncParam(Builder builder) {

        setId(builder.id);

        setName(builder.name);

        setCode(builder.code);

        setTableName(builder.tableName);

        setIsCreate(builder.isCreate);

        setIsEdit(builder.isEdit);

        setIsDetail(builder.isDetail);

        setIsDelete(builder.isDelete);

        setCreateTime(builder.createTime);

        setUpdateTime(builder.updateTime);

        setStatus(builder.status);

    }

    public static final class Builder {
        /**
         * 唯一主键
         */
        private Integer id;

        /**
         * 功能名称
         */
        private String name;

        /**
         * 功能编码
         */
        private String code;

        /**
         * 表名称
         */
        private String tableName;

        /**
         * 是否可以新增
         */
        private Boolean isCreate;

        /**
         * 是否可以编辑
         */
        private Boolean isEdit;

        /**
         * 是否可以查看详情
         */
        private Boolean isDetail;

        /**
         * 是否可以删除
         */
        private Boolean isDelete;

        /**
         * 创建时间
         */
        private Date createTime;

        /**
         * 修改时间
         */
        private Date updateTime;

        /**
         * 状态（有效0无效）
         */
        private Boolean status;

        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder code(String code) {
            this.code = code;
            return this;
        }

        public Builder tableName(String tableName) {
            this.tableName = tableName;
            return this;
        }

        public Builder isCreate(Boolean isCreate) {
            this.isCreate = isCreate;
            return this;
        }

        public Builder isEdit(Boolean isEdit) {
            this.isEdit = isEdit;
            return this;
        }

        public Builder isDetail(Boolean isDetail) {
            this.isDetail = isDetail;
            return this;
        }

        public Builder isDelete(Boolean isDelete) {
            this.isDelete = isDelete;
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

        public Builder status(Boolean status) {
            this.status = status;
            return this;
        }

        public FuncParam build() {
            return new FuncParam(this);
        }

    }
}
