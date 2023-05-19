package com.bj66nao.admin.auth.mapper;

import com.bj66nao.admin.auth.entity.AuthUserEntity;
import com.bj66nao.admin.auth.param.AuthUserParam;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.io.Serializable;
import java.util.List;


/**
 * 权限管理用户表
 * <p>
 * Created by  on '2020-05-19 06:07:49'.
 */

@Mapper
public interface AuthUserMapper {

    /**
     * d
     * @param id
     * @return d
     */
    int deleteByPrimaryKey(Serializable id);

    /**
     *
     * @param record
     * @return
     */
    int insertSelective(AuthUserEntity record);

    /**
     *
     */
    int insertBatch(List<AuthUserEntity> var1);

    int insertOrUpdate(AuthUserEntity record);

    List<AuthUserEntity> selectByParam(AuthUserParam param);

    long countByParam(AuthUserParam param);

    AuthUserEntity selectByPrimaryKey(Serializable id);

    AuthUserEntity selectByUserIdAndAppId(@Param("userId") Long userId,@Param("appsourceId") Integer appsourceId);

    int updateByPrimaryKeySelective(AuthUserEntity record);

}