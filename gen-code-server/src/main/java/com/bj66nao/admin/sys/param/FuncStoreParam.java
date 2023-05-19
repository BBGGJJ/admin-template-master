package com.bj66nao.admin.sys.param;

import java.util.List;
import java.util.Map;

/**
 * Created by EDZ on 2020/8/10.
 */
public class FuncStoreParam {

    private String table;
    private Map<String, Object> valueMapp;

    private Map<String, String> fieldMapp;

    private List<String> sort;

    private boolean sortAsc;

    public String getTable() {
        return table;
    }

    public void setTable(String table) {
        this.table = table;
    }

    public Map<String, Object> getValueMapp() {
        return valueMapp;
    }

    public void setValueMapp(Map<String, Object> valueMapp) {
        this.valueMapp = valueMapp;
    }

    public Map<String, String> getFieldMapp() {
        return fieldMapp;
    }

    public void setFieldMapp(Map<String, String> fieldMapp) {
        this.fieldMapp = fieldMapp;
    }

    public List<String> getSort() {
        return sort;
    }

    public void setSort(List<String> sort) {
        this.sort = sort;
    }

    public boolean isSortAsc() {
        return sortAsc;
    }

    public void setSortAsc(boolean sortAsc) {
        this.sortAsc = sortAsc;
    }
}
