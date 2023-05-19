package com.bj66nao.admin.sys.service;

import com.bj66nao.admin.sys.dto.FuncDataDetailVo;
import com.bj66nao.admin.sys.param.FuncDataParam;
import com.bj66nao.admin.sys.param.SuggestParam;
import com.bj66nao.admin.sys.dto.FuncDataVo;

import java.util.List;
import java.util.Map;

/**
 * 功能管理
 * <p>
 * Created by  on '2020-08-07 15:58:33'.
 */
public interface IFuncStroeService {

    /**
     * 新增
     */
    boolean save(String funcCode, Map<String, Object> para);

    /**
     * 删除
     */
    boolean delete(String funcCode, Object id);

    /**
     * 更新
     */
    boolean update(String funcCode, Map<String, Object> para);

    /**
     * 查询
     */
    FuncDataDetailVo find(String funcCode, Object id);

    /**
     * 分页查询
     */
    FuncDataVo selectPage(String funcCode, FuncDataParam para);

    List<Map<String, Object>> suggestJoinTable(String funcCode, String propCode, SuggestParam param);

}
