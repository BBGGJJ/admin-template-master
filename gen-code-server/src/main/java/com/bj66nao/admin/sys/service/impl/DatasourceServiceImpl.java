package com.bj66nao.admin.sys.service.impl;

import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.adapter.DatasourceAdapter;
import com.bj66nao.admin.sys.dto.DatasourceDto;
import com.bj66nao.admin.sys.entity.DatasourceEntity;
import com.bj66nao.admin.sys.mapper.DatasourceMapper;
import com.bj66nao.admin.sys.param.DatasourceParam;
import com.bj66nao.admin.sys.service.IDatasourceService;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Collections;
import java.util.List;


/**
 * 数据源配置
 * <p>
 * Created by  '2020-06-09 14:31:37'.
 */
@Service
public class DatasourceServiceImpl implements IDatasourceService {

    private DatasourceMapper datasourceMapper;


    @Value("${spring.application.name}")
    private String applicationName;

    public DatasourceServiceImpl(DatasourceMapper datasourceMapper) {
        this.datasourceMapper = datasourceMapper;
    }

    /**
     * 新增
     */
    @Override
    public boolean insert(DatasourceDto dto) {
        DatasourceEntity entity = DatasourceAdapter.adapterDto(dto);
        int len = datasourceMapper.insertSelective(entity);
        return len > 0;
    }


    /**
     * 删除
     */
    @Override
    public boolean delete(Integer id) {
        DatasourceEntity oldEntity = datasourceMapper.selectByPrimaryKey(id);
        Assert.notNull(oldEntity, "数据不存在！");
        int len = datasourceMapper.deleteByPrimaryKey(id);
        return len > 0;
    }

    /**
     * 更新
     */
    @Override
    public boolean update(DatasourceDto dto) {
        DatasourceEntity oldEntity = datasourceMapper.selectByPrimaryKey(dto.getId());
        Assert.notNull(oldEntity, "数据不存在！");
        DatasourceEntity entity = DatasourceAdapter.adapterDto(dto);
        int len = datasourceMapper.updateByPrimaryKeySelective(entity);
        return len > 0;
    }

    /**
     * 查询
     */
    @Override
    public DatasourceDto seletById(Integer id) {
        DatasourceEntity entity = datasourceMapper.selectByPrimaryKey(id);
        if (entity == null) {
            return null;
        }
        return DatasourceAdapter.adapterEntity(entity);
    }

    /**
     * 分页查询
     */
    @Override
    public Pager<DatasourceDto> selectPage(DatasourceParam param) {
        long count = datasourceMapper.countByParam(param);
        List<DatasourceDto> list = Collections.EMPTY_LIST;
        if (count == 0) {
            return Pager.builder(list).current(param.getPage()).total(count).create();
        }
        list = selectList(param);
        return Pager.builder(list).current(param.getPage()).total(count).create();
    }

    /**
     * 列表查询
     */
    @Override
    public List<DatasourceDto> selectList(DatasourceParam param) {
        List<DatasourceEntity> entitys = datasourceMapper.selectByParam(param);
        if (CollectionUtils.isNotEmpty(entitys)) {
            return DatasourceAdapter.adapterEntity(entitys);
        }
        return Collections.EMPTY_LIST;
    }
}