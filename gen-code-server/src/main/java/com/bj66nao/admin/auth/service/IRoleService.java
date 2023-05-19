package com.bj66nao.admin.auth.service;

import com.bj66nao.admin.auth.dto.RoleDto;
import com.bj66nao.admin.auth.param.RoleParam;
import com.bj66nao.admin.bean.page.Pager;

import java.util.List;
/**
* 角色管理
*
* Created by  on '2020-05-15 06:39:55'.
*/
public interface IRoleService {

    /**
    * 新增
    */
    boolean insert(RoleDto dto);

    /**
    * 新增or更新： ON DUPLICATE KEY UPDATE
    */
    boolean insertOrUpdate(RoleDto dto);

    /**
    * 批量新增： ON DUPLICATE KEY UPDATE
    */
    int insertBatch(List<RoleDto> dtos);

    /**
    * 删除
    */
    public boolean delete(Integer id);

    /**
    * 更新
    */
    boolean  update(RoleDto dto);
    /**
     * 更新
     */
    boolean  updateRoleUris(RoleDto dto);


    /**
    * 查询
    */
    RoleDto seletById(Integer id);

    /**
    * 分页查询
    */
    Pager<RoleDto> selectPage(RoleParam param);

    /**
    * 列表查询
    */
    List<RoleDto> selectList(RoleParam param);

}