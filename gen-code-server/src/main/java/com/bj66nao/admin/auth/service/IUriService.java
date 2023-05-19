package com.bj66nao.admin.auth.service;


import com.bj66nao.admin.auth.dto.UriDto;
import com.bj66nao.admin.auth.dto.UriTree;
import com.bj66nao.admin.auth.param.UriParam;
import com.bj66nao.admin.bean.page.Pager;

import java.util.List;

/**
 * 权限管理
 * <p>
 * Created by  on '2020-05-15 06:39:55'.
 */
public interface IUriService {

    /**
     * 新增
     */
    boolean insert(UriDto dto);

    /**
     * 新增or更新： ON DUPLICATE KEY UPDATE
     */
    boolean insertOrUpdate(UriDto dto);

    UriDto saveOrReturenValue(UriDto dto);

    /**
     * 批量新增： ON DUPLICATE KEY UPDATE
     */
    int insertBatch(List<UriDto> dtos);

    /**
     * 删除
     */
    public boolean delete(Integer id);

    /**
     * 更新
     */
    boolean update(UriDto dto);

    int updateIndex(List<UriDto> dtos);

    /**
     * 查询
     */
    UriDto seletById(Integer id);

    /**
     * 分页查询
     */
    Pager<UriDto> selectPage(UriParam param);

    /**
     * 列表查询
     */
    List<UriDto> selectList(UriParam param);

    List<UriTree> queryTree(UriParam param);

}