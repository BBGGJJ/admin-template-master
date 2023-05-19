package com.bj66nao.admin.auth.dto;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by EDZ on 2020/5/18.
 */
public class UriTree extends UriDto {

    private boolean isChild;

    private List<UriTree> childs;

    public List<UriTree> getChilds() {
        return childs;
    }

    public void setChilds(List<UriTree> childs) {
        this.childs = childs;
    }

    public void addChild(UriTree uriTree) {
        if (childs == null) {
            childs = Lists.newArrayList();
        }
        childs.add(uriTree);
        isChild = true;
    }
}
