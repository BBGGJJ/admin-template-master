package com.bj66nao.admin.sys.mapper;

import com.bj66nao.admin.sys.entity.DictTableEntity;
import com.bj66nao.admin.sys.param.DictTableParam;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.io.Serializable;
import java.util.List;


/**
 * 字典列表
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */

@Mapper
public interface DictTableMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(DictTableEntity record);

    int insertBatch(List<DictTableEntity> var1);

    int insertOrUpdate(DictTableEntity record);

    List<DictTableEntity> selectByParam(DictTableParam param);

    long countByParam(DictTableParam param);

    DictTableEntity selectByPrimaryKey(Serializable id);

    DictTableEntity selectByCode(String typeCode);

    List<DictTableEntity> selectByPrimaryKeys(@Param("ids") List<Integer> ids);

    int updateByPrimaryKeySelective(DictTableEntity record);

}