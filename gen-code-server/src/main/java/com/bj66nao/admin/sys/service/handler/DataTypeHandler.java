package com.bj66nao.admin.sys.service.handler;

import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import com.bj66nao.admin.sys.enums.FuncDataTypeEnum;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;

/**
 * Created by EDZ on 2020/8/17.
 */
public interface DataTypeHandler {

    Logger LOGGER = LoggerFactory.getLogger(DataTypeHandler.class);

    FuncDataTypeEnum getDataType();

    void handler(FuncEntity funcEntity, List<FuncPropertyEntity> linkTables, Map<String, Map<Object, Object>> mappData, List<Map<String, Object>> list);

    void handler(FuncEntity funcEntity, List<FuncPropertyEntity> linkTables, Map<String, Map<Object, Object>> mappData, Map<String, Object> vo);

    void handler(FuncEntity funcEntity, List<FuncPropertyEntity> linkTables, Map<String, Map<Object, Object>> mappData);
}
