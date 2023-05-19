package com.bj66nao.admin.auth.service.impl;

import com.zomyun.domain.page.Pager;
import com.zomyun.erp.boss.auth.adapter.UriWhiteListAdapter;
import com.zomyun.erp.boss.auth.dto.UriWhiteListDto;
import com.zomyun.erp.boss.auth.entity.UriWhiteListEntity;
import com.zomyun.erp.boss.auth.mapper.UriWhiteListMapper;
import com.zomyun.erp.boss.auth.param.UriWhiteListParam;
import com.zomyun.erp.boss.auth.service.IUriWhiteListService;
import com.zomyun.erp.boss.cache.AppsourceCache;
import com.zomyun.erp.boss.sys.entity.AppsourceEntity;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


/**
 * uri白名单管理
 * <p>
 * Created by  '2020-05-20 05:42:51'.
 */
@Service("uriWhiteListService")
public class UriWhiteListServiceImpl implements IUriWhiteListService {

    private UriWhiteListMapper uriWhiteListMapper;


    private AppsourceCache appsourceCache;


    public UriWhiteListServiceImpl(UriWhiteListMapper uriWhiteListMapper, AppsourceCache appsourceCache) {
        this.uriWhiteListMapper = uriWhiteListMapper;
        this.appsourceCache = appsourceCache;
    }

    /**
     * 新增
     */
    @Override
    public boolean insert(UriWhiteListDto dto) {
        UriWhiteListEntity entity = UriWhiteListAdapter.adapterDto(dto);
        return uriWhiteListMapper.insertSelective(entity) > 0;
    }

    /**
     * 新增or更新： ON DUPLICATE KEY UPDATE
     */
    @Override
    public boolean insertOrUpdate(UriWhiteListDto dto) {
        UriWhiteListEntity entity = UriWhiteListAdapter.adapterDto(dto);
        return uriWhiteListMapper.insertOrUpdate(entity) > 0;
    }

    /**
     * 删除
     */
    @Override
    public boolean delete(Integer id) {
        return uriWhiteListMapper.deleteByPrimaryKey(id) > 0;
    }

    /**
     * 更新
     */
    @Override
    public boolean update(UriWhiteListDto dto) {
        UriWhiteListEntity entity = UriWhiteListAdapter.adapterDto(dto);
        return uriWhiteListMapper.updateByPrimaryKeySelective(entity) > 0;
    }

    /**
     * 查询
     */
    @Override
    public UriWhiteListDto seletById(Integer id) {
        UriWhiteListEntity entity = uriWhiteListMapper.selectByPrimaryKey(id);
        if (entity == null) {
            return null;
        }
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppId());
        return UriWhiteListAdapter.adapterEntity(entity, appsourceEntity);
    }

    /**
     * 分页查询
     */
    @Override
    public Pager<UriWhiteListDto> selectPage(UriWhiteListParam param) {
        long count = uriWhiteListMapper.countByParam(param);
        List<UriWhiteListDto> list = Collections.EMPTY_LIST;
        if (count == 0) {
            return Pager.builder(list).current(param.getPage()).total(count).create();
        }
        list = selectList(param);
        return Pager.builder(list).current(param.getPage()).total(count).create();
    }

    /**
     * 列表查询
     */
    @Override
    public List<UriWhiteListDto> selectList(UriWhiteListParam param) {
        List<UriWhiteListEntity> entitys = uriWhiteListMapper.selectByParam(param);
        if (CollectionUtils.isNotEmpty(entitys)) {
            return entitys.stream().map(e -> UriWhiteListAdapter.adapterEntity(e, appsourceCache.getById(e.getAppId()))).collect(Collectors.toList());
        }
        return Collections.EMPTY_LIST;
    }
}