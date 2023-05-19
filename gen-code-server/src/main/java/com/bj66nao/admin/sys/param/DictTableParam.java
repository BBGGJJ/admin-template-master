package com.bj66nao.admin.sys.param;


import com.bj66nao.admin.bean.page.PageRequest;

import java.util.Date;

/**
*  字典列表
*
*  Created by  on '2020-05-15 06:39:55'.
*/
public class DictTableParam extends PageRequest {

    /**
    * 唯一标识
    */
    private Integer id;

    /**
    * 字典编码
    */
    private String code;

    /**
    * 字典表名称
    */
    private String dictName;

    /**
    * 描述
    */
    private String desc;

    /**
    * 状态
    */
    private Boolean status;

    /**
    * 创建时间
    */
    private Date createTime;

    /**
    * 更新时间
    */
    private Date updateTime;

    private String suggest;


    public Integer getId() {
     return id;
    }

    public void setId(Integer id) {
      this.id = id;
    }


    public String getCode() {
     return code;
    }

    public void setCode(String code) {
      this.code = code;
    }


    public String getDictName() {
     return dictName;
    }

    public void setDictName(String dictName) {
      this.dictName = dictName;
    }


    public String getDesc() {
     return desc;
    }

    public void setDesc(String desc) {
      this.desc = desc;
    }


    public Boolean getStatus() {
     return status;
    }

    public void setStatus(Boolean status) {
      this.status = status;
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

    public DictTableParam() {
    }

    private DictTableParam(Builder builder) {

        setId(builder.id);

        setCode(builder.code);

        setDictName(builder.dictName);

        setDesc(builder.desc);

        setStatus(builder.status);

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
        * 字典编码
        */
        private String code;

        /**
        * 字典表名称
        */
        private String dictName;

        /**
        * 描述
        */
        private String desc;

        /**
        * 状态
        */
        private Boolean status;

        /**
        * 创建时间
        */
        private Date createTime;

        /**
        * 更新时间
        */
        private Date updateTime;

        private String suggest;


        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder code(String code) {
            this.code = code;
            return this;
        }
        public Builder suggest(String suggest) {
            this.suggest = suggest;
            return this;
        }

        public Builder dictName(String dictName) {
            this.dictName = dictName;
            return this;
        }

        public Builder desc(String desc) {
            this.desc = desc;
            return this;
        }

        public Builder status(Boolean status) {
            this.status = status;
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

        public DictTableParam build() {
              return new DictTableParam(this);
        }

    }
}