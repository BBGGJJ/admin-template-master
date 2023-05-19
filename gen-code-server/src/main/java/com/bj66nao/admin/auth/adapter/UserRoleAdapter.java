package com.bj66nao.admin.auth.adapter;

import com.bj66nao.admin.auth.entity.UserRoleEntity;
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 数据转换类
 * 角色与用户对应关系 Adapter
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public class UserRoleAdapter {


    public static List<UserRoleEntity> adapterUserId(Integer userId, List<Integer> roleIds) {
        if (CollectionUtils.isEmpty(roleIds)) {
            return Collections.EMPTY_LIST;
        }
        return roleIds.stream().map(e -> {
            UserRoleEntity roleEntity = new UserRoleEntity();
            roleEntity.setRoleId(e);
            roleEntity.setUserId(userId);
            return roleEntity;
        }).collect(Collectors.toList());
    }
}