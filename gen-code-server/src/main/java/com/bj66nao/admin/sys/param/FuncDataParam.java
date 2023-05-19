package com.bj66nao.admin.sys.param;

import com.bj66nao.admin.bean.page.PageRequest;
import com.google.common.collect.Maps;

import java.util.*;

/**
 * Created by EDZ on 2020/8/7.
 */
public class FuncDataParam  extends PageRequest {
    private HashMap<String,Object> data = Maps.newHashMap();

    public HashMap<String, Object> getData() {
        return data;
    }

    public void setData(HashMap<String, Object> data) {
        this.data = data;
    }
}
