package com.bj66nao.admin.sys.mapper;
;
import com.bj66nao.admin.sys.entity.DictDetailEntity;
import com.bj66nao.admin.sys.param.DictDetailParam;
import org.apache.ibatis.annotations.Mapper;

import java.io.Serializable;
import java.util.List;


/**
*  字典详情管理
*
*  Created by  on '2020-05-15 06:39:55'.
*/

@Mapper
public interface DictDetailMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(DictDetailEntity record);

    int insertBatch(List<DictDetailEntity> var1);

    int insertOrUpdate(DictDetailEntity record);

    List<DictDetailEntity> selectByParam(DictDetailParam param);

    long countByParam(DictDetailParam param);

     DictDetailEntity selectByPrimaryKey(Serializable id);

    int updateByPrimaryKeySelective(DictDetailEntity record);

 }