package com.bj66nao.admin.auth.mapper;


import com.bj66nao.admin.auth.entity.UriWhiteListEntity;
import com.bj66nao.admin.auth.param.UriWhiteListParam;
import org.apache.ibatis.annotations.Mapper;

import java.io.Serializable;
import java.util.List;


/**
*  uri白名单管理
*
*  Created by  on '2020-05-20 05:42:51'.
*/

@Mapper
public interface UriWhiteListMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(UriWhiteListEntity record);

    int insertBatch(List<UriWhiteListEntity> var1);

    int insertOrUpdate(UriWhiteListEntity record);

    List<UriWhiteListEntity> selectByParam(UriWhiteListParam param);

    long countByParam(UriWhiteListParam param);

     UriWhiteListEntity selectByPrimaryKey(Serializable id);

    int updateByPrimaryKeySelective(UriWhiteListEntity record);

 }