package com.bj66nao.admin.cached;

import com.bj66nao.admin.auth.mapper.AppsourceMapper;
import com.bj66nao.admin.auth.param.AppsourceParam;
import com.bj66nao.admin.bean.page.PageRequest;
import com.bj66nao.admin.sys.entity.AppsourceEntity;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


/**
 * 系统列表
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */

@Service
public class AppsourceCache implements ICache {
    private final int MAX_PAGE_SIZE = 2000;

    private Map<Integer, AppsourceEntity> appsourceMap = Maps.newConcurrentMap();
    private Map<String, AppsourceEntity> appsourceCodeMap = Maps.newConcurrentMap();
    private AppsourceMapper appsourceMapper;

    public AppsourceCache(AppsourceMapper appsourceMapper) {
        this.appsourceMapper = appsourceMapper;
    }


    public AppsourceEntity getById(Integer id) {
        return appsourceMap.get(id);
    }

    public AppsourceEntity getByCode(String code) {

        return appsourceCodeMap.get(code);
    }

    public List<AppsourceEntity> getAll() {
        return Lists.newArrayList(appsourceMap.values());
    }

    @Override
    public void load() {
        int pageNumber = 1;
        PageRequest.Page page = new PageRequest.Page(MAX_PAGE_SIZE, pageNumber, 0, 0);
        AppsourceParam param = new AppsourceParam();
        param.setPage(page);
        List<AppsourceEntity> list = appsourceMapper.selectByParam(param);
        Map<Integer, AppsourceEntity> temp = Maps.newConcurrentMap();
        Map<String, AppsourceEntity> codeTemp = Maps.newConcurrentMap();
        while (CollectionUtils.isNotEmpty(list)) {
            for (AppsourceEntity appsource : list) {
                temp.put(appsource.getId(), appsource);
                codeTemp.put(appsource.getAppCode(), appsource);
            }
            if (page.getPageSize() == list.size()) {
                page.setPageNumber(++pageNumber);
                param.setPage(page);
                list = appsourceMapper.selectByParam(param);
            } else {
                break;
            }
        }
        appsourceMap = temp;
        appsourceCodeMap = codeTemp;
    }
}