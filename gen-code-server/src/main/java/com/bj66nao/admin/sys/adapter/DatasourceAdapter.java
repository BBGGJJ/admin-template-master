package com.bj66nao.admin.sys.adapter;

import com.bj66nao.admin.sys.dto.DatasourceDto;
import com.bj66nao.admin.sys.entity.DatasourceEntity;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;

/**
数据转换类
* 数据源配置 Adapter
*
* Created by  on '2020-06-09 14:31:37'.
*/
public class DatasourceAdapter {

    public static DatasourceEntity adapterDto(DatasourceDto dto){
       DatasourceEntity entity = new DatasourceEntity();
        BeanUtils.copyProperties(dto,entity);
        return entity;
    }

    public static DatasourceDto adapterEntity(DatasourceEntity  entity){
        DatasourceDto dto =new DatasourceDto();
        BeanUtils.copyProperties(entity,dto);
        return dto;
    }

    public static List<DatasourceEntity> adapterDto(List<DatasourceDto> dtos){
        List< DatasourceEntity> result = new ArrayList<>();
        if(CollectionUtils.isEmpty(dtos)){
            return result;
        }
        dtos.stream().forEach(o ->
            result.add(adapterDto(o))
        );
        return result;
    }

    public static List<DatasourceDto> adapterEntity(List<DatasourceEntity> entitys){
        List<DatasourceDto> result = new ArrayList<>();
        if(CollectionUtils.isEmpty(entitys)){
            return result;
        }
        entitys.stream().forEach(o ->
            result.add(adapterEntity(o))
        );
        return result;
    }

}