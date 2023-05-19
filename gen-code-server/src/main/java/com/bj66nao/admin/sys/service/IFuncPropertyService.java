package com.bj66nao.admin.sys.service;

import com.bj66nao.admin.sys.param.FuncPropertyParam;
import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.dto.FuncPropertyDto;

import java.util.List;

/**
* 功能属性配置
*
* Created by  on '2020-08-07 15:58:33'.
*/
public interface IFuncPropertyService {

    /**
    * 新增
    */
    boolean insert(FuncPropertyDto dto);

    /**
    * 新增or更新： ON DUPLICATE KEY UPDATE
    */
    boolean insertOrUpdate(FuncPropertyDto dto);

    /**
    * 批量新增： ON DUPLICATE KEY UPDATE
    */
    int insertBatch(List<FuncPropertyDto> dtos);

    /**
    * 删除
    */
    boolean delete(Integer id);

    /**
    * 更新
    */
    boolean  update(FuncPropertyDto dto);

    /**
    * 查询
    */
    FuncPropertyDto seletById(Integer id);

    /**
    * 分页查询
    */
    Pager<FuncPropertyDto> selectPage(FuncPropertyParam param);

    /**
    * 列表查询
    */
    List<FuncPropertyDto> selectList(FuncPropertyParam param);

}
