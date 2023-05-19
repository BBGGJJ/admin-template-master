package com.bj66nao.admin.cached;

import com.bj66nao.admin.bean.page.PageRequest;
import com.bj66nao.admin.sys.entity.DatasourceEntity;
import com.bj66nao.admin.sys.mapper.DatasourceMapper;
import com.bj66nao.admin.sys.param.DatasourceParam;
import com.bj66nao.admin.utils.Safes;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.CollectionUtils;
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
public class DataSourceCached implements ICache {

    private DatasourceMapper datasourceMapper;

    public DataSourceCached(DatasourceMapper datasourceMapper) {
        this.datasourceMapper = datasourceMapper;
    }

    private Map<Integer, DatasourceEntity> cached = new ConcurrentHashMap<>();

    @Override
    public void load() {
        int pageNumber = 1;
        PageRequest.Page page = new PageRequest.Page(MAX_PAGE_SIZE, pageNumber, 0, 0);
        DatasourceParam param = new DatasourceParam();
        param.setPage(page);
        List<DatasourceEntity> list = datasourceMapper.selectByParam(param);
        Map<Integer, DatasourceEntity> temp = Maps.newConcurrentMap();
        while (CollectionUtils.isNotEmpty(list)) {
            for (DatasourceEntity entity : list) {
                temp.put(entity.getId(), entity);
            }
            if (page.getPageSize() <= list.size()) {
                page.setPageNumber(++pageNumber);
                param.setPage(page);
                list = datasourceMapper.selectByParam(param);
            } else {
                break;
            }
        }
        cached = temp;
    }

    public DatasourceEntity getDatasource(Integer id) {
        return cached.get(id);
    }

    public List<DatasourceEntity> getDatasources(List<Integer> ids) {
        List<DatasourceEntity> result = Lists.newArrayList();
        Safes.of(ids).forEach(e -> {
            result.add(cached.get(e));
        });
        return result;
    }
    public Map<Integer,DatasourceEntity>  getDatasourceMap(List<Integer> ids) {
        Map<Integer,DatasourceEntity> result = Maps.newHashMap();
        Safes.of(ids).forEach(e -> {
            result.put(e,cached.get(e));
        });
        return result;
    }
}
