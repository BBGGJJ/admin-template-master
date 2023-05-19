package com.bj66nao.admin.sys.dto;

import java.util.Map;

/**
 * Created by EDZ on 2020/8/17.
 */
public class FuncDataDetailVo {
    private Map<String,Object> data;
    private Map<String, Map<Object, Object>> mappData;

    public Map<String, Object> getData() {
        return data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }

    public Map<String, Map<Object, Object>> getMappData() {
        return mappData;
    }

    public void setMappData(Map<String, Map<Object, Object>> mappData) {
        this.mappData = mappData;
    }
}
