package com.bj66nao.admin.bean.page;

import java.io.Serializable;
import java.util.List;

/**
 * Created by liupeng6251@163.com on '2020-05-09 01:41:54'.
 */

public class Pager<T> implements Serializable {
    private Page page;
    private List<T> data;

    private Pager() {

    }

    public static <T> Builder<T> builder(List<T> data) {
        return new Builder().data(data);
    }

    public Pager(Page page, List<T> data) {
        this.page = page;
        this.data = data;
    }

    public Page getPage() {
        return page;
    }

    public void setPage(Page page) {
        this.page = page;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public static class Builder<T> {
        private List<T> data;
        private PageRequest.Page page;
        private long totalSize;

        private Builder() {
            this.totalSize = 0;
        }

        public Builder<T> current(PageRequest.Page page) {
            this.page = page;
            return this;
        }

        public Builder<T> total(long totalSize) {
            this.totalSize = totalSize;
            return this;
        }

        public Builder<T> data(List<T> data) {
            this.data = data;
            return this;
        }

        public Pager<T> create() {
            int pageSize = page.getPageSize();
            int pageNumber = page.getPageNumber();
            Page page = new Page(pageSize,pageNumber,totalSize);
            Pager<T> pager = new Pager<T>(page, data);
            return pager;
        }


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
        public Page(){}

        public int getPageSize() {
            return pageSize;
        }

        public void setPageSize(int pageSize) {
            this.pageSize = pageSize;
        }

        public int getPageNumber() {
            return pageNumber;
        }

        public void setPageNumber(int pageNumber) {
            this.pageNumber = pageNumber;
        }

        public long getTotal() {
            return total;
        }

        public void setTotal(long total) {
            this.total = total;
        }
    }
}
