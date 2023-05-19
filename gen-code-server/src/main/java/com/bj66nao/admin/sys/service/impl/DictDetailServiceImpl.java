package com.bj66nao.admin.sys.service.impl;

import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.entity.DictDetailEntity;
import com.bj66nao.admin.sys.entity.DictTableEntity;
import com.bj66nao.admin.sys.mapper.DictTableMapper;
import com.google.common.collect.Lists;
import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.adapter.DictDetailAdapter;
import com.bj66nao.admin.sys.dto.DictDetailDto;
import com.bj66nao.admin.sys.mapper.DictDetailMapper;
import com.bj66nao.admin.sys.param.DictDetailParam;
import com.bj66nao.admin.sys.service.IDictDetailService;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


/**
 * 字典详情管理
 * <p>
 * Created by  '2020-05-15 06:39:55'.
 * @author liupeng
 */
@Service
public class DictDetailServiceImpl implements IDictDetailService {

    private DictDetailMapper dictDetailMapper;

    private DictTableMapper dictTableMapper;

    public DictDetailServiceImpl(DictDetailMapper dictDetailMapper, DictTableMapper dictTableMapper) {
        this.dictDetailMapper = dictDetailMapper;
        this.dictTableMapper = dictTableMapper;
    }

    /**
     * 新增
     */
    @Override
    public boolean insert(DictDetailDto dto) {
        DictDetailEntity entity = DictDetailAdapter.adapterDto(dto);
        return dictDetailMapper.insertSelective(entity) > 0;
    }

    /**
     * 新增or更新： ON DUPLICATE KEY UPDATE
     */
    @Override
    public boolean insertOrUpdate(DictDetailDto dto) {
        DictDetailEntity entity = DictDetailAdapter.adapterDto(dto);
        return dictDetailMapper.insertOrUpdate(entity) > 0;
    }

    /**
     * 批量新增： ON DUPLICATE KEY UPDATE
     */
    @Override
    public int insertBatch(List<DictDetailDto> dtos) {
        List<DictDetailEntity> entitys = DictDetailAdapter.adapterDto(dtos);
        return dictDetailMapper.insertBatch(entitys);
    }

    /**
     * 删除
     */
    @Override
    public boolean delete(Integer id) {
        return dictDetailMapper.deleteByPrimaryKey(id) > 0;
    }

    /**
     * 更新
     */
    @Override
    public boolean update(DictDetailDto dto) {
        DictDetailEntity entity = DictDetailAdapter.adapterDto(dto);
        return dictDetailMapper.updateByPrimaryKeySelective(entity) > 0;
    }

    /**
     * 查询
     */
    @Override
    public DictDetailDto seletById(Integer id) {
        DictDetailEntity entity = dictDetailMapper.selectByPrimaryKey(id);
        if (entity == null) {
            return null;
        }
        DictTableEntity dictTableEntity = dictTableMapper.selectByPrimaryKey(entity.getTableId());
        return DictDetailAdapter.adapterEntity(entity, dictTableEntity);
    }

    @Override
    public List<DictDetailDto> queryAllByType(String dictType) {
        DictTableEntity dictTableEntity = dictTableMapper.selectByCode(dictType);
        Assert.notNull(dictTableEntity, "字典类型不存在");
        Assert.isTrue(dictTableEntity.getStatus(), "字典类型已失效");
        DictDetailParam param = DictDetailParam.ofTablieId(dictTableEntity.getId());
        List<DictDetailEntity> entitys = dictDetailMapper.selectByParam(param);
        return DictDetailAdapter.adapterEntity(entitys, dictTableEntity);
    }

    @Override
    public List<DictDetailDto> queryValidByType(String dictType) {
        DictTableEntity dictTableEntity = dictTableMapper.selectByCode(dictType);
        Assert.notNull(dictTableEntity, "字典类型不存在");
        Assert.isTrue(dictTableEntity.getStatus(), "字典类型已失效");
        DictDetailParam param = DictDetailParam.ofTablieId(dictTableEntity.getId());
        param.setValid(Boolean.TRUE);
        List<DictDetailEntity> entitys = dictDetailMapper.selectByParam(param);
        return DictDetailAdapter.adapterEntity(entitys, dictTableEntity);
    }

    /**
     * 分页查询
     */
    @Override
    public Pager<DictDetailDto> selectPage(DictDetailParam param) {
        long count = dictDetailMapper.countByParam(param);
        List<DictDetailDto> list = Collections.EMPTY_LIST;
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
    public List<DictDetailDto> selectList(DictDetailParam param) {
        List<DictDetailEntity> entitys = dictDetailMapper.selectByParam(param);
        if (CollectionUtils.isNotEmpty(entitys)) {
            List<Integer> tableIds = Lists.transform(entitys, DictDetailEntity::getTableId);
            List<DictTableEntity> dictTableEntities = dictTableMapper.selectByPrimaryKeys(tableIds);
            Map<Integer, DictTableEntity> tableEntityMap = dictTableEntities.stream().collect(Collectors.toMap(v -> v.getId(), v -> v));
            return DictDetailAdapter.adapterEntity(entitys, tableEntityMap);
        }
        return Collections.EMPTY_LIST;
    }
}