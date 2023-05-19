package com.bj66nao.admin.gencode.model;

/**
 * Created by admin on 2019/12/11.
 */
public class TableColumn{

    private String columnName;
    private String desc;
    private String type;
    private Integer lenth;
    private Boolean primarKey=false;
    private boolean autoIncrement;

    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getLenth() {
        return lenth;
    }

    public void setLenth(Integer lenth) {
        this.lenth = lenth;
    }

    public Boolean getPrimarKey() {
        return primarKey;
    }

    public void setPrimarKey(Boolean primarKey) {
        this.primarKey = primarKey;
    }

    public Boolean getAutoIncrement() {
        return autoIncrement;
    }

    public void setAutoIncrement(Boolean autoIncrement) {
        this.autoIncrement = autoIncrement;
    }
}
