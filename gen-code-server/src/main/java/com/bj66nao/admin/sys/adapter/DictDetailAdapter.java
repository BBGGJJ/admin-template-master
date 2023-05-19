package com.bj66nao.admin.sys.adapter;

import com.bj66nao.admin.sys.dto.DictDetailDto;
import com.bj66nao.admin.sys.entity.DictDetailEntity;
import com.bj66nao.admin.sys.entity.DictTableEntity;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 数据转换类
 * 字典详情管理 Adapter
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class DictDetailAdapter {

    public static DictDetailEntity adapterDto(DictDetailDto dto) {
        DictDetailEntity entity = new DictDetailEntity();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    public static DictDetailDto adapterEntity(DictDetailEntity entity, DictTableEntity dictTableEntity) {
        DictDetailDto dto = new DictDetailDto();
        BeanUtils.copyProperties(entity, dto);
        dto.setDictTableName(dictTableEntity.getDictName());
        return dto;
    }

    public static List<DictDetailEntity> adapterDto(List<DictDetailDto> dtos) {
        List<DictDetailEntity> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(dtos)) {
            return result;
        }
        dtos.stream().forEach(o ->
                result.add(adapterDto(o))
        );
        return result;
    }

    public static List<DictDetailDto> adapterEntity(List<DictDetailEntity> entitys, Map<Integer, DictTableEntity> tableEntityMap) {
        List<DictDetailDto> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(entitys)) {
            return result;
        }
        entitys.stream().forEach(o ->
                result.add(adapterEntity(o, tableEntityMap.get(o.getTableId())))
        );
        return result;
    }

    public static List<DictDetailDto> adapterEntity(List<DictDetailEntity> entitys, DictTableEntity tableEntity) {
        List<DictDetailDto> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(entitys)) {
            return result;
        }
        entitys.stream().forEach(o -> result.add(adapterEntity(o, tableEntity)));
        return result;
    }

}