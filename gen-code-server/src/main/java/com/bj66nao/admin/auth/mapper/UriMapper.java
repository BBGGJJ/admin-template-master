package com.bj66nao.admin.auth.mapper;

import com.bj66nao.admin.auth.entity.UriEntity;
import com.bj66nao.admin.auth.param.UriParam;
import org.apache.ibatis.annotations.Mapper;

import java.io.Serializable;
import java.util.List;


/**
*  权限管理
*
*  Created by  on '2020-05-15 06:39:55'.
*/

@Mapper
public interface UriMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(UriEntity record);

    int insertBatch(List<UriEntity> var1);

    int insertOrUpdate(UriEntity record);

    List<UriEntity> selectByParam(UriParam param);

    long countByParam(UriParam param);

     UriEntity selectByPrimaryKey(Serializable id);

    int updateByPrimaryKeySelective(UriEntity record);

    int updateIndexs(List<UriEntity> list);

 }