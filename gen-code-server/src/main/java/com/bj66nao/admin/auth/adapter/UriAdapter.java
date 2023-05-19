package com.bj66nao.admin.auth.adapter;

import com.bj66nao.admin.auth.dto.UriDto;
import com.bj66nao.admin.auth.dto.UriTree;
import com.bj66nao.admin.auth.entity.UriEntity;
import com.bj66nao.admin.auth.enums.UriTypeEnum;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.BeanUtils;

import java.util.*;

/**
 * 数据转换类
 * 权限管理 Adapter
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class UriAdapter {

    public static UriEntity adapterDto(UriDto dto) {
        UriEntity entity = new UriEntity();
        BeanUtils.copyProperties(dto, entity);
        return entity;
    }

    public static UriDto adapterEntity(UriEntity entity) {
        UriDto dto = new UriDto();
        BeanUtils.copyProperties(entity, dto);
        dto.setTypeDesc(UriTypeEnum.ofCode(entity.getType()).getDesc());
        return dto;
    }

    public static List<UriEntity> adapterDto(List<UriDto> dtos) {
        List<UriEntity> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(dtos)) {
            return result;
        }
        dtos.stream().forEach(o ->
                result.add(adapterDto(o))
        );
        return result;
    }

    public static List<UriDto> adapterEntity(List<UriEntity> entitys) {
        List<UriDto> result = new ArrayList<>();
        if (CollectionUtils.isEmpty(entitys)) {
            return result;
        }
        entitys.stream().forEach(o ->
                result.add(adapterEntity(o))
        );
        return result;
    }


    public static List<UriTree> adapterTrees(List<UriEntity> entitys) {
        Map<Integer, UriTree> parentMap = new HashMap<Integer, UriTree>();
        List<UriTree> uriTrees = new ArrayList<>();
        Collections.sort(entitys, new Comparator<UriEntity>() {
            @Override
            public int compare(UriEntity o1, UriEntity o2) {
                int compare = o1.getId().compareTo(o2.getId());
                return compare;
            }
        });
        entitys.forEach(e -> {
            UriTree tree = build(e);
            parentMap.put(e.getId(), tree);
            Integer parentId = e.getParentId();
            if (parentMap.containsKey(parentId)) {
                parentMap.get(parentId).addChild(tree);
            } else if (e.getParentId() == 0) {
                uriTrees.add(tree);
            }
        });
        Collections.sort(uriTrees, new IndexComparator());
        parentMap.values().stream().forEach(e->{
            if(CollectionUtils.isNotEmpty(e.getChilds())){
                Collections.sort(e.getChilds(), new IndexComparator());
            }
        });
        return uriTrees;
    }

    private static UriTree build(UriEntity entity) {
        UriTree dto = new UriTree();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }
   private static class IndexComparator implements Comparator<UriTree>{
       @Override
       public int compare(UriTree o1, UriTree o2) {
           int compare = o1.getIndex().compareTo(o2.getIndex());
           return compare;
       }
   }
}