package com.bj66nao.admin.gencode.model;

/**
 * Created by admin on 2019/12/11.
 */

public class ViewAttr {
    private boolean disabled;
    private String defultValue;
    private String inputType;
    private String inputMethod;
    private String inputEnumData;
    private String pattern;
    private String  switchType;
    private String selectUrl;
    private boolean required;
    private boolean allowEdit = true;
    private boolean listView = true;
    private boolean detailView = true;

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }

    public String getDefultValue() {
        return defultValue;
    }

    public void setDefultValue(String defultValue) {
        this.defultValue = defultValue;
    }

    public String getInputType() {
        return inputType;
    }

    public void setInputType(String inputType) {
        this.inputType = inputType;
    }

    public String getInputMethod() {
        return inputMethod;
    }

    public void setInputMethod(String inputMethod) {
        this.inputMethod = inputMethod;
    }

    public String getInputEnumData() {
        return inputEnumData;
    }

    public void setInputEnumData(String inputEnumData) {
        this.inputEnumData = inputEnumData;
    }

    public String getPattern() {
        return pattern;
    }

    public void setPattern(String pattern) {
        this.pattern = pattern;
    }


    public String getSwitchType() {
        return switchType;
    }

    public void setSwitchType(String switchType) {
        this.switchType = switchType;
    }

    public String getSelectUrl() {
        return selectUrl;
    }

    public void setSelectUrl(String selectUrl) {
        this.selectUrl = selectUrl;
    }

    public boolean isRequired() {
        return required;
    }

    public void setRequired(boolean required) {
        this.required = required;
    }

    public boolean isAllowEdit() {
        return allowEdit;
    }

    public void setAllowEdit(boolean allowEdit) {
        this.allowEdit = allowEdit;
    }

    public boolean isListView() {
        return listView;
    }

    public void setListView(boolean listView) {
        this.listView = listView;
    }

    public boolean isDetailView() {
        return detailView;
    }

    public void setDetailView(boolean detailView) {
        this.detailView = detailView;
    }
}
