package com.bj66nao.admin.cached;

import com.bj66nao.admin.bean.page.PageRequest;
import com.bj66nao.admin.sys.mapper.FuncPropertyMapper;
import com.bj66nao.admin.sys.param.FuncParam;
import com.bj66nao.admin.sys.param.FuncPropertyParam;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import com.bj66nao.admin.sys.mapper.FuncMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 *
 * @author EDZ
 * @date 2020/8/7
 */
@Component
public class FuncPropertyCached implements ICache {


    private FuncMapper funcMapper;

    private FuncPropertyMapper funcPropertyMapper;

    private Map<String, List<FuncPropertyEntity>> funcPropertyCached = new ConcurrentHashMap<>();

    public FuncPropertyCached(FuncMapper funcMapper, FuncPropertyMapper funcPropertyMapper) {
        this.funcMapper = funcMapper;
        this.funcPropertyMapper = funcPropertyMapper;
    }

    @Override
    public void load() {
        int pageNumber = 1;
        PageRequest.Page page = new PageRequest.Page(MAX_PAGE_SIZE, pageNumber, 0, 0);
        FuncParam param = new FuncParam();
        param.setPage(page);
        List<FuncEntity> list = funcMapper.selectByParam(param);
        Map<String, List<FuncPropertyEntity>> temp = Maps.newConcurrentMap();
        while (CollectionUtils.isNotEmpty(list)) {
            for (FuncEntity entity : list) {
                full(entity, temp);
            }
            if (page.getPageSize() <= list.size()) {
                page.setPageNumber(++pageNumber);
                param.setPage(page);
                list = funcMapper.selectByParam(param);
            } else {
                break;
            }
        }
        funcPropertyCached = temp;
    }

    public List<FuncPropertyEntity> getFuncPropertys(String funcCode) {
        return funcPropertyCached.get(funcCode);
    }

    public FuncPropertyEntity getFuncPropertys(String funcCode, String propCode) {
        List<FuncPropertyEntity> propertyEntities = getFuncPropertys(funcCode);
        for (FuncPropertyEntity propertyEntity : propertyEntities) {
            if (propertyEntity.getPropKey().equals(propCode)) {
                return propertyEntity;
            }
        }
        return null;
    }

    private void full(FuncEntity funcEntity, Map<String, List<FuncPropertyEntity>> map) {
        int pageNumber = 1;
        PageRequest.Page page = new PageRequest.Page(MAX_PAGE_SIZE, pageNumber, 0, 0);
        FuncPropertyParam param = new FuncPropertyParam();
        param.setPage(page);
        param.setFuncId(funcEntity.getId());
        List<FuncPropertyEntity> list = funcPropertyMapper.selectByParam(param);
        map.put(funcEntity.getCode(), list);
    }

}
