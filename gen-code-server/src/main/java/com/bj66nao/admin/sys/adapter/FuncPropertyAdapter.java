package com.bj66nao.admin.sys.adapter;

import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.dto.FuncPropertyDto;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * 数据转换类
 * 功能属性配置 Adapter
 * <p>
 * Created by  on '2020-08-07 15:58:33'.
 */
public class FuncPropertyAdapter {

    public static FuncPropertyEntity adapterDto(FuncPropertyDto dto) {
        FuncPropertyEntity entity = new FuncPropertyEntity();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    public static FuncPropertyDto adapterEntity(FuncPropertyEntity entity) {
        FuncPropertyDto dto = new FuncPropertyDto();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    public static List<FuncPropertyEntity> adapterDto(List<FuncPropertyDto> dtos) {
        List<FuncPropertyEntity> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(dtos)) {
            return result;
        }
        dtos.stream().forEach(o ->
                result.add(adapterDto(o))
        );
        return result;
    }

    public static List<FuncPropertyDto> adapterEntity(List<FuncPropertyEntity> entitys) {
        List<FuncPropertyDto> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(entitys)) {
            return result;
        }
        entitys.stream().forEach(o ->
                result.add(adapterEntity(o))
        );
        return result;
    }

}
