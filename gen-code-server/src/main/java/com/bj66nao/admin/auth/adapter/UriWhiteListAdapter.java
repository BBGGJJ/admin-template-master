package com.bj66nao.admin.auth.adapter;

import com.bj66nao.admin.auth.dto.UriWhiteListDto;
import com.bj66nao.admin.auth.entity.UriWhiteListEntity;
import com.bj66nao.admin.sys.entity.AppsourceEntity;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * 数据转换类
 * uri白名单管理 Adapter
 * <p>
 * Created by  on '2020-05-20 05:42:51'.
 */
public class UriWhiteListAdapter {

    public static UriWhiteListEntity adapterDto(UriWhiteListDto dto) {
        UriWhiteListEntity entity = new UriWhiteListEntity();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    public static UriWhiteListDto adapterEntity(UriWhiteListEntity entity, AppsourceEntity appsourceEntity) {
        UriWhiteListDto dto = new UriWhiteListDto();
        BeanUtils.copyProperties(entity, dto);
        if (Objects.nonNull(appsourceEntity)) {
            dto.setAppCode(appsourceEntity.getAppCode());
            dto.setAppName(appsourceEntity.getName());
        }
        return dto;
    }

    public static List<UriWhiteListEntity> adapterDto(List<UriWhiteListDto> dtos) {
        List<UriWhiteListEntity> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(dtos)) {
            return result;
        }
        dtos.stream().forEach(o ->
                result.add(adapterDto(o))
        );
        return result;
    }

    public static List<UriWhiteListDto> adapterEntity(List<UriWhiteListEntity> entitys,Map<Integer, AppsourceEntity> appEntityMap) {
        List<UriWhiteListDto> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(entitys)) {
            return result;
        }
        entitys.stream().forEach(o ->
                result.add(adapterEntity(o,appEntityMap.get(o.getAppId())))
        );
        return result;
    }

}