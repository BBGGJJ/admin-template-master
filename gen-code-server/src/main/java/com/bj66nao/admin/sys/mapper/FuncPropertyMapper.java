package com.bj66nao.admin.sys.mapper;

import com.bj66nao.admin.sys.param.FuncPropertyParam;
import org.apache.ibatis.annotations.Mapper;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;

import java.util.List;
import java.io.Serializable;


/**
*  功能属性配置
*
*  Created by  on '2020-08-07 15:58:33'.
*/

@Mapper
public interface FuncPropertyMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(FuncPropertyEntity record);

    int insertBatch(List<FuncPropertyEntity> var1);

    int insertOrUpdate(FuncPropertyEntity record);

    List<FuncPropertyEntity> selectByParam(FuncPropertyParam param);

    long countByParam(FuncPropertyParam param);

     FuncPropertyEntity selectByPrimaryKey(Serializable id);

    int updateByPrimaryKeySelective(FuncPropertyEntity record);

 }
