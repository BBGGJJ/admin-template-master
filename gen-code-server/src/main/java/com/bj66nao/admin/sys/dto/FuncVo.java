package com.bj66nao.admin.sys.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * Created by EDZ on 2020/8/7.
 */
public class FuncVo implements Serializable {
    /**
     * 功能名称
     */
    private String name;

    /**
     * 功能编码
     */
    private String code;

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

    private Map<String, Map<Object, Object>> mappData;

    private List<FuncPropertyVo> propertyVos;

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


    public Boolean getCreate() {
        return isCreate;
    }

    public void setCreate(Boolean create) {
        isCreate = create;
    }

    public Boolean getEdit() {
        return isEdit;
    }

    public void setEdit(Boolean edit) {
        isEdit = edit;
    }

    public Boolean getDetail() {
        return isDetail;
    }

    public void setDetail(Boolean detail) {
        isDetail = detail;
    }

    public Boolean getDelete() {
        return isDelete;
    }

    public void setDelete(Boolean delete) {
        isDelete = delete;
    }

    public List<FuncPropertyVo> getPropertyVos() {
        return propertyVos;
    }

    public void setPropertyVos(List<FuncPropertyVo> propertyVos) {
        this.propertyVos = propertyVos;
    }

    public Map<String, Map<Object, Object>> getMappData() {
        return mappData;
    }

    public void setMappData(Map<String, Map<Object, Object>> mappData) {
        this.mappData = mappData;
    }
}
