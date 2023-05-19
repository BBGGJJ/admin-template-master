package com.bj66nao.admin.sys.entity;



import java.util.Date;

/**
*  功能属性配置
*
*  Created by  on '2020-08-07 15:58:33'.
*/
public class FuncPropertyEntity {

    /**
    * 唯一主键
    */
    private Integer id;

    /**
    * 功能id
    */
    private Integer funcId;

    private Boolean primaryKey;

    private Boolean create;

    /**
    * 属性名称
    */
    private String propName;

    /**
    * 属性编码
    */
    private String propKey;

    /**
    * 属性编码
    */
    private String columnName;

    /**
    * 显示类型
    */
    private String viewType;

    /**
    * 默认值
    */
    private String defaultValue;

    /**
    * 是否必填
    */
    private Boolean required;

    /**
    * 校验规则(正则)
    */
    private String regex;

    /**
    * 输入框maxLength
    */
    private Integer maxLength;

    /**
    * 显示顺序
    */
    private Integer index;

    /**
    * 是否可编辑
    */
    private Boolean edit;

    /**
    * 是否可搜索
    */
    private Boolean searchView;

    /**
    * 详情页展示
    */
    private Boolean detailView;

    /**
    * 列表页展示
    */
    private Boolean listView;

    /**
    * 是否关联下个属性
    */
    private Boolean joinNext;

    /**
    * 跳转链接
    */
    private String link;

    /**
    * 值类型（0：普通值，1：枚举值，2：关联表，3：字典表数据4:
    */
    private Integer dataType;

    /**
    * 关联表名称
    */
    private String linkTableName;

    /**
    * 关联属性key
    */
    private String tablePropField;

    /**
    * 关联描述名称
    */
    private String tableDescField;

    /**
    * 关联查询条件
    */
    private String tableQueryCondition;

    /**
    * 查询url地址
    */
    private String linkUrl;

    /**
    * 关联属性key
    */
    private String urlPropField;

    /**
    * 关联描述名称
    */
    private String urlDescField;

    /**
    * 关联查询参数
    */
    private String urlParam;

    /**
    * 枚举值
    */
    private String enumData;

    /**
    * 是否有效
    */
    private Boolean isValid;

    /**
    * 创建时间
    */
    private Date createTime;

    /**
    * 修改时间
    */
    private Date updateTime;

    private String dictName;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFuncId() {
        return funcId;
    }

    public void setFuncId(Integer funcId) {
        this.funcId = funcId;
    }

    public String getPropName() {
        return propName;
    }

    public void setPropName(String propName) {
        this.propName = propName;
    }

    public String getPropKey() {
        return propKey;
    }

    public void setPropKey(String propKey) {
        this.propKey = propKey;
    }

    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    public String getViewType() {
        return viewType;
    }

    public void setViewType(String viewType) {
        this.viewType = viewType;
    }

    public String getDefaultValue() {
        return defaultValue;
    }

    public void setDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
    }

    public Boolean getRequired() {
        return required;
    }

    public void setRequired(Boolean required) {
        this.required = required;
    }

    public String getRegex() {
        return regex;
    }

    public void setRegex(String regex) {
        this.regex = regex;
    }

    public Integer getMaxLength() {
        return maxLength;
    }

    public void setMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
    }

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public Boolean getEdit() {
        return edit;
    }

    public void setEdit(Boolean edit) {
        this.edit = edit;
    }

    public Boolean getSearchView() {
        return searchView;
    }

    public void setSearchView(Boolean searchView) {
        this.searchView = searchView;
    }

    public Boolean getDetailView() {
        return detailView;
    }

    public void setDetailView(Boolean detailView) {
        this.detailView = detailView;
    }

    public Boolean getListView() {
        return listView;
    }

    public void setListView(Boolean listView) {
        this.listView = listView;
    }

    public Boolean getJoinNext() {
        return joinNext;
    }

    public void setJoinNext(Boolean joinNext) {
        this.joinNext = joinNext;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Integer getDataType() {
        return dataType;
    }

    public void setDataType(Integer dataType) {
        this.dataType = dataType;
    }

    public String getLinkTableName() {
        return linkTableName;
    }

    public void setLinkTableName(String linkTableName) {
        this.linkTableName = linkTableName;
    }

    public String getTablePropField() {
        return tablePropField;
    }

    public void setTablePropField(String tablePropField) {
        this.tablePropField = tablePropField;
    }

    public String getTableDescField() {
        return tableDescField;
    }

    public void setTableDescField(String tableDescField) {
        this.tableDescField = tableDescField;
    }

    public String getTableQueryCondition() {
        return tableQueryCondition;
    }

    public void setTableQueryCondition(String tableQueryCondition) {
        this.tableQueryCondition = tableQueryCondition;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }

    public String getUrlPropField() {
        return urlPropField;
    }

    public void setUrlPropField(String urlPropField) {
        this.urlPropField = urlPropField;
    }

    public String getUrlDescField() {
        return urlDescField;
    }

    public void setUrlDescField(String urlDescField) {
        this.urlDescField = urlDescField;
    }

    public String getUrlParam() {
        return urlParam;
    }

    public void setUrlParam(String urlParam) {
        this.urlParam = urlParam;
    }

    public String getEnumData() {
        return enumData;
    }

    public void setEnumData(String enumData) {
        this.enumData = enumData;
    }

    public Boolean getIsValid() {
        return isValid;
    }

    public void setIsValid(Boolean isValid) {
        this.isValid = isValid;
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

    public Boolean getPrimaryKey() {
        return primaryKey;
    }

    public void setPrimaryKey(Boolean primaryKey) {
        this.primaryKey = primaryKey;
    }

    public Boolean getCreate() {
        return create;
    }

    public void setCreate(Boolean create) {
        this.create = create;
    }

    public Boolean getValid() {
        return isValid;
    }

    public void setValid(Boolean valid) {
        isValid = valid;
    }

    public String getDictName() {
        return dictName;
    }

    public void setDictName(String dictName) {
        this.dictName = dictName;
    }



}
