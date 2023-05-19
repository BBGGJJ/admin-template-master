package com.bj66nao.admin.auth.service.impl;

import com.google.common.collect.Lists;
import com.zomyun.commons.utils.Safes;
import com.zomyun.domain.page.PageRequest;
import com.zomyun.domain.page.Pager;
import com.zomyun.erp.boss.auth.adapter.UriAdapter;
import com.zomyun.erp.boss.auth.dto.UriDto;
import com.zomyun.erp.boss.auth.dto.UriTree;
import com.zomyun.erp.boss.auth.entity.UriEntity;
import com.zomyun.erp.boss.auth.mapper.UriMapper;
import com.zomyun.erp.boss.auth.param.UriParam;
import com.zomyun.erp.boss.auth.service.IUriService;
import com.zomyun.erp.boss.cache.AppsourceCache;
import com.zomyun.erp.boss.enums.OperatorTypeEnum;
import com.zomyun.erp.boss.operatorlog.OperatorLogService;
import com.zomyun.erp.boss.sys.entity.AppsourceEntity;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


/**
 * 权限管理
 * <p>
 * Created by  '2020-05-15 06:39:55'.
 */
@Service("uriService")
public class UriServiceImpl implements IUriService {

    private static final int MAX_PAGE_SIZE = 2000;

    private UriMapper uriMapper;

    @Value("${spring.application.name}")
    private String applicationName;

    private AppsourceCache appsourceCache;

    private OperatorLogService operatorLogService;


    public UriServiceImpl(UriMapper uriMapper, AppsourceCache appsourceCache, OperatorLogService operatorLogService) {
        this.uriMapper = uriMapper;
        this.appsourceCache = appsourceCache;
        this.operatorLogService = operatorLogService;
    }

    /**
     * 新增
     */
    @Override
    public boolean insert(UriDto dto) {
        UriEntity entity = UriAdapter.adapterDto(dto);
        int len = uriMapper.insertSelective(entity);
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.URI, OperatorTypeEnum.ADD, entity.getId() + "");
        return len > 0;
    }

    /**
     * 新增
     */
    @Override
    public UriDto saveOrReturenValue(UriDto dto) {
        UriEntity entity = UriAdapter.adapterDto(dto);
        int len = uriMapper.insertSelective(entity);
        Assert.isTrue(len > 0, "保存失败！");
        dto.setId(entity.getId());
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.URI, OperatorTypeEnum.ADD, entity.getId() + "");
        return dto;
    }

    /**
     * 新增or更新： ON DUPLICATE KEY UPDATE
     */
    @Override
    public boolean insertOrUpdate(UriDto dto) {
        UriEntity entity = UriAdapter.adapterDto(dto);
        int len = uriMapper.insertOrUpdate(entity);
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.URI, OperatorTypeEnum.ADD, entity.getId() + "");
        return len > 0;
    }

    /**
     * 批量新增： ON DUPLICATE KEY UPDATE
     */
    @Override
    public int insertBatch(List<UriDto> dtos) {
        Safes.of(dtos).stream().forEach(e -> {
            insert(e);
        });
        return dtos.size();
    }

    /**
     * 删除
     */
    @Override
    public boolean delete(Integer id) {
        UriEntity entity = uriMapper.selectByPrimaryKey(id);
        Assert.notNull(entity, "url is null");
        int len = uriMapper.deleteByPrimaryKey(id);
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.URI, OperatorTypeEnum.DELETE, id + "");
        return len > 0;
    }

    /**
     * 更新
     */
    @Override
    public boolean update(UriDto dto) {
        UriEntity uriEntity = uriMapper.selectByPrimaryKey(dto);
        Assert.notNull(uriEntity, "url is null");
        UriEntity entity = UriAdapter.adapterDto(dto);
        int len = uriMapper.updateByPrimaryKeySelective(entity);
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.URI, OperatorTypeEnum.UPDATE, dto.getId() + "");
        return len > 0;
    }

    @Override
    public int updateIndex(List<UriDto> dtos) {
        List<UriEntity> uriEntities = Safes.of(dtos).stream().filter(e -> Objects.nonNull(e.getId()) && Objects.nonNull(e.getIndex())).map(e -> {
            UriEntity uriEntity = new UriEntity();
            uriEntity.setId(e.getId());
            uriEntity.setIndex(e.getIndex());
            return uriEntity;
        }).collect(Collectors.toList());
        if (CollectionUtils.isEmpty(uriEntities)) {
            return 0;
        }
        int len = uriMapper.updateIndexs(uriEntities);
        UriEntity uriEntity = uriMapper.selectByPrimaryKey(Safes.first(uriEntities).getId());
        AppsourceEntity appsourceEntity = appsourceCache.getById(uriEntity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.URI, OperatorTypeEnum.UPDATE, "update index");
        return len;
    }

    /**
     * 查询
     */
    @Override
    public UriDto seletById(Integer id) {
        UriEntity entity = uriMapper.selectByPrimaryKey(id);
        if (entity == null) {
            return null;
        }
        return UriAdapter.adapterEntity(entity);
    }

    /**
     * 分页查询
     */
    @Override
    public Pager<UriDto> selectPage(UriParam param) {
        long count = uriMapper.countByParam(param);
        List<UriDto> list = Collections.EMPTY_LIST;
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
    public List<UriDto> selectList(UriParam param) {
        List<UriEntity> entitys = uriMapper.selectByParam(param);
        if (CollectionUtils.isNotEmpty(entitys)) {
            return UriAdapter.adapterEntity(entitys);
        }
        return Collections.EMPTY_LIST;
    }

    /**
     * 列表查询
     */
    @Override
    public List<UriTree> queryTree(UriParam param) {
        param.getPage().setPageSize(MAX_PAGE_SIZE);
        List<UriEntity> entities = Lists.newArrayList();
        param.setOrderByClause("id");
        int pageNum = 1;
        PageRequest.Page page = param.getPage();
        List<UriEntity> result = uriMapper.selectByParam(param);
        while (CollectionUtils.isNotEmpty(result)) {
            page.setPageNumber(++pageNum);
            param.setPage(page);
            entities.addAll(result);
            result = uriMapper.selectByParam(param);
        }
        if (CollectionUtils.isEmpty(entities)) {
            return Collections.EMPTY_LIST;
        }
        return UriAdapter.adapterTrees(entities);
    }

}