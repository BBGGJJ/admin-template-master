package com.bj66nao.admin.cached;

import com.bj66nao.admin.bean.page.PageRequest;
import com.bj66nao.admin.sys.entity.DictTableEntity;
import com.bj66nao.admin.sys.mapper.DictTableMapper;
import com.bj66nao.admin.sys.param.DictTableParam;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by EDZ on 2020/8/10.
 */
@Component
public class DictTableCaced implements ICache {

    private DictTableMapper dictTableMapper;

    private Map<String, DictTableEntity> cached = new ConcurrentHashMap<>();

    public DictTableCaced(DictTableMapper dictTableMapper) {
        this.dictTableMapper = dictTableMapper;
    }

    @Override
    public void load() {
        int pageNumber = 1;
        PageRequest.Page page = new PageRequest.Page(MAX_PAGE_SIZE, pageNumber, 0, 0);
        DictTableParam param = new DictTableParam();
        param.setPage(page);
        List<DictTableEntity> list = dictTableMapper.selectByParam(param);
        Map<String, DictTableEntity> temp = Maps.newConcurrentMap();
        while (CollectionUtils.isNotEmpty(list)) {
            for (DictTableEntity entity : list) {
                temp.put(entity.getCode(), entity);
            }
            if (page.getPageSize() <= list.size()) {
                page.setPageNumber(++pageNumber);
                param.setPage(page);
                list = dictTableMapper.selectByParam(param);
            } else {
                break;
            }
        }
        cached = temp;
    }

    public DictTableEntity getByCode(String code) {
        return cached.get(code);
    }
}
