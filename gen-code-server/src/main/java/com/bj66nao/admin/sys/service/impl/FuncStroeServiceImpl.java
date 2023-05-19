package com.bj66nao.admin.sys.service.impl;

import com.bj66nao.admin.sys.dto.FuncDataDetailVo;
import com.bj66nao.admin.sys.param.FuncStoreParam;
import com.bj66nao.admin.sys.service.handler.DataTypeHandler;
import com.bj66nao.admin.utils.Safes;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import com.bj66nao.admin.cached.DictDetailCached;
import com.bj66nao.admin.cached.DictTableCaced;
import com.bj66nao.admin.cached.FuncCached;
import com.bj66nao.admin.cached.FuncPropertyCached;
import com.bj66nao.admin.sys.dto.FuncDataVo;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import com.bj66nao.admin.sys.enums.FuncDataTypeEnum;
import com.bj66nao.admin.sys.mapper.FuncStoreMapper;
import com.bj66nao.admin.sys.param.FuncDataParam;
import com.bj66nao.admin.sys.param.SuggestParam;
import com.bj66nao.admin.sys.repository.StoreRepository;
import com.bj66nao.admin.sys.service.IFuncStroeService;
import com.bj66nao.admin.sys.service.cache.PatternCache;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.util.StringUtils;

import java.io.Serializable;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * Created by EDZ on 2020/8/10.
 */
@Service
public class FuncStroeServiceImpl implements IFuncStroeService {

    public DictTableCaced dictTableCaced;

    private DictDetailCached dictDetailCached;

    private FuncCached funcCached;

    private FuncPropertyCached funcPropertyCached;

    private FuncStoreMapper funcStoreMapper;

    private Map<FuncDataTypeEnum, DataTypeHandler> dataTypeHandlerMap;

    private static PatternCache regexCached = new PatternCache();

    private StoreRepository storeRepository;

    public FuncStroeServiceImpl(Set<DataTypeHandler> dataTypeHandlers, DictTableCaced dictTableCaced, DictDetailCached dictDetailCached, FuncCached funcCached, FuncPropertyCached funcPropertyCached, FuncStoreMapper funcStoreMapper,StoreRepository storeRepository) {
        this.dictDetailCached = dictDetailCached;
        this.dictTableCaced = dictTableCaced;
        this.funcCached = funcCached;
        this.funcPropertyCached = funcPropertyCached;
        this.funcStoreMapper = funcStoreMapper;
        this.storeRepository=storeRepository;
        dataTypeHandlerMap = Maps.newHashMap();
        Safes.of(dataTypeHandlers).stream().forEach(e -> {
            dataTypeHandlerMap.put(e.getDataType(), e);
        });
    }

    @Override
    public boolean save(String funcCode, Map<String, Object> param) {
        FuncEntity funcEntity = funcCached.getFuncDto(funcCode);
        Assert.notNull(funcEntity, "func is null");
        List<FuncPropertyEntity> props = funcPropertyCached.getFuncPropertys(funcCode);
        Assert.notEmpty(props, "prop item is not config");
        for (FuncPropertyEntity propertyEntity : props) {
            checkParm(propertyEntity, param);
        }
        FuncStoreParam storeEntity = new FuncStoreParam();
        storeEntity.setTable(funcEntity.getTableName());
        Map<String, Object> valueMapp = new HashMap<>();
        for (FuncPropertyEntity propertyEntity : props) {
            if (propertyEntity.getCreate() == null || !propertyEntity.getCreate() || propertyEntity.getPrimaryKey()) {
                continue;
            }
            String propKey = propertyEntity.getPropKey();
            Object fieldValue = param.get(propKey);
            if (Objects.isNull(fieldValue)) {
                fieldValue = propertyEntity.getDefaultValue();
            }
            if (Objects.isNull(fieldValue) || StringUtils.isEmpty(fieldValue)) {
                continue;
            }
            valueMapp.put(propertyEntity.getColumnName(), fieldValue);
        }
        storeEntity.setValueMapp(valueMapp);
        int len = storeRepository.insert(funcEntity,storeEntity);
        return len > 0;
    }

    @Override
    public boolean delete(String funcCode, Object id) {
        FuncEntity funcEntity = funcCached.getFuncDto(funcCode);
        Assert.notNull(funcEntity, "func is null");
        List<FuncPropertyEntity> props = funcPropertyCached.getFuncPropertys(funcCode);
        Assert.notEmpty(props, "prop item is not config");
        FuncPropertyEntity primaryKeyProp = Safes.of(props).stream().filter(e -> Objects.nonNull(e.getPrimaryKey()) && e.getPrimaryKey()).findFirst().orElse(null);
        Assert.notNull(primaryKeyProp, "primary key is not config");
        int len = storeRepository.delete(funcEntity, primaryKeyProp.getColumnName(), id);
        return len > 0;
    }

    @Override
    public boolean update(String funcCode, Map<String, Object> para) {
        FuncEntity funcEntity = funcCached.getFuncDto(funcCode);
        Assert.notNull(funcEntity, "func is null");
        List<FuncPropertyEntity> props = funcPropertyCached.getFuncPropertys(funcCode);
        Assert.notEmpty(props, "prop item is not config");
        FuncPropertyEntity primaryKeyProp = Safes.of(props).stream().filter(e -> Objects.nonNull(e.getPrimaryKey()) && e.getPrimaryKey()).findFirst().orElse(null);
        Assert.notNull(primaryKeyProp, "primary key is not config");
        Serializable keyValue = (Serializable) para.remove(primaryKeyProp.getPropKey());
        Assert.notNull(keyValue, "primary key must null");
        for (FuncPropertyEntity propertyEntity : props) {
            checkParm(propertyEntity, para);
        }
        FuncStoreParam storeEntity = new FuncStoreParam();
        storeEntity.setTable(funcEntity.getTableName());
        Map<String, Object> valueMapp = new HashMap<>();
        for (FuncPropertyEntity propertyEntity : props) {
            if (!propertyEntity.getPrimaryKey() && (propertyEntity.getEdit() == null || !propertyEntity.getEdit())) {
                continue;
            }
            String propKey = propertyEntity.getPropKey();
            Object fieldValue = para.get(propKey);
            if (Objects.isNull(fieldValue)) {
                continue;
            }
            valueMapp.put(propertyEntity.getColumnName(), fieldValue);
        }
        storeEntity.setValueMapp(valueMapp);
        int len = storeRepository.update(funcEntity,primaryKeyProp.getColumnName(), keyValue, storeEntity);
        return len > 0;
    }

    @Override
    public FuncDataDetailVo find(String funcCode, Object id) {
        FuncEntity funcEntity = funcCached.getFuncDto(funcCode);
        Assert.notNull(funcEntity, "func is null");
        List<FuncPropertyEntity> props = funcPropertyCached.getFuncPropertys(funcCode);
        Assert.notEmpty(props, "prop item is not config");
        FuncPropertyEntity primaryKeyProp = Safes.of(props).stream().filter(e -> Objects.nonNull(e.getPrimaryKey()) && e.getPrimaryKey()).findFirst().orElse(null);
        Assert.notNull(primaryKeyProp, "primary key is not config");
        FuncStoreParam storeEntity = new FuncStoreParam();
        storeEntity.setTable(funcEntity.getTableName());
        Map<String, String> fieldMapp = new HashMap<>(props.size(), 1);
        List<FuncPropertyEntity> linkTables = Lists.newArrayList();
        List<FuncPropertyEntity> linkEnum = Lists.newArrayList();
        List<FuncPropertyEntity> linkDict = Lists.newArrayList();
        for (FuncPropertyEntity propertyEntity : props) {
            if (propertyEntity.getDataType().intValue() == FuncDataTypeEnum.TABLE.getCode()) {
                linkTables.add(propertyEntity);
            } else if (propertyEntity.getDataType().intValue() == FuncDataTypeEnum.ENUM.getCode()) {
                linkEnum.add(propertyEntity);
            } else if (propertyEntity.getDataType().intValue() == FuncDataTypeEnum.DICT.getCode()) {
                linkDict.add(propertyEntity);
            }
            if (!propertyEntity.getPrimaryKey() && (propertyEntity.getDetailView() == null || !propertyEntity.getDetailView())) {
                continue;
            }
            fieldMapp.put(propertyEntity.getColumnName(), propertyEntity.getPropKey());
        }
        storeEntity.setFieldMapp(fieldMapp);
        Map<String, Object> vo = storeRepository.find(storeEntity, primaryKeyProp.getColumnName(), id,funcEntity);
        FuncDataDetailVo result = new FuncDataDetailVo();
        result.setData(vo);
        Map<String, Map<Object, Object>> mappData = Maps.newHashMap();
        if (CollectionUtils.isNotEmpty(linkTables)) {
            dataTypeHandlerMap.get(FuncDataTypeEnum.TABLE).handler(funcEntity,linkTables, mappData, vo);
        }
        if (CollectionUtils.isNotEmpty(linkEnum)) {
            dataTypeHandlerMap.get(FuncDataTypeEnum.ENUM).handler(funcEntity,linkEnum, mappData, vo);
        }
        if (CollectionUtils.isNotEmpty(linkDict)) {
            dataTypeHandlerMap.get(FuncDataTypeEnum.DICT).handler(funcEntity,linkDict, mappData, vo);
        }
        result.setMappData(mappData);
        return result;
    }

    @Override
    public FuncDataVo selectPage(String funcCode, FuncDataParam para) {
        FuncEntity funcEntity = funcCached.getFuncDto(funcCode);
        Assert.notNull(funcEntity, "func is null");
        List<FuncPropertyEntity> props = funcPropertyCached.getFuncPropertys(funcCode);
        Assert.notEmpty(props, "prop item is not config");
        Map<String, Object> valueMapp = new HashMap<>();
        Map<String, Object> queryMap = para.getData();
        List<FuncPropertyEntity> linkTables = Lists.newArrayList();
        List<FuncPropertyEntity> linkEnum = Lists.newArrayList();
        List<FuncPropertyEntity> linkDict = Lists.newArrayList();
        for (FuncPropertyEntity propertyEntity : props) {
            if (propertyEntity.getDataType().intValue() == FuncDataTypeEnum.TABLE.getCode()) {
                linkTables.add(propertyEntity);
            } else if (propertyEntity.getDataType().intValue() == FuncDataTypeEnum.ENUM.getCode()) {
                linkEnum.add(propertyEntity);
            } else if (propertyEntity.getDataType().intValue() == FuncDataTypeEnum.DICT.getCode()) {
                linkDict.add(propertyEntity);
            }
            if (!propertyEntity.getPrimaryKey() && (propertyEntity.getSearchView() == null || !propertyEntity.getSearchView())) {
                continue;
            }
            String propKey = propertyEntity.getPropKey();
            Object fieldValue = queryMap.get(propKey);
            if (Objects.isNull(fieldValue)) {
                continue;
            }
            valueMapp.put(propertyEntity.getColumnName(), fieldValue);
        }
        FuncStoreParam queryParam = new FuncStoreParam();
        Map<String, String> fieldMapp = new HashMap<>(props.size(), 1);
        for (FuncPropertyEntity propertyEntity : props) {
            if (!propertyEntity.getPrimaryKey() && (propertyEntity.getListView() == null || !propertyEntity.getListView())) {
                continue;
            }
            fieldMapp.put(propertyEntity.getColumnName(), propertyEntity.getPropKey());
        }
        queryParam.setFieldMapp(fieldMapp);
        queryParam.setValueMapp(valueMapp);
        queryParam.setTable(funcEntity.getTableName());
        long count = storeRepository.count(queryParam,funcEntity);
        if (count < 1) {
            FuncDataVo result = FuncDataVo.builder(Collections.EMPTY_LIST).current(para.getPage()).total(count).create();
            return result;
        }
        List<Map<String, Object>> list = storeRepository.findPage(para, queryParam,funcEntity);
        FuncDataVo result = FuncDataVo.builder(list).current(para.getPage()).total(count).create();
        Map<String, Map<Object, Object>> mappData = Maps.newHashMap();
        if (CollectionUtils.isNotEmpty(linkTables)) {
            dataTypeHandlerMap.get(FuncDataTypeEnum.TABLE).handler(funcEntity,linkTables, mappData, list);
        }
        if (CollectionUtils.isNotEmpty(linkEnum)) {
            dataTypeHandlerMap.get(FuncDataTypeEnum.ENUM).handler(funcEntity,linkEnum, mappData, list);
        }
        if (CollectionUtils.isNotEmpty(linkDict)) {
            dataTypeHandlerMap.get(FuncDataTypeEnum.DICT).handler(funcEntity,linkDict, mappData, list);
        }
        result.setMappData(mappData);
        return result;
    }

    private void checkParm(FuncPropertyEntity propertyEntity, Map<String, Object> param) {
        String propKey = propertyEntity.getPropKey();
        Object value = param.get(propKey);
        if (propertyEntity.getRequired()) {
            Assert.isTrue(Objects.nonNull(value), propKey + " must null");
        }
        if (Objects.isNull(value)) {
            return;
        }
        if (propertyEntity.getMaxLength() != null && propertyEntity.getMaxLength() > 0) {
            Assert.isTrue(String.valueOf(value).length() < propertyEntity.getMaxLength(), propKey + " lenth > " + propertyEntity.getMaxLength());
        }
        String regex = propertyEntity.getRegex();
        if (!StringUtils.isEmpty(regex)) {
            Pattern pattern = regexCached.get(regex);
            if (pattern == null) {
                pattern = Pattern.compile(regex);
                regexCached.put(regex, pattern);
            }
            Matcher matcher = pattern.matcher(String.valueOf(value));
            Assert.isTrue(matcher.matches(), propKey + " matcher " + regex + " error");
        }
    }

    @Override
    public List<Map<String, Object>> suggestJoinTable(String funcCode, String propCode, SuggestParam param) {
        FuncEntity funcEntity = funcCached.getFuncDto(funcCode);
        Assert.notNull(funcEntity, "func is null");
        FuncPropertyEntity funcPropertyEntity = funcPropertyCached.getFuncPropertys(funcCode, propCode);
        Assert.notNull(funcPropertyEntity, "func is null");
        String tableName = funcPropertyEntity.getLinkTableName();
        String key = funcPropertyEntity.getTablePropField();
        String desc = funcPropertyEntity.getTableDescField();
        String queryCondition = funcPropertyEntity.getTableQueryCondition();
        if (StringUtils.isEmpty(tableName) || StringUtils.isEmpty(key) || StringUtils.isEmpty(desc)) {
            return Collections.EMPTY_LIST;
        }
        List<Map<String, Object>> values = storeRepository.querySuggest(funcEntity,tableName, key, desc, queryCondition, param.getSuggest());
        if (CollectionUtils.isEmpty(values)) {
            return Collections.EMPTY_LIST;
        }
        return values.stream().map(e -> {
            e.put("value", MapUtils.getObject(e, key));
            e.put("label", MapUtils.getObject(e, desc));
            return e;
        }).collect(Collectors.toList());
    }
}
