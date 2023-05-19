package com.bj66nao.admin.sys.mapper;

import com.bj66nao.admin.bean.page.PageRequest;
import com.bj66nao.admin.sys.param.FuncStoreParam;
import com.bj66nao.admin.sys.param.SuggestParam;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * Created by EDZ on 2020/8/10.
 */
@Mapper
public interface FuncStoreMapper {

    int insert(@Param("param") FuncStoreParam entity);

    int delete(@Param("table") String table, @Param("keyName") String primaryKeyName, @Param("keyValue") Object id);

    int update(@Param("keyName") String keyColumnName, @Param("keyValue") Object keyValue, @Param("param") FuncStoreParam storeEntity);

    Map<String, Object> find(@Param("param") FuncStoreParam storeEntity, @Param("keyName") String primaryKeyName, @Param("keyValue") Object id);

    List<Map<String, Object>> findPage(@Param("page") PageRequest page, @Param("param") FuncStoreParam param);

    long count(@Param("param") FuncStoreParam param);

    List<Map<String, Object>> queryLinkDatas(@Param("tableName") String tableName, @Param("key") String key, @Param("desc") String desc, @Param("queryCondition") String queryCondition, @Param("keyValues") List<Object> keyValues);

    Map<String, Object> queryLinkData(@Param("tableName") String tableName, @Param("key") String key, @Param("desc") String desc, @Param("queryCondition") String queryCondition, @Param("keyValue") Object keyValue);

    List<Map<String, Object>> querySuggest(@Param("tableName") String tableName, @Param("key") String key, @Param("desc") String desc, @Param("queryCondition") String queryCondition, @Param("param") SuggestParam param);
    List<Map<String, Object>> querySuggestExt(@Param("tableName") String tableName,@Param("extFields") List<String> extFields, @Param("key") String key, @Param("desc") String desc, @Param("queryCondition") String queryCondition, @Param("param") SuggestParam param);

}
