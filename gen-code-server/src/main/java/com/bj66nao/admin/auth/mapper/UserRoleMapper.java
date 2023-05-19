package com.bj66nao.admin.auth.mapper;

import com.bj66nao.admin.auth.entity.UserRoleEntity;
import com.bj66nao.admin.auth.param.UserRoleParam;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.io.Serializable;
import java.util.List;


/**
 * 角色与用户对应关系
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */

@Mapper
public interface UserRoleMapper {

    int deleteByPrimaryKey(Serializable id);

    int insertSelective(UserRoleEntity record);

    int insertBatch(List<UserRoleEntity> var1);


    int insertOrUpdate(UserRoleEntity record);

    List<UserRoleEntity> selectByParam(UserRoleParam param);

    int deleteByUserId(@Param("userId") Integer userId);

    int deleteByPrimaryKeys(@Param("ids") List<Integer> ids);

    List<UserRoleEntity> selectByUserId(@Param("userId") Integer userId);

}