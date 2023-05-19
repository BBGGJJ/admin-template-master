package com.bj66nao.admin.sys.dto;


import java.io.Serializable;
import java.util.Date;

/**
*  字典列表
*
*  Created by  '2020-05-15 06:39:55'.
*/
public class DictTableDto implements Serializable{

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

}