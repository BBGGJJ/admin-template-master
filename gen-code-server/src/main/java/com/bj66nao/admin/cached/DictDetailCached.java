package com.bj66nao.admin.cached;

import com.bj66nao.admin.bean.page.PageRequest;
import com.bj66nao.admin.sys.entity.DictDetailEntity;
import com.bj66nao.admin.sys.entity.DictTableEntity;
import com.bj66nao.admin.sys.mapper.DictTableMapper;
import com.bj66nao.admin.sys.param.DictTableParam;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.mapper.DictDetailMapper;
import com.bj66nao.admin.sys.param.DictDetailParam;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by EDZ on 2020/8/10.
 */

@Component
public class DictDetailCached implements ICache {

    private Map<Integer, List<DictDetailEntity>> cached = new ConcurrentHashMap<>();

    private DictTableMapper dictTableMapper;

    private DictDetailMapper dictDetailMapper;

    public DictDetailCached(DictTableMapper dictTableMapper, DictDetailMapper dictDetailMapper) {
        this.dictDetailMapper = dictDetailMapper;
        this.dictTableMapper = dictTableMapper;
    }

    @Override
    public void load() {
        int pageNumber = 1;
        PageRequest.Page page = new PageRequest.Page(MAX_PAGE_SIZE, pageNumber, 0, 0);
        DictTableParam param = new DictTableParam();
        param.setPage(page);
        List<DictTableEntity> list = dictTableMapper.selectByParam(param);
        Map<Integer, List<DictDetailEntity>> temp = Maps.newConcurrentMap();
        while (CollectionUtils.isNotEmpty(list)) {
            for (DictTableEntity entity : list) {
                full(entity, temp);
            }
            if (page.getPageSize() <= list.size()) {
                page.setPageNumber(++pageNumber);
                param.setPage(page);
                list = dictTableMapper.selectByParam(param);
            } else {
                break;
            }
        }
        this.cached = temp;
    }

    private void full(DictTableEntity funcEntity, Map<Integer, List<DictDetailEntity>> map) {
        int pageNumber = 1;
        PageRequest.Page page = new PageRequest.Page(MAX_PAGE_SIZE, pageNumber, 0, 0);
        DictDetailParam param = new DictDetailParam();
        param.setPage(page);
        param.setTableId(funcEntity.getId());
        List<DictDetailEntity> list = dictDetailMapper.selectByParam(param);
        map.put(funcEntity.getId(), list);
    }

    public List<DictDetailEntity> getDictDetails(Integer dictId) {
        return cached.get(dictId);
    }

}
