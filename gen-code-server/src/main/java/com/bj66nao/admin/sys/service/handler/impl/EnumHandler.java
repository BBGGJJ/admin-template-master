package com.bj66nao.admin.sys.service.handler.impl;

import com.bj66nao.admin.sys.enums.FuncDataTypeEnum;
import com.bj66nao.admin.sys.service.handler.DataTypeHandler;
import com.google.gson.Gson;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by EDZ on 2020/8/17.
 */
@Component
public class EnumHandler implements DataTypeHandler {

    private static Gson gson = new Gson();

    @Override
    public FuncDataTypeEnum getDataType() {
        return FuncDataTypeEnum.ENUM;
    }

    @Override
    public void handler(FuncEntity funcEntity, List<FuncPropertyEntity> links, Map<String, Map<Object, Object>> mappData, List<Map<String, Object>> list) {
        if (CollectionUtils.isEmpty(links)) {
            return;
        }
        for (FuncPropertyEntity propertyEntity : links) {
            try {
                String data = propertyEntity.getEnumData();
                Map<Object, Object> map = gson.fromJson(data, HashMap.class);
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
                String data = propertyEntity.getEnumData();
                Map<Object, Object> map = gson.fromJson(data, HashMap.class);
                mappData.put(propertyEntity.getPropKey(), map);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
            }
        }
    }

    @Override
    public void handler(FuncEntity funcEntity,List<FuncPropertyEntity> links, Map<String, Map<Object, Object>> mappData) {
        for (FuncPropertyEntity propertyEntity : links) {
            try {
                String data = propertyEntity.getEnumData();
                Map<Object, Object> map = gson.fromJson(data, HashMap.class);
                mappData.put(propertyEntity.getPropKey(), map);
            } catch (Exception e) {
                LOGGER.error(e.getMessage(), e);
            }
        }
    }
}
