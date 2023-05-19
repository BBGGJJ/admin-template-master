package com.bj66nao.admin.auth.adapter;

import com.bj66nao.admin.auth.dto.RoleDto;
import com.bj66nao.admin.auth.entity.RoleEntity;
import com.bj66nao.admin.sys.entity.AppsourceEntity;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * 数据转换类
 * 角色管理 Adapter
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class RoleAdapter {

    public static RoleEntity adapterDto(RoleDto dto) {
        RoleEntity entity = new RoleEntity();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    public static RoleDto adapterEntity(RoleEntity entity, AppsourceEntity appsourceEntity, List<Integer> uriIds) {
        RoleDto dto = new RoleDto();
        BeanUtils.copyProperties(entity, dto);
        if (Objects.nonNull(appsourceEntity)) {
            dto.setAppName(appsourceEntity.getName());
        }
        dto.setUriIds(uriIds);
        return dto;
    }

    public static List<RoleEntity> adapterDto(List<RoleDto> dtos) {
        List<RoleEntity> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(dtos)) {
            return result;
        }
        dtos.stream().forEach(o ->
                result.add(adapterDto(o))
        );
        return result;
    }

    public static RoleDto adapterEntity(RoleEntity entity, AppsourceEntity appsourceEntity) {
        RoleDto dto = new RoleDto();
        BeanUtils.copyProperties(entity, dto);
        if (Objects.nonNull(appsourceEntity)) {
            dto.setAppName(appsourceEntity.getName());
        }
        return dto;

    }

}