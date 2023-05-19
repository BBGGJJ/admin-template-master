package com.bj66nao.admin.sys.service;

import com.bj66nao.admin.sys.param.DatasourceParam;
import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.dto.DatasourceDto;

import java.util.List;

/**
 * 数据源配置
 * <p>
 * Created by  on '2020-06-09 14:31:37'.
 */
public interface IDatasourceService {

    /**
     * 新增
     */
    boolean insert(DatasourceDto dto);

    /**
     * 删除
     */
    boolean delete(Integer id);

    /**
     * 更新
     */
    boolean update(DatasourceDto dto);

    /**
     * 查询
     */
    DatasourceDto seletById(Integer id);

    /**
     * 分页查询
     */
    Pager<DatasourceDto> selectPage(DatasourceParam param);

    /**
     * 列表查询
     */
    List<DatasourceDto> selectList(DatasourceParam param);

}