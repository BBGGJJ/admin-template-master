package com.bj66nao.admin.auth.adapter;

import com.bj66nao.admin.auth.entity.RoleUriEntity;
import com.google.common.collect.Lists;
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collections;
import java.util.List;

/**
 * 数据转换类
 * 角色与权限对应关系 Adapter
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class RoleUriAdapter {

    public static List<RoleUriEntity> adapterRoleId(Integer roleId, List<Integer> uriIds) {
        if (CollectionUtils.isEmpty(uriIds)) {
            return Collections.EMPTY_LIST;
        }
       List<RoleUriEntity> entities = Lists.newArrayList();
        uriIds.stream().forEach(e ->{
            RoleUriEntity roleUriEntity = new RoleUriEntity();
            roleUriEntity.setRoleId(roleId);
            roleUriEntity.setUriId(e);
            entities.add(roleUriEntity);
        });
        return entities;
    }
}