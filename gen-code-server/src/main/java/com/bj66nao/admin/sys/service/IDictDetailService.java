package com.bj66nao.admin.sys.service;

import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.dto.DictDetailDto;
import com.bj66nao.admin.sys.param.DictDetailParam;

import java.util.List;

/**
* 字典详情管理
*
* Created by  on '2020-05-15 06:39:55'.
*/
public interface IDictDetailService {

    /**
    * 新增
    */
    boolean insert(DictDetailDto dto);

    /**
    * 新增or更新： ON DUPLICATE KEY UPDATE
    */
    boolean insertOrUpdate(DictDetailDto dto);

    /**
    * 批量新增： ON DUPLICATE KEY UPDATE
    */
    int insertBatch(List<DictDetailDto> dtos);

    /**
    * 删除
    */
     boolean delete(Integer id);

    /**
     * 根据字典类型查询数据
     */
    List<DictDetailDto> queryAllByType(String dictType);

    List<DictDetailDto> queryValidByType(String dictType);


    /**
    * 更新
    */
    boolean  update(DictDetailDto dto);

    /**
    * 查询
    */
    DictDetailDto seletById(Integer id);

    /**
    * 分页查询
    */
    Pager<DictDetailDto> selectPage(DictDetailParam param);

    /**
    * 列表查询
    */
    List<DictDetailDto> selectList(DictDetailParam param);

}