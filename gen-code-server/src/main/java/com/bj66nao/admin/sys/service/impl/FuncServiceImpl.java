package com.bj66nao.admin.sys.service.impl;

import java.util.*;


import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.cached.FuncCached;
import com.bj66nao.admin.cached.FuncPropertyCached;
import com.bj66nao.admin.sys.enums.FuncDataTypeEnum;
import com.bj66nao.admin.sys.param.FuncParam;
import com.bj66nao.admin.sys.service.IFuncService;
import com.bj66nao.admin.sys.service.handler.DataTypeHandler;
import com.bj66nao.admin.utils.Safes;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.adapter.FuncAdapter;
import com.bj66nao.admin.cached.DataSourceCached;
import com.bj66nao.admin.sys.dto.FuncDto;
import com.bj66nao.admin.sys.dto.FuncVo;
import com.bj66nao.admin.sys.entity.DatasourceEntity;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import com.bj66nao.admin.sys.mapper.FuncMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;


/**
 * 功能管理
 * <p>
 * Created by  '2020-08-07 15:58:33'.
 */
@Service
public class FuncServiceImpl implements IFuncService {

    private FuncMapper funcMapper;

    private FuncCached funcCached;

    private FuncPropertyCached funcPropertyCached;

    private DataSourceCached dataSourceCached;

    private Map<FuncDataTypeEnum, DataTypeHandler> dataTypeHandlerMap;

    public FuncServiceImpl(Set<DataTypeHandler> dataTypeHandlers, FuncMapper funcMapper, FuncCached funcCached, FuncPropertyCached funcPropertyCached, DataSourceCached dataSourceCached) {
        this.funcMapper = funcMapper;
        this.funcCached = funcCached;
        this.funcPropertyCached = funcPropertyCached;
        dataTypeHandlerMap = Maps.newConcurrentMap();
        this.dataSourceCached = dataSourceCached;
        Safes.of(dataTypeHandlers).stream().forEach(e -> {
            dataTypeHandlerMap.put(e.getDataType(), e);
        });
    }

    /**
     * 新增
     */
    @Override
    public boolean insert(FuncDto dto) {
        FuncEntity entity = FuncAdapter.adapterDto(dto);
        return funcMapper.insertSelective(entity) > 0;
    }

    /**
     * 删除
     */
    @Override
    public boolean delete(Integer id) {
        return funcMapper.deleteByPrimaryKey(id) > 0;
    }

    /**
     * 更新
     */
    @Override
    public boolean update(FuncDto dto) {
        FuncEntity entity = FuncAdapter.adapterDto(dto);
        return funcMapper.updateByPrimaryKeySelective(entity) > 0;
    }

    /**
     * 查询
     */
    @Override
    public FuncDto seletById(Integer id) {
        FuncEntity entity = funcMapper.selectByPrimaryKey(id);
        if (entity == null) {
            return null;
        }
        DatasourceEntity datasourceEntity = dataSourceCached.getDatasource(entity.getDataSourceId());
        return FuncAdapter.adapterEntity(entity,datasourceEntity);
    }

    /**
     * 分页查询
     */
    @Override
    public Pager<FuncDto> selectPage(FuncParam param) {
        long count = funcMapper.countByParam(param);
        List<FuncDto> list = Collections.EMPTY_LIST;
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
    public List<FuncDto> selectList(FuncParam param) {
        List<FuncEntity> entitys = funcMapper.selectByParam(param);
        if (CollectionUtils.isNotEmpty(entitys)) {
            Map<Integer, DatasourceEntity> datasourceEntityMap = dataSourceCached.getDatasourceMap(Lists.transform(entitys, FuncEntity::getDataSourceId));
            return FuncAdapter.adapterEntity(entitys,datasourceEntityMap);
        }
        return Collections.EMPTY_LIST;
    }

    @Override
    public FuncVo getVoByFuncCode(String funcCode) {
        FuncEntity funcEntity = funcCached.getFuncDto(funcCode);
        Assert.notNull(funcEntity, "func is null");
        List<FuncPropertyEntity> propertyEntities = funcPropertyCached.getFuncPropertys(funcCode);
        Assert.notEmpty(propertyEntities, "func property is empty");
        List<FuncPropertyEntity> linkEnum = Lists.newArrayList();
        List<FuncPropertyEntity> linkDict = Lists.newArrayList();
        for (FuncPropertyEntity propertyEntity : propertyEntities) {
            if (propertyEntity.getDataType().intValue() == FuncDataTypeEnum.ENUM.getCode()) {
                linkEnum.add(propertyEntity);
            } else if (propertyEntity.getDataType().intValue() == FuncDataTypeEnum.DICT.getCode()) {
                linkDict.add(propertyEntity);
            }
            if (!propertyEntity.getPrimaryKey() && (propertyEntity.getSearchView() == null || !propertyEntity.getSearchView())) {
                continue;
            }
        }
        Map<String, Map<Object, Object>> mappData = Maps.newHashMap();
        if (CollectionUtils.isNotEmpty(linkEnum)) {
            dataTypeHandlerMap.get(FuncDataTypeEnum.ENUM).handler(funcEntity, linkEnum, mappData);
        }
        if (CollectionUtils.isNotEmpty(linkDict)) {
            dataTypeHandlerMap.get(FuncDataTypeEnum.DICT).handler(funcEntity, linkDict, mappData);
        }
        return FuncAdapter.adapterVo(funcEntity, propertyEntities, mappData);
    }
}
