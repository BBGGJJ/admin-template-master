package com.bj66nao.admin.sys.adapter;

import com.bj66nao.admin.sys.dto.FuncDto;
import com.bj66nao.admin.sys.dto.FuncPropertyVo;
import com.bj66nao.admin.sys.dto.FuncVo;
import com.bj66nao.admin.sys.entity.DatasourceEntity;
import com.bj66nao.admin.utils.Safes;
import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.entity.FuncEntity;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 数据转换类
 * 功能管理 Adapter
 * <p>
 * Created by  on '2020-08-07 15:58:33'.
 */
public class FuncAdapter {

    public static FuncEntity adapterDto(FuncDto dto) {
        FuncEntity entity = new FuncEntity();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    public static FuncDto adapterEntity(FuncEntity entity, DatasourceEntity datasourceEntity) {
        FuncDto dto = new FuncDto();
        BeanUtils.copyProperties(entity, dto);
        if (datasourceEntity != null) {
            dto.setDataSourceName(datasourceEntity.getSourceName());
        }
        return dto;
    }

    public static List<FuncEntity> adapterDto(List<FuncDto> dtos) {
        List<FuncEntity> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(dtos)) {
            return result;
        }
        dtos.stream().forEach(o ->
                result.add(adapterDto(o))
        );
        return result;
    }

    public static List<FuncDto> adapterEntity(List<FuncEntity> entitys, Map<Integer, DatasourceEntity> datasourceEntityMap) {
        List<FuncDto> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(entitys)) {
            return result;
        }
        entitys.stream().forEach(o ->
                result.add(adapterEntity(o, datasourceEntityMap.get(o.getDataSourceId())))
        );
        return result;
    }

    public static FuncVo adapterVo(FuncEntity funcEntity, List<FuncPropertyEntity> propertyEntities, Map<String, Map<Object, Object>> mappData) {
        FuncVo vo = new FuncVo();
        vo.setCreate(funcEntity.getIsCreate());
        vo.setDelete(funcEntity.getIsDelete());
        vo.setDetail(funcEntity.getIsDetail());
        vo.setEdit(funcEntity.getIsEdit());
        vo.setCode(funcEntity.getCode());
        vo.setName(funcEntity.getName());
        List<FuncPropertyVo> propertyVos = Safes.of(propertyEntities).stream().map(e -> {
            FuncPropertyVo funcPropertyVo = new FuncPropertyVo();
            BeanUtils.copyProperties(e, funcPropertyVo);
            return funcPropertyVo;
        }).collect(Collectors.toList());
        vo.setPropertyVos(propertyVos);
        vo.setMappData(mappData);
        return vo;
    }

}
