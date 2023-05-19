package com.bj66nao.admin.sys.service;

import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.dto.DictTableDto;
import com.bj66nao.admin.sys.param.DictTableParam;

import java.util.List;

/**
* 字典列表
*
* Created by  on '2020-05-15 06:39:55'.
*/
public interface IDictTableService {

    /**
    * 新增
    */
    boolean insert(DictTableDto dto);

    /**
    * 新增or更新： ON DUPLICATE KEY UPDATE
    */
    boolean insertOrUpdate(DictTableDto dto);

    /**
    * 批量新增： ON DUPLICATE KEY UPDATE
    */
    int insertBatch(List<DictTableDto> dtos);

    /**
    * 删除
    */
    public boolean delete(Integer id);

    /**
    * 更新
    */
    boolean  update(DictTableDto dto);

    /**
    * 查询
    */
    DictTableDto seletById(Integer id);

    /**
    * 分页查询
    */
    Pager<DictTableDto> selectPage(DictTableParam param);

    /**
    * 列表查询
    */
    List<DictTableDto> selectList(DictTableParam param);

}