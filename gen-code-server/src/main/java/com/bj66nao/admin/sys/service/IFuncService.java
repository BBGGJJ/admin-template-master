package com.bj66nao.admin.sys.service;

import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.param.FuncParam;
import com.bj66nao.admin.sys.dto.FuncDto;
import com.bj66nao.admin.sys.dto.FuncVo;

import java.util.List;

/**
 * 功能管理
 * <p>
 * Created by  on '2020-08-07 15:58:33'.
 */
public interface IFuncService {

    /**
     * 新增
     */
    boolean insert(FuncDto dto);

    /**
     * 删除
     */
    boolean delete(Integer id);

    /**
     * 更新
     */
    boolean update(FuncDto dto);

    /**
     * 查询
     */
    FuncDto seletById(Integer id);

    /**
     * 分页查询
     */
    Pager<FuncDto> selectPage(FuncParam param);

    /**
     * 列表查询
     */
    List<FuncDto> selectList(FuncParam param);

    FuncVo getVoByFuncCode(String funcCode);

}
