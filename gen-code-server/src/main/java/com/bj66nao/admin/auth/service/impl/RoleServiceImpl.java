package com.bj66nao.admin.auth.service.impl;

import com.google.common.collect.Lists;
import com.zomyun.commons.utils.Safes;
import com.zomyun.domain.page.Pager;
import com.zomyun.erp.boss.auth.adapter.RoleAdapter;
import com.zomyun.erp.boss.auth.adapter.RoleUriAdapter;
import com.zomyun.erp.boss.auth.dto.RoleDto;
import com.zomyun.erp.boss.auth.entity.RoleEntity;
import com.zomyun.erp.boss.auth.entity.RoleUriEntity;
import com.zomyun.erp.boss.auth.mapper.RoleMapper;
import com.zomyun.erp.boss.auth.mapper.RoleUriMapper;
import com.zomyun.erp.boss.auth.param.RoleParam;
import com.zomyun.erp.boss.auth.service.IRoleService;
import com.zomyun.erp.boss.cache.AppsourceCache;
import com.zomyun.erp.boss.enums.OperatorTypeEnum;
import com.zomyun.erp.boss.operatorlog.OperatorLogService;
import com.zomyun.erp.boss.sys.entity.AppsourceEntity;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.beans.Transient;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


/**
 * 角色管理
 * <p>
 * Created by  '2020-05-15 06:39:55'.
 */
@Service("roleService")
public class RoleServiceImpl implements IRoleService {

    private RoleMapper roleMapper;

    private AppsourceCache appsourceCache;

    private RoleUriMapper roleUriMapper;

    @Value("${spring.application.name}")
    private String applicationName;

    private OperatorLogService operatorLogService;

    public RoleServiceImpl(RoleMapper roleMapper, AppsourceCache appsourceCach, RoleUriMapper roleUriMapper, OperatorLogService operatorLogService) {
        this.roleMapper = roleMapper;
        this.appsourceCache = appsourceCach;
        this.roleUriMapper = roleUriMapper;
        this.operatorLogService = operatorLogService;

    }

    /**
     * 新增
     */
    @Override
    public boolean insert(RoleDto dto) {
        AppsourceEntity appsourceEntity = appsourceCache.getById(dto.getAppCode());
        Assert.notNull(appsourceEntity, "系统不存在！");
        RoleEntity entity = RoleAdapter.adapterDto(dto);
        int len = roleMapper.insertSelective(entity);
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.ROLE, OperatorTypeEnum.ADD, entity.getId() + "");
        return len > 0;
    }

    /**
     * 新增or更新： ON DUPLICATE KEY UPDATE
     */
    @Override
    public boolean insertOrUpdate(RoleDto dto) {
        AppsourceEntity appsourceEntity = appsourceCache.getById(dto.getAppCode());
        Assert.notNull(appsourceEntity, "系统不存在！");
        RoleEntity entity = RoleAdapter.adapterDto(dto);
        int len = roleMapper.insertOrUpdate(entity);
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.ROLE, OperatorTypeEnum.ADD, entity.getId() + "");
        return len > 0;
    }

    /**
     * 批量新增： ON DUPLICATE KEY UPDATE
     */
    @Override
    public int insertBatch(List<RoleDto> dtos) {
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
        RoleEntity roleEntity = roleMapper.selectByPrimaryKey(id);
        Assert.notNull(roleEntity, "role is null");
        int len = roleMapper.deleteByPrimaryKey(id);
        AppsourceEntity appsourceEntity = appsourceCache.getById(roleEntity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.ROLE, OperatorTypeEnum.DELETE, id + "");
        return len > 0;
    }

    /**
     * 更新
     */
    @Override
    public boolean update(RoleDto dto) {
        RoleEntity roleEntity = roleMapper.selectByPrimaryKey(dto.getId());
        Assert.notNull(roleEntity, "role is null");
        RoleEntity entity = RoleAdapter.adapterDto(dto);
        int len = roleMapper.updateByPrimaryKeySelective(entity);
        AppsourceEntity appsourceEntity = appsourceCache.getById(roleEntity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.ROLE, OperatorTypeEnum.UPDATE, dto.getId() + "");
        return len > 0;
    }

    @Override
    @Transient
    public boolean updateRoleUris(RoleDto dto) {
        RoleEntity roleEntity = roleMapper.selectByPrimaryKey(dto.getId());
        Assert.notNull(roleEntity, "role is null");
        if (CollectionUtils.isEmpty(dto.getUriIds())) {
            roleUriMapper.deleteByRoleId(dto.getId());

        } else {
            List<RoleUriEntity> roleUriEntities = roleUriMapper.selectByRoleIds(Lists.newArrayList(dto.getId()));
            List<RoleUriEntity> saveList = Lists.newArrayList();
            List<Integer> deleteIds = Lists.newArrayList();
            if (CollectionUtils.isEmpty(roleUriEntities)) {
                saveList = RoleUriAdapter.adapterRoleId(dto.getId(), dto.getUriIds());
            } else {
                List<Integer> newUriIds = dto.getUriIds();
                List<Integer> oldUriIds = Lists.transform(roleUriEntities, RoleUriEntity::getUriId);
                List<Integer> saveIds = newUriIds.stream().filter(e -> !oldUriIds.contains(e)).collect(Collectors.toList());
                saveList = RoleUriAdapter.adapterRoleId(dto.getId(), saveIds);
                deleteIds = roleUriEntities.stream().filter(e -> !newUriIds.contains(e.getUriId())).map(e -> e.getId()).collect(Collectors.toList());
            }
            if (CollectionUtils.isNotEmpty(deleteIds)) {
                roleUriMapper.deleteByPrimaryKeys(deleteIds);
            }
            if (CollectionUtils.isNotEmpty(saveList)) {
                roleUriMapper.insertBatch(saveList);
            }
        }
        AppsourceEntity appsourceEntity = appsourceCache.getById(roleEntity.getAppCode());
        operatorLogService.addOperatorLog(appsourceEntity.getAppCode(), OperatorLogService.BizType.ROLE, OperatorTypeEnum.UPDATE, dto.getId() + "");
        return true;
    }

    /**
     * 查询
     */
    @Override
    public RoleDto seletById(Integer id) {
        RoleEntity entity = roleMapper.selectByPrimaryKey(id);
        if (entity == null) {
            return null;
        }
        List<RoleUriEntity> roleUriEntities = roleUriMapper.selectByRoleIds(Lists.newArrayList(id));
        List<Integer> uriIds = Collections.EMPTY_LIST;
        if (CollectionUtils.isNotEmpty(roleUriEntities)) {
            uriIds = Lists.transform(roleUriEntities, RoleUriEntity::getUriId);
        }
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppCode());
        Assert.notNull(appsourceEntity, "系统不存在！");
        return RoleAdapter.adapterEntity(entity, appsourceEntity, uriIds);
    }

    /**
     * 分页查询
     */
    @Override
    public Pager<RoleDto> selectPage(RoleParam param) {
        long count = roleMapper.countByParam(param);
        List<RoleDto> list = Collections.EMPTY_LIST;
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
    public List<RoleDto> selectList(RoleParam param) {
        List<RoleEntity> entitys = roleMapper.selectByParam(param);
        if (CollectionUtils.isNotEmpty(entitys)) {
            return entitys.stream().map(e -> RoleAdapter.adapterEntity(e, appsourceCache.getById(e.getAppCode()))).collect(Collectors.toList());
        }
        return Collections.EMPTY_LIST;
    }
}