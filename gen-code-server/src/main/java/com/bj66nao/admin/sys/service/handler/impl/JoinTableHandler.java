package com.bj66nao.admin.sys.service.handler.impl;

import com.bj66nao.admin.sys.enums.FuncDataTypeEnum;
import com.bj66nao.admin.sys.repository.StoreRepository;
import com.bj66nao.admin.sys.service.handler.DataTypeHandler;
import com.bj66nao.admin.utils.Safes;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.MapUtils;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * Created by EDZ on 2020/8/17.
 */
@Component
public class JoinTableHandler implements DataTypeHandler {
    private StoreRepository storeRepository;

    public JoinTableHandler(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    @Override
    public FuncDataTypeEnum getDataType() {
        return FuncDataTypeEnum.TABLE;
    }

    @Override
    public void handler(FuncEntity funcEntity, List<FuncPropertyEntity> linkTables, Map<String, Map<Object, Object>> mappData, List<Map<String, Object>> list) {
        if (CollectionUtils.isEmpty(linkTables)) {
            return;
        }
        for (FuncPropertyEntity propertyEntity : linkTables) {
            String tableName = propertyEntity.getLinkTableName();
            String key = propertyEntity.getTablePropField();
            String desc = propertyEntity.getTableDescField();
            String queryCondition = propertyEntity.getTableQueryCondition();
            if (StringUtils.isEmpty(tableName) || StringUtils.isEmpty(key) || StringUtils.isEmpty(desc)) {
                continue;
            }
            List<Object> keyValues = Safes.of(list).stream().map(e -> MapUtils.getObject(e, propertyEntity.getPropKey())).collect(Collectors.toList());
            List<Map<String, Object>> values = storeRepository.queryLinkDatas(funcEntity, tableName, key, desc, queryCondition, keyValues);
            Map<Object, Object> mappMap = Maps.newHashMap();
            for (Map<String, Object> mappItem : values) {
                Object mappItemKey = MapUtils.getObject(mappItem, key);
                Object mappItemValue = MapUtils.getObject(mappItem, desc);
                if (Objects.isNull(mappItemKey) || Objects.isNull(mappItemValue)) {
                    continue;
                }
                mappMap.put(mappItemKey, mappItemValue);
            }
            mappData.put(propertyEntity.getPropKey(), mappMap);
        }
    }

    @Override
    public void handler(FuncEntity funcEntity, List<FuncPropertyEntity> linkTables, Map<String, Map<Object, Object>> mappData, Map<String, Object> vo) {
        if (CollectionUtils.isEmpty(linkTables)) {
            return;
        }
        for (FuncPropertyEntity propertyEntity : linkTables) {
            String tableName = propertyEntity.getLinkTableName();
            String key = propertyEntity.getTablePropField();
            String desc = propertyEntity.getTableDescField();
            String queryCondition = propertyEntity.getTableQueryCondition();
            if (StringUtils.isEmpty(tableName) || StringUtils.isEmpty(key) || StringUtils.isEmpty(desc)) {
                continue;
            }
            Object keyValue = MapUtils.getObject(vo, propertyEntity.getPropKey());
            Map<String, Object> values = storeRepository.queryLinkData(funcEntity, tableName, key, desc, queryCondition, keyValue);
            Map<Object, Object> mappMap = Maps.newHashMap();
            Object mappItemKey = MapUtils.getObject(values, key);
            Object mappItemValue = MapUtils.getObject(values, desc);
            if (Objects.isNull(mappItemKey) || Objects.isNull(mappItemValue)) {
                continue;
            }
            mappMap.put(mappItemKey, mappItemValue);
            mappData.put(propertyEntity.getPropKey(), mappMap);
        }
    }

    @Override
    public void handler(FuncEntity funcEntity, List<FuncPropertyEntity> linkTables, Map<String, Map<Object, Object>> mappData) {

    }
}
