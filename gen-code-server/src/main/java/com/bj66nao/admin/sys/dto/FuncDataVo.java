package com.bj66nao.admin.sys.dto;

import com.bj66nao.admin.bean.page.PageRequest;
import com.bj66nao.admin.bean.page.Pager;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * Created by EDZ on 2020/8/7.
 */
public class FuncDataVo implements Serializable {

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
    private Pager.Page page;
    private List<Map<String, Object>> data;

    private FuncDataVo() {
    }


    public FuncDataVo(Pager.Page page, List<Map<String, Object>> data) {
        this.page = page;
        this.data = data;
    }

    public Pager.Page getPage() {
        return this.page;
    }

    public void setPage(Pager.Page page) {
        this.page = page;
    }

    public List<Map<String, Object>> getData() {
        return this.data;
    }

    public void setData(List<Map<String, Object>> data) {
        this.data = data;
    }

    public static class Page {
        int pageSize;
        int pageNumber;
        long total;

        public Page(int pageSize, int pageNumber, long total) {
            this.pageSize = pageSize;
            this.pageNumber = pageNumber;
            this.total = total;
        }

        public Page() {
        }

        public int getPageSize() {
            return this.pageSize;
        }

        public void setPageSize(int pageSize) {
            this.pageSize = pageSize;
        }

        public int getPageNumber() {
            return this.pageNumber;
        }

        public void setPageNumber(int pageNumber) {
            this.pageNumber = pageNumber;
        }

        public long getTotal() {
            return this.total;
        }

        public void setTotal(long total) {
            this.total = total;
        }
    }


    public Map<String, Map<Object, Object>> getMappData() {
        return mappData;
    }

    public void setMappData(Map<String, Map<Object, Object>> mappData) {
        this.mappData = mappData;
    }

    public FuncDataVo create() {
        int pageSize = getPage().getPageSize();
        int pageNumber = getPage().getPageNumber();
        Pager.Page page = new Pager.Page(pageSize, pageNumber, getPage().getTotal());
        FuncDataVo pager = new FuncDataVo(page, getData());
        return pager;
    }

    public static Builder builder(List<Map<String, Object>> data) {
        return (new Builder()).data(data);
    }

    public static class Builder {
        private List<Map<String, Object>> data;
        private PageRequest.Page page;
        private long totalSize;

        private Builder() {
            this.totalSize = 0L;
        }

        public Builder current(PageRequest.Page page) {
            this.page = page;
            return this;
        }

        public Builder total(long totalSize) {
            this.totalSize = totalSize;
            return this;
        }

        public Builder data(List<Map<String, Object>> data) {
            this.data = data;
            return this;
        }

        public FuncDataVo create() {
            int pageSize = this.page.getPageSize();
            int pageNumber = this.page.getPageNumber();
            Pager.Page page = new Pager.Page(pageSize, pageNumber, this.totalSize);
            FuncDataVo pager = new FuncDataVo(page, this.data);
            return pager;
        }
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

    public Boolean getCreate() {
        return isCreate;
    }

    public void setCreate(Boolean create) {
        isCreate = create;
    }
}
