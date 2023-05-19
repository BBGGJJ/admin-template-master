package com.bj66nao.admin.auth.service;


import com.bj66nao.admin.auth.dto.AuthUserDto;
import com.bj66nao.admin.auth.dto.UriTree;
import com.bj66nao.admin.auth.param.AuthUserParam;
import com.bj66nao.admin.bean.page.Pager;

import java.util.List;

/**
 * 权限管理用户表
 * <p>
 * Created by  on '2020-05-19 06:07:49'.
 */
public interface IAuthUserService {

    /**
     * 新增
     */
    boolean insert(AuthUserDto dto);


    boolean auth(String uri, String appName, Long userId);

    boolean auths(List<String> uris, String appName, Long userId);

    /**
     * 删除
     */
    boolean delete(Integer id);

    /**
     * 更新
     */
    boolean update(AuthUserDto dto);

    /**
     * 更新
     */
    boolean updateUserRole(AuthUserDto dto);


    /**
     * 查询
     */
    AuthUserDto seletById(Integer id);

    /**
     * 分页查询
     */
    Pager<AuthUserDto> selectPage(AuthUserParam param);

    /**
     * 列表查询
     */
    List<AuthUserDto> selectList(AuthUserParam param);

    /**
     * @param param
     * @return
     */
    List<UriTree> queryUriTree(AuthUserParam param);

}