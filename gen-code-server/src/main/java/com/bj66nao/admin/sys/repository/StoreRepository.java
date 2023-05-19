package com.bj66nao.admin.sys.repository;

import com.bj66nao.admin.exception.BizException;
import com.bj66nao.admin.sys.param.FuncDataParam;
import com.bj66nao.admin.sys.param.FuncStoreParam;
import com.bj66nao.admin.sys.utils.CloseUtils;
import com.google.common.base.Joiner;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.apache.commons.lang3.StringUtils;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.support.DatasourceSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by EDZ on 2020/11/9.
 */
@Repository
public class StoreRepository {
    private static Logger logger = LoggerFactory.getLogger(StoreRepository.class);

    @Autowired
    private DatasourceSupport datasourceSupport;

    public int insert(FuncEntity funcEntity, FuncStoreParam storeParam) {
        DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try (Connection conn = dataSource.getConnection()) {
            Set<String> fieldKeys = storeParam.getValueMapp().keySet();
            Map<String, Object> maps = storeParam.getValueMapp();
            int len = fieldKeys.size();
            StringBuilder sql = new StringBuilder("insert into `").append(storeParam.getTable()).append("` (`").append(Joiner.on("` , `").join(fieldKeys))
                    .append("`) values(" + placeholder(len) + ")");
            logger.info(sql.toString());
            ps = conn.prepareStatement(sql.toString());
            int i = 1;
            for (String field : fieldKeys) {
                Object o = maps.get(field);
                ps.setObject(i++, o);
            }
            int returnResult = ps.executeUpdate();
            return returnResult;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new BizException("保存数据出错");
        } finally {
            CloseUtils.close(resultSet, ps, null);
        }
    }

    public int delete(FuncEntity funcEntity, String columenName, Object value) {
        DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try (Connection conn = dataSource.getConnection()) {
            StringBuilder sql = new StringBuilder("delete from `").append(funcEntity.getTableName()).append("` where ").append(" `").append(columenName).append("` = ").append(" ? ");
            logger.info(sql.toString());

            ps = conn.prepareStatement(sql.toString());
            ps.setObject(1, value);
            int returnResult = ps.executeUpdate();
            return returnResult;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new BizException("删除数据出错");
        } finally {
            CloseUtils.close(resultSet, ps, null);
        }
    }

    public int update(FuncEntity funcEntity, String columenName, Object value, FuncStoreParam storeParam) {
        DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try (Connection conn = dataSource.getConnection()) {
            Set<String> fieldKeys = storeParam.getValueMapp().keySet();
            Map<String, Object> maps = storeParam.getValueMapp();
            StringBuilder sql = new StringBuilder(" update `").append(funcEntity.getTableName()).append("` set ");
            int len = fieldKeys.size();
            int i = 0;
            for (String field : fieldKeys) {
                sql.append("`").append(field).append("` = ?");
                if (++i < len) {
                    sql.append(",");
                }

            }
            sql.append(" where ").append("`").append(columenName).append("` = ").append(" ?");
            logger.info(sql.toString());
            ps = conn.prepareStatement(sql.toString());
            i = 1;
            for (String field : fieldKeys) {
                Object o = maps.get(field);
                ps.setObject(i++, o);
            }
            ps.setObject(i++, value);
            int returnResult = ps.executeUpdate();
            return returnResult;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new BizException("更新数据出错");
        } finally {
            CloseUtils.close(resultSet, ps, null);
        }
    }

    public int count(FuncStoreParam storeParam, FuncEntity funcEntity) {
        DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try (Connection conn = dataSource.getConnection()) {
            Set<String> fieldKeys = storeParam.getValueMapp().keySet();
            Map<String, Object> maps = storeParam.getValueMapp();
            StringBuilder sql = new StringBuilder(" select  count(*) from `").append(funcEntity.getTableName()).append("`");
            int len = fieldKeys.size();
            int i = 0;
            if (maps.size() > 0) {
                sql.append("where ");
                for (String field : fieldKeys) {
                    sql.append(" `").append(field).append("` ").append("=").append(" ? ");
                    if (++i < len) {
                        sql.append(" and ");
                    }
                }
            }
            ps = conn.prepareStatement(sql.toString());
            logger.info(sql.toString());
            i = 1;
            for (String field : fieldKeys) {
                Object o = maps.get(field);
                ps.setObject(i++, o);
            }
            resultSet = ps.executeQuery();
            if (resultSet.next()) {
                int count = resultSet.getInt(1);
                return count;
            }
            return 0;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new BizException("查询数据出错");
        } finally {
            CloseUtils.close(resultSet, ps, null);
        }
    }

    public List<Map<String, Object>> findPage(FuncDataParam param, FuncStoreParam storeParam, FuncEntity funcEntity) {
        DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try (Connection conn = dataSource.getConnection()) {
            Set<String> fieldKeys = storeParam.getFieldMapp().keySet();
            Map<String, String> fieldMapp = storeParam.getFieldMapp();
            StringBuilder sql = new StringBuilder(" select ");
            int len = fieldKeys.size();
            int i = 0;
            for (String field : fieldKeys) {
                sql.append("`").append(field).append("`");
                if (++i < len) {
                    sql.append(", ");
                }
            }
            sql.append(" from `").append(storeParam.getTable()).append("` ");
            Set<String> valueKeys = storeParam.getValueMapp().keySet();
            Map<String, Object> valueMapp = storeParam.getValueMapp();
            len = valueKeys.size();
            i = 0;
            if (valueMapp.size() > 0) {
                sql.append("where ");
                for (String field : valueKeys) {
                    sql.append(" `").append(field).append("` ").append(" = ").append(" ? ");
                    if (++i < len) {
                        sql.append(" and ");
                    }
                }

            }
            sql.append(" limit ?,? ");
            logger.info(sql.toString());
            ps = conn.prepareStatement(sql.toString());
            i = 1;
            for (String field : valueKeys) {
                Object o = valueMapp.get(field);
                ps.setObject(i++, o);
            }
            ps.setObject(i++, param.getOffset());
            ps.setObject(i++, param.getLimit());
            resultSet = ps.executeQuery();
            List<Map<String, Object>> returnResult = Lists.newArrayList();
            while (resultSet.next()) {
                Map<String, Object> itemValue = Maps.newHashMap();
                for (String field : fieldKeys) {
                    Object value = resultSet.getObject(field);
                    itemValue.put(fieldMapp.get(field), value);
                }
                returnResult.add(itemValue);
            }
            return returnResult;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new BizException("查询数据出错");
        } finally {
            CloseUtils.close(resultSet, ps, null);
        }
    }

    public Map<String, Object> find(FuncStoreParam storeParam, String columenName, Object value, FuncEntity funcEntity) {
        DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try (Connection conn = dataSource.getConnection()) {
            Set<String> fieldKeys = storeParam.getFieldMapp().keySet();
            Map<String, String> fieldMapp = storeParam.getFieldMapp();
            StringBuilder sql = new StringBuilder(" select ");
            int len = fieldKeys.size();
            int i = 0;
            for (String field : fieldKeys) {
                sql.append("` ").append(field).append("` ");
                if (++i < len) {
                    sql.append(", ");
                }
            }
            sql.append("`").append(storeParam.getTable()).append("` ");
            sql.append(" where `").append(columenName).append("` = ").append("?");
            logger.info(sql.toString());
            ps = conn.prepareStatement(sql.toString());
            ps.setObject(1, value);
            resultSet = ps.executeQuery();
            if (resultSet.next()) {
                Map<String, Object> itemValue = Maps.newHashMap();
                for (String field : fieldKeys) {
                    Object rsValue = resultSet.getObject(field);
                    itemValue.put(fieldMapp.get(field), rsValue);
                }
                return itemValue;
            }
            return null;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new BizException("查询数据出错");
        } finally {
            CloseUtils.close(resultSet, ps, null);
        }
    }

    public List<Map<String, Object>> queryLinkDatas(FuncEntity funcEntity, String tableName, String key, String desc, String queryCondition, List<Object> keyValues) {
        DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try (Connection conn = dataSource.getConnection()) {
            StringBuilder sql = new StringBuilder(" select `").append(key).append("`,`").append(desc).append("` from `").append(tableName).append("` where");
            if (StringUtils.isNotEmpty(queryCondition)) {
                sql.append(queryCondition).append(" and ");
            }
            sql.append("`").append(key).append("`").append("in(").append(placeholder(keyValues.size())).append(")");
            logger.info(sql.toString());
            ps = conn.prepareStatement(sql.toString());
            int index =1;
            for(Object keyValue:keyValues){
                ps.setObject(index++, keyValue);

            }
            resultSet = ps.executeQuery();
            List<Map<String, Object>> returnResult = Lists.newArrayList();
            while (resultSet.next()) {
                Map<String, Object> itemValue = Maps.newHashMap();
                Object resultValue = resultSet.getObject(key);
                Object resultDesc = resultSet.getObject(desc);
                itemValue.put(key,resultValue);
                itemValue.put(desc,resultDesc);
                returnResult.add( itemValue);
            }
            return returnResult;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new BizException("查询数据出错");
        } finally {
            CloseUtils.close(resultSet, ps, null);
        }

    }
    public Map<String, Object> queryLinkData(FuncEntity funcEntity, String tableName, String key, String desc, String queryCondition, Object keyValue) {
        DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
        ResultSet resultSet = null;
        PreparedStatement ps = null;
        try (Connection conn = dataSource.getConnection()) {
            StringBuilder sql = new StringBuilder(" select `").append(key).append("`,`").append(desc).append("` from `").append(tableName).append("` where");
            if (StringUtils.isNotEmpty(queryCondition)) {
                sql.append(queryCondition).append(" and ");
            }
            sql.append("`").append(key).append("`").append("= ?");
            logger.info(sql.toString());
            ps = conn.prepareStatement(sql.toString());
            ps.setObject(1, keyValue);
            resultSet = ps.executeQuery();
            if (resultSet.next()) {
                Map<String, Object> itemValue = Maps.newHashMap();
                Object resultValue = resultSet.getObject(key);
                Object resultDesc = resultSet.getObject(desc);
                itemValue.put(key,resultValue);
                itemValue.put(desc,resultDesc);
                return itemValue;
            }
            return null;
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            throw new BizException("查询数据出错");
        } finally {
            CloseUtils.close(resultSet, ps, null);
        }
    }
  public  List<Map<String, Object>>  querySuggest(FuncEntity funcEntity,String tableName,String  key,String  desc,String  queryCondition, String suggest){
      DataSource dataSource = datasourceSupport.getDataSource(funcEntity.getDataSourceId());
      ResultSet resultSet = null;
      PreparedStatement ps = null;
      try (Connection conn = dataSource.getConnection()) {
          StringBuilder sql = new StringBuilder(" select `").append(key).append("`,`").append(desc).append("` from `").append(tableName).append("` where");
          if (StringUtils.isNotEmpty(queryCondition)) {
              sql.append(queryCondition).append(" and ");
          }
          sql.append("`").append(desc).append("`").append(" like CONCAT( ?,'%')");
          logger.info(sql.toString());
          ps = conn.prepareStatement(sql.toString());
          ps.setObject(1, suggest);
          resultSet = ps.executeQuery();
          List<Map<String, Object>> returnResult = Lists.newArrayList();
          while (resultSet.next()) {
              Map<String, Object> itemValue = Maps.newHashMap();
              Object resultValue = resultSet.getObject(key);
              Object resultDesc = resultSet.getObject(desc);
              itemValue.put(key,resultValue);
              itemValue.put(desc,resultDesc);
              returnResult.add( itemValue);
          }
          return returnResult;
      } catch (Exception e) {
          logger.error(e.getMessage(), e);
          throw new BizException("查询数据出错");
      } finally {
          CloseUtils.close(resultSet, ps, null);
      }
  }
    private String placeholder(int len) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < len; i++) {
            sb.append(" ?");
            if (i + 1 < len) {
                sb.append(", ");
            }
        }
        return sb.toString();
    }
}
