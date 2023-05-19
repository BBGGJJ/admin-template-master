package com.bj66nao.admin.auth.mapper;

import com.bj66nao.admin.auth.param.AppsourceParam;
import com.bj66nao.admin.sys.entity.AppsourceEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.io.Serializable;
import java.util.List;


/**
 * 系统列表
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */

@Mapper
public interface AppsourceMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(AppsourceEntity record);

    int insertBatch(List<AppsourceEntity> var1);

    int insertOrUpdate(AppsourceEntity record);

    List<AppsourceEntity> selectByParam(AppsourceParam param);


    long countByParam(AppsourceParam param);

    AppsourceEntity selectByPrimaryKey(Serializable id);

    AppsourceEntity selectByCode(String code);

    List<AppsourceEntity> selectByPrimaryKeys(@Param("appIds") List<Integer> appIds);

    int updateByPrimaryKeySelective(AppsourceEntity record);

}