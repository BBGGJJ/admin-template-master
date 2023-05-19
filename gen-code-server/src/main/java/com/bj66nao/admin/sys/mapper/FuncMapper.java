package com.bj66nao.admin.sys.mapper;

import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.param.FuncParam;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.io.Serializable;


/**
*  功能管理
*
*  Created by  on '2020-08-07 15:58:33'.
*/

@Mapper
public interface FuncMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(FuncEntity record);

    int insertBatch(List<FuncEntity> var1);

    int insertOrUpdate(FuncEntity record);

    List<FuncEntity> selectByParam(FuncParam param);

    long countByParam(FuncParam param);

     FuncEntity selectByPrimaryKey(Serializable id);

    int updateByPrimaryKeySelective(FuncEntity record);

 }
