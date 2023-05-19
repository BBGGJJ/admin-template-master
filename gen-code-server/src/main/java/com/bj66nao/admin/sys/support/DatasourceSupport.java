package com.bj66nao.admin.sys.support;

import com.alibaba.druid.pool.DruidDataSource;
import com.bj66nao.admin.exception.BizException;
import com.bj66nao.admin.sys.entity.DatasourceEntity;
import com.bj66nao.admin.sys.mapper.DatasourceMapper;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import javax.sql.DataSource;
import java.util.Map;
import java.util.Objects;

/**
 * Created by EDZ on 2020/6/16.
 */

@Component
public class DatasourceSupport {

    private static final int DATA_SOURCE_MAX = 1;

    private static Logger logger = LoggerFactory.getLogger(DatasourceSupport.class);
    private DatasourceMapper datasourceMapper;

    private static Map<Integer, DataSource> dataSourceMap = Maps.newConcurrentMap();

    public DatasourceSupport(DatasourceMapper datasourceMapper) {
        this.datasourceMapper = datasourceMapper;
    }


    public DataSource getDataSource(Integer sourceId) {
        DataSource dataSource = dataSourceMap.get(sourceId);
        if (Objects.nonNull(dataSource)) {
            return dataSource;
        }
        synchronized (DatasourceSupport.class) {
            if (!dataSourceMap.containsKey(sourceId)) {
                initDatasource(sourceId);
            }
        }
        return dataSourceMap.get(sourceId);
    }

    private void initDatasource(Integer sourceId) {
        try {
            DatasourceEntity datasourceEntity = datasourceMapper.selectByPrimaryKey(sourceId);
            Assert.notNull(datasourceEntity, "数据源不存在！");
            DruidDataSource druidDataSource = new DruidDataSource();
            druidDataSource.setUrl(datasourceEntity.getUrl());
            druidDataSource.setUsername(datasourceEntity.getUserName());
            druidDataSource.setPassword(datasourceEntity.getPassword());
            druidDataSource.setDriverClassName(datasourceEntity.getDriver());
            druidDataSource.setInitialSize(DATA_SOURCE_MAX);
            druidDataSource.init();
            logger.info(datasourceEntity.getDriver());
            dataSourceMap.put(sourceId, druidDataSource);
        } catch (Exception e) {
            throw new BizException(e.getMessage(), e);
        }
    }
}
