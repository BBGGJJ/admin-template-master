package com.bj66nao.admin.sys.param;

import com.bj66nao.admin.bean.page.PageRequest;

/**
 *
 * @author EDZ
 * @date 2020/8/7
 */
public class SuggestParam extends PageRequest {

    private String suggest;

    public String getSuggest() {
        return suggest;
    }

    public void setSuggest(String suggest) {
        this.suggest = suggest;
    }
}
