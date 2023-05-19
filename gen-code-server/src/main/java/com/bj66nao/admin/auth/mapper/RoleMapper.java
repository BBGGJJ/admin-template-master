package com.bj66nao.admin.auth.mapper;


import com.bj66nao.admin.auth.entity.RoleEntity;
import com.bj66nao.admin.auth.param.RoleParam;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.io.Serializable;
import java.util.List;


/**
*  角色管理
*
*  Created by  on '2020-05-15 06:39:55'.
*/

@Mapper
public interface RoleMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(RoleEntity record);

    int insertBatch(List<RoleEntity> var1);

    int insertOrUpdate(RoleEntity record);

    List<RoleEntity> selectByParam(RoleParam param);

    List<RoleEntity> selectByPrimaryKeys(@Param("roleIds") List<Integer> roleIds);

    long countByParam(RoleParam param);

     RoleEntity selectByPrimaryKey(Serializable id);

    int updateByPrimaryKeySelective(RoleEntity record);



 }