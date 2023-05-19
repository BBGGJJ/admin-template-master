package com.bj66nao.admin.auth.adapter;

import com.bj66nao.admin.auth.dto.AuthUserDto;
import com.bj66nao.admin.auth.entity.AuthUserEntity;
import com.bj66nao.admin.sys.entity.AppsourceEntity;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 数据转换类
 * 权限管理用户表 Adapter
 * <p>
 * Created by  on '2020-05-19 06:07:49'.
 */
public class AuthUserAdapter {

    public static AuthUserEntity adapterDto(AuthUserDto dto) {
        AuthUserEntity entity = new AuthUserEntity();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    public static AuthUserDto adapterEntity(AuthUserEntity entity, AppsourceEntity appsourceEntity, UserSecret userSecret) {
        AuthUserDto dto = new AuthUserDto();
        BeanUtils.copyProperties(entity, dto);
        if(appsourceEntity!=null) {
            dto.setAppsourceName(appsourceEntity.getName());
        }
        if(userSecret!=null) {
            if (StringUtils.isEmpty(userSecret.getUserName())) {
                dto.setUserName(userSecret.getMobile());
            } else {
                dto.setUserName(userSecret.getMobile() + "(" + userSecret.getUserName() + ")");
            }
        }
        return dto;
    }

    public static List<AuthUserEntity> adapterDto(List<AuthUserDto> dtos) {
        List<AuthUserEntity> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(dtos)) {
            return result;
        }
        dtos.stream().forEach(o ->
                result.add(adapterDto(o))
        );
        return result;
    }

    public static List<AuthUserDto> adapterEntity(List<AuthUserEntity> entitys, Map<Integer, AppsourceEntity> appEntityMap, Map<Long, UserSecret> userSecretMap) {
        List<AuthUserDto> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(entitys)) {
            return result;
        }
        entitys.stream().forEach(o ->
                result.add(adapterEntity(o, appEntityMap.get(o.getAppsourceId()), userSecretMap.get(o.getUserId())))
        );
        return result;
    }

}