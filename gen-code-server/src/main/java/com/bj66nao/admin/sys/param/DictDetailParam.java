package com.bj66nao.admin.sys.param;


import com.bj66nao.admin.bean.page.PageRequest;

import java.util.Date;

/**
 * 字典详情管理
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class DictDetailParam extends PageRequest {

    /**
     * 唯一主键
     */
    private Integer id;

    /**
     * 字典id
     */
    private Integer tableId;

    /**
     * 编码
     */
    private String code;

    /**
     * 名称
     */
    private String name;

    /**
     * 顺序
     */
    private Integer index;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;

    /**
     * 生效状态
     */
    private Boolean valid;

    public static DictDetailParam ofTablieId(Integer id) {
        DictDetailParam param = new DictDetailParam();
        param.setTableId(id);
        return param;

    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Integer getTableId() {
        return tableId;
    }

    public void setTableId(Integer tableId) {
        this.tableId = tableId;
    }


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
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


    public Boolean getValid() {
        return valid;
    }

    public void setValid(Boolean valid) {
        this.valid = valid;
    }


    public DictDetailParam() {
    }

    private DictDetailParam(Builder builder) {

        setId(builder.id);

        setTableId(builder.tableId);

        setCode(builder.code);

        setName(builder.name);

        setIndex(builder.index);

        setCreateTime(builder.createTime);

        setUpdateTime(builder.updateTime);

        setValid(builder.valid);

    }

    public static final class Builder {
        /**
         * 唯一主键
         */
        private Integer id;

        /**
         * 字典id
         */
        private Integer tableId;

        /**
         * 编码
         */
        private String code;

        /**
         * 名称
         */
        private String name;

        /**
         * 顺序
         */
        private Integer index;

        /**
         * 创建时间
         */
        private Date createTime;

        /**
         * 更新时间
         */
        private Date updateTime;

        /**
         * 生效状态
         */
        private Boolean valid;

        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder tableId(Integer tableId) {
            this.tableId = tableId;
            return this;
        }

        public Builder code(String code) {
            this.code = code;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder index(Integer index) {
            this.index = index;
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

        public Builder valid(Boolean valid) {
            this.valid = valid;
            return this;
        }

        public DictDetailParam build() {
            return new DictDetailParam(this);
        }

    }
}