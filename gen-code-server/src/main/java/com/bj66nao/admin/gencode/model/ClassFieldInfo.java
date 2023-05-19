package com.bj66nao.admin.gencode.model;

/**
 * Created by peng.liu11 on 2019/5/22.
 * @author
 */
public class ClassFieldInfo {
    private TableColumn tableColumn;
    private BeanAttr beanAttr;
    private ViewAttr viewAttr;

    public TableColumn getTableColumn() {
        return tableColumn;
    }

    public void setTableColumn(TableColumn tableColumn) {
        this.tableColumn = tableColumn;
    }

    public BeanAttr getBeanAttr() {
        return beanAttr;
    }

    public void setBeanAttr(BeanAttr beanAttr) {
        this.beanAttr = beanAttr;
    }

    public ViewAttr getViewAttr() {
        return viewAttr;
    }

    public void setViewAttr(ViewAttr viewAttr) {
        this.viewAttr = viewAttr;
    }
}
