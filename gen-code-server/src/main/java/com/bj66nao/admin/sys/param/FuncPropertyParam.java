package com.bj66nao.admin.sys.param;



import java.util.Date;
import com.bj66nao.admin.bean.page.PageRequest;

/**
*  功能属性表
*
*  Created by  on '2020-08-11 10:31:48'.
*/
public class FuncPropertyParam extends PageRequest {

    /**
    * 唯一主键
    */
    private Integer id;

    /**
    * 功能id
    */
    private Integer funcId;

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
    * 详情页展示
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

    /**
    * 是否主键
    */
    private Boolean primaryKey;

    /**
    * 新增页面展示
    */
    private Boolean create;


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

    public FuncPropertyParam() {
    }

    private FuncPropertyParam(Builder builder) {

        setId(builder.id);

        setFuncId(builder.funcId);

        setPropName(builder.propName);

        setPropKey(builder.propKey);

        setColumnName(builder.columnName);

        setViewType(builder.viewType);

        setDefaultValue(builder.defaultValue);

        setRequired(builder.required);

        setRegex(builder.regex);

        setMaxLength(builder.maxLength);

        setIndex(builder.index);

        setEdit(builder.edit);

        setSearchView(builder.searchView);

        setDetailView(builder.detailView);

        setListView(builder.listView);

        setJoinNext(builder.joinNext);

        setLink(builder.link);

        setDataType(builder.dataType);

        setLinkTableName(builder.linkTableName);

        setTablePropField(builder.tablePropField);

        setTableDescField(builder.tableDescField);

        setTableQueryCondition(builder.tableQueryCondition);

        setLinkUrl(builder.linkUrl);

        setUrlPropField(builder.urlPropField);

        setUrlDescField(builder.urlDescField);

        setUrlParam(builder.urlParam);

        setEnumData(builder.enumData);

        setIsValid(builder.isValid);

        setCreateTime(builder.createTime);

        setUpdateTime(builder.updateTime);

        setPrimaryKey(builder.primaryKey);

        setCreate(builder.create);

    }

    public static final class Builder {
        /**
        * 唯一主键
        */
        private Integer id;

        /**
        * 功能id
        */
        private Integer funcId;

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
        * 详情页展示
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

        /**
        * 是否主键
        */
        private Boolean primaryKey;

        /**
        * 新增页面展示
        */
        private Boolean create;

        public Builder id(Integer id) {
            this.id = id;
            return this;
        }

        public Builder funcId(Integer funcId) {
            this.funcId = funcId;
            return this;
        }

        public Builder propName(String propName) {
            this.propName = propName;
            return this;
        }

        public Builder propKey(String propKey) {
            this.propKey = propKey;
            return this;
        }

        public Builder columnName(String columnName) {
            this.columnName = columnName;
            return this;
        }

        public Builder viewType(String viewType) {
            this.viewType = viewType;
            return this;
        }

        public Builder defaultValue(String defaultValue) {
            this.defaultValue = defaultValue;
            return this;
        }

        public Builder required(Boolean required) {
            this.required = required;
            return this;
        }

        public Builder regex(String regex) {
            this.regex = regex;
            return this;
        }

        public Builder maxLength(Integer maxLength) {
            this.maxLength = maxLength;
            return this;
        }

        public Builder index(Integer index) {
            this.index = index;
            return this;
        }

        public Builder edit(Boolean edit) {
            this.edit = edit;
            return this;
        }

        public Builder searchView(Boolean searchView) {
            this.searchView = searchView;
            return this;
        }

        public Builder detailView(Boolean detailView) {
            this.detailView = detailView;
            return this;
        }

        public Builder listView(Boolean listView) {
            this.listView = listView;
            return this;
        }

        public Builder joinNext(Boolean joinNext) {
            this.joinNext = joinNext;
            return this;
        }

        public Builder link(String link) {
            this.link = link;
            return this;
        }

        public Builder dataType(Integer dataType) {
            this.dataType = dataType;
            return this;
        }

        public Builder linkTableName(String linkTableName) {
            this.linkTableName = linkTableName;
            return this;
        }

        public Builder tablePropField(String tablePropField) {
            this.tablePropField = tablePropField;
            return this;
        }

        public Builder tableDescField(String tableDescField) {
            this.tableDescField = tableDescField;
            return this;
        }

        public Builder tableQueryCondition(String tableQueryCondition) {
            this.tableQueryCondition = tableQueryCondition;
            return this;
        }

        public Builder linkUrl(String linkUrl) {
            this.linkUrl = linkUrl;
            return this;
        }

        public Builder urlPropField(String urlPropField) {
            this.urlPropField = urlPropField;
            return this;
        }

        public Builder urlDescField(String urlDescField) {
            this.urlDescField = urlDescField;
            return this;
        }

        public Builder urlParam(String urlParam) {
            this.urlParam = urlParam;
            return this;
        }

        public Builder enumData(String enumData) {
            this.enumData = enumData;
            return this;
        }

        public Builder isValid(Boolean isValid) {
            this.isValid = isValid;
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

        public Builder primaryKey(Boolean primaryKey) {
            this.primaryKey = primaryKey;
            return this;
        }

        public Builder create(Boolean create) {
            this.create = create;
            return this;
        }

        public FuncPropertyParam build() {
              return new FuncPropertyParam(this);
        }

    }
}
