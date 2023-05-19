package com.bj66nao.admin.bean.page;


import com.alibaba.fastjson.annotation.JSONField;

import java.io.Serializable;

/**
 * Created by liupeng6251@163.com on '2020-05-09 01:41:54'.
 */

public class PageRequest implements Serializable {

    private Page page = new Page();

    private int searchType = 1;
    private int draw = 1;

    private String orderByClause;

    private boolean distinct;

    public boolean isDistinct() {
        return distinct;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public int getDraw() {
        return draw;
    }

    public void setDraw(int draw) {
        this.draw = draw;
    }

    public int getSearchType() {
        return searchType;
    }

    public void setSearchType(int searchType) {
        this.searchType = searchType;
    }

    public Page getPage() {
        return new Page(this.page.pageSize,this.page.pageNumber, searchType, draw);

    }

    public void setPage(Page page) {
        this.page = page;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    @JSONField(serialize = false)
    public int getOffset() {
        if (page.pageNumber < 1) {
            page.pageNumber = 1;
        }
        return (page.pageNumber - 1) * page.pageSize;
    }

    @JSONField(serialize = false)
    public int getLimit() {
        return page.pageSize;
    }

    public static class Page {
        private static final long serialVersionUID = -9116229816861557536L;
        int pageSize;
        int pageNumber;
        int searchType;
        long  total;

        public Page() {
            this.pageSize = 15;
            this.pageNumber = 1;
        }

        public Page(int size, int pageNumber, int searchType, int total) {
            this.pageSize = size;
            this.pageNumber = pageNumber;
            this.searchType = searchType;
            this.total = total;
        }

        public long getTotal() {
            return total;
        }

        public void setTotal(long total) {
            this.total = total;
        }

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

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (o == null || getClass() != o.getClass()) {
                return false;
            }

            Page page = (Page) o;

            if (pageSize != page.pageSize) {
                return false;
            }
            return pageNumber == page.pageNumber;
        }

        @Override
        public int hashCode() {
            int result = pageSize;
            result = 31 * result + pageNumber;
            return result;
        }
    }
}
