package com.bj66nao.admin.sys.mapper;

import com.bj66nao.admin.sys.param.DatasourceParam;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.bj66nao.admin.sys.entity.DatasourceEntity;

import java.io.Serializable;
import java.util.List;


/**
*  数据源配置
*
*  Created by  on '2020-06-09 14:31:37'.
*/

@Mapper
public interface DatasourceMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(DatasourceEntity record);

    List<DatasourceEntity> selectByPrimaryKeys(@Param("ids") List<Integer> ids);

    List<DatasourceEntity> selectByParam(DatasourceParam param);

    long countByParam(DatasourceParam param);

     DatasourceEntity selectByPrimaryKey(Serializable id);

    int updateByPrimaryKeySelective(DatasourceEntity record);

 }