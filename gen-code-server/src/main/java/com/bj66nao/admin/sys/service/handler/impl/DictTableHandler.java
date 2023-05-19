package com.bj66nao.admin.sys.service.handler.impl;

import com.google.common.collect.Maps;
import com.bj66nao.admin.cached.DictDetailCached;
import com.bj66nao.admin.cached.DictTableCaced;
import com.bj66nao.admin.sys.entity.DictDetailEntity;
import com.bj66nao.admin.sys.entity.DictTableEntity;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import com.bj66nao.admin.sys.enums.FuncDataTypeEnum;
import com.bj66nao.admin.sys.service.handler.DataTypeHandler;
import com.bj66nao.admin.utils.Safes;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * Created by EDZ on 2020/8/17.
 */
@Component
public class DictTableHandler implements DataTypeHandler {
    private DictDetailCached dictDetailCached;
    private DictTableCaced dictTableCaced;

    public DictTableHandler(DictDetailCached dictDetailCached, DictTableCaced dictTableCaced) {
        this.dictDetailCached = dictDetailCached;
        this.dictTableCaced = dictTableCaced;
    }

    @Override
    public FuncDataTypeEnum getDataType() {
        return FuncDataTypeEnum.DICT;
    }

    @Override
    public void handler(FuncEntity funcEntity, List<FuncPropertyEntity> links, Map<String, Map<Object, Object>> mappData, List<Map<String, Object>> list) {
        if (CollectionUtils.isEmpty(links)) {
            return;
        }
        for (FuncPropertyEntity propertyEntity : links) {
            try {
                String data = propertyEntity.getDictName();
                DictTableEntity dictTableEntity = dictTableCaced.getByCode(data);
                if (Objects.isNull(dictTableEntity)) {
                    continue;
                }
                List<DictDetailEntity> dictDetailEntities = dictDetailCached.getDictDetails(dictTableEntity.getId());
                Map<Object, Object> map = Maps.newHashMap();
                Safes.of(dictDetailEntities).stream().forEach(e -> {
                    map.put(e.getCode(), e.getName());
                });
                mappData.put(propertyEntity.getPropKey(), map);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
            }
        }
    }

    @Override
    public void handler(FuncEntity funcEntity, List<FuncPropertyEntity> links, Map<String, Map<Object, Object>> mappData, Map<String, Object> vo) {
        if (CollectionUtils.isEmpty(links)) {
            return;
        }
        for (FuncPropertyEntity propertyEntity : links) {
            try {
                String data = propertyEntity.getDictName();
                DictTableEntity dictTableEntity = dictTableCaced.getByCode(data);
                if (Objects.isNull(dictTableEntity)) {
                    continue;
                }
                List<DictDetailEntity> dictDetailEntities = dictDetailCached.getDictDetails(dictTableEntity.getId());
                Map<Object, Object> map = Maps.newHashMap();
                Safes.of(dictDetailEntities).stream().forEach(e -> {
                    map.put(e.getCode(), e.getName());
                });
                mappData.put(propertyEntity.getPropKey(), map);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
            }
        }
    }

    @Override
    public void handler(FuncEntity funcEntity, List<FuncPropertyEntity> links, Map<String, Map<Object, Object>> mappData) {
        for (FuncPropertyEntity propertyEntity : links) {
            try {
                String data = propertyEntity.getDictName();
                DictTableEntity dictTableEntity = dictTableCaced.getByCode(data);
                if (Objects.isNull(dictTableEntity)) {
                    continue;
                }
                List<DictDetailEntity> dictDetailEntities = dictDetailCached.getDictDetails(dictTableEntity.getId());
                Map<Object, Object> map = Maps.newHashMap();
                Safes.of(dictDetailEntities).stream().forEach(e -> {
                    map.put(e.getCode(), e.getName());
                });
                mappData.put(propertyEntity.getPropKey(), map);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
            }
        }
    }
}
