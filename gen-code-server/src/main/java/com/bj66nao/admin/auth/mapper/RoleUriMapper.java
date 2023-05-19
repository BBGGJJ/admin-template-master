package com.bj66nao.admin.auth.mapper;


import com.bj66nao.admin.auth.entity.RoleUriEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.io.Serializable;
import java.util.List;


/**
 * 角色与权限对应关系
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */

@Mapper
public interface RoleUriMapper {

    int deleteByPrimaryKey(Serializable id);

    int deleteByPrimaryKeys(@Param("ids") List<Integer> ids);

    int insertSelective(RoleUriEntity record);

    int insertBatch(List<RoleUriEntity> var1);

    int deleteByRoleId(@Param("roleId") Integer roleId);

    int insertOrUpdate(RoleUriEntity record);

    List<RoleUriEntity>  selectByRoleIds(@Param("roleIds") List<Integer> roleIds);

    RoleUriEntity selectByPrimaryKey(Serializable id);


}