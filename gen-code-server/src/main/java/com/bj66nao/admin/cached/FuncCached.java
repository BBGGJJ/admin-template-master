package com.bj66nao.admin.cached;

import com.bj66nao.admin.bean.page.PageRequest;
import com.bj66nao.admin.sys.param.FuncParam;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.mapper.FuncMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by EDZ on 2020/8/7.
 */
@Component
public class FuncCached implements ICache {

    private FuncMapper funcMapper;

    public FuncCached(FuncMapper funcMapper){
        this.funcMapper=funcMapper;
    }

    private Map<String, FuncEntity> funcCached = new ConcurrentHashMap<>();

    @Override
    public void load() {
        int pageNumber = 1;
        PageRequest.Page page = new PageRequest.Page(MAX_PAGE_SIZE, pageNumber, 0, 0);
        FuncParam param = new FuncParam();
        param.setPage(page);
        List<FuncEntity> list = funcMapper.selectByParam(param);
        Map<String, FuncEntity> temp = Maps.newConcurrentMap();
        while (CollectionUtils.isNotEmpty(list)) {
            for (FuncEntity uriEntity : list) {
                temp.put(uriEntity.getCode(), uriEntity);
            }
            if (page.getPageSize() <= list.size()) {
                page.setPageNumber(++pageNumber);
                param.setPage(page);
                list = funcMapper.selectByParam(param);
            } else {
                break;
            }
        }
        funcCached = temp;
    }

    public FuncEntity getFuncDto(String funcCode){
        return funcCached.get(funcCode);
    }
}
