package com.bj66nao.admin.sys.adapter;

import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.dto.DictTableDto;
import com.bj66nao.admin.sys.entity.DictTableEntity;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;

/**
数据转换类
* 字典列表 Adapter
*
* Created by  on '2020-05-15 06:39:55'.
*/
public class DictTableAdapter {

    public static DictTableEntity adapterDto(DictTableDto dto){
       DictTableEntity entity = new DictTableEntity();
        BeanUtils.copyProperties(dto,entity);
        return entity;
    }

    public static DictTableDto adapterEntity(DictTableEntity  entity){
        DictTableDto dto =new DictTableDto();
        BeanUtils.copyProperties(entity,dto);
        return dto;
    }

    public static List<DictTableEntity> adapterDto(List<DictTableDto> dtos){
        List< DictTableEntity> result = new ArrayList<>();
        if(CollectionUtils.isEmpty(dtos)){
            return result;
        }
        dtos.stream().forEach(o ->
            result.add(adapterDto(o))
        );
        return result;
    }

    public static List<DictTableDto> adapterEntity(List<DictTableEntity> entitys){
        List<DictTableDto> result = new ArrayList<>();
        if(CollectionUtils.isEmpty(entitys)){
            return result;
        }
        entitys.stream().forEach(o ->
            result.add(adapterEntity(o))
        );
        return result;
    }

}