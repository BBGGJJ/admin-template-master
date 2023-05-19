package com.bj66nao.admin.sys.service.impl;

import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.adapter.DictTableAdapter;
import com.bj66nao.admin.sys.entity.DictTableEntity;
import com.bj66nao.admin.sys.mapper.DictTableMapper;
import com.bj66nao.admin.sys.param.DictTableParam;
import com.bj66nao.admin.sys.service.IDictTableService;
import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.dto.DictTableDto;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.Collections;
import java.util.List;


/**
* 字典列表
*
* Created by  '2020-05-15 06:39:55'.
*/
@Service
public class DictTableServiceImpl implements IDictTableService {

	private DictTableMapper dictTableMapper;

	private DictTableServiceImpl(DictTableMapper dictTableMapper){
		this.dictTableMapper=dictTableMapper;
	}

	/**
	* 新增
	*/
    @Override
	public boolean insert(DictTableDto dto){
		DictTableEntity entity = DictTableAdapter.adapterDto(dto);
		DictTableEntity dictTableEntity =dictTableMapper.selectByCode(dto.getCode());
		Assert.isNull(dictTableEntity,"字典编码已存在！");
		return dictTableMapper.insertSelective(entity) > 0;
    }

	/**
	* 新增or更新： ON DUPLICATE KEY UPDATE
	*/
    @Override
	public boolean insertOrUpdate(DictTableDto dto){
		DictTableEntity entity = DictTableAdapter.adapterDto(dto);
		return dictTableMapper.insertOrUpdate(entity) > 0;
	}

	/**
	* 批量新增： ON DUPLICATE KEY UPDATE
	*/
    @Override
	public int insertBatch(List<DictTableDto> dtos){
		List<DictTableEntity> entitys = DictTableAdapter.adapterDto(dtos);
		return dictTableMapper.insertBatch(entitys);
    }

	/**
	* 删除
	*/
    @Override
	public boolean delete(Integer id){
		return dictTableMapper.deleteByPrimaryKey(id) > 0;
	}

	/**
	* 更新
	*/
    @Override
	public boolean update(DictTableDto dto){
		DictTableEntity entity = DictTableAdapter.adapterDto(dto);
		return dictTableMapper.updateByPrimaryKeySelective(entity) > 0;
	}

	/**
	* 查询
	*/
    @Override
	public DictTableDto seletById(Integer id){
		DictTableEntity entity = dictTableMapper.selectByPrimaryKey(id);
		if(entity ==null){
        	return null;
		}
		return DictTableAdapter.adapterEntity(entity);
	}

	/**
	* 分页查询
	*/
    @Override
	public Pager<DictTableDto> selectPage(DictTableParam param){
        long count = dictTableMapper.countByParam(param);
		List<DictTableDto> list = Collections.EMPTY_LIST;
        if(count == 0){
			return  Pager.builder(list).current(param.getPage()).total(count).create();
		}
		list = selectList(param);
        return Pager.builder(list).current(param.getPage()).total(count).create();
    }

    /**
    * 列表查询
    */
    @Override
    public List<DictTableDto> selectList(DictTableParam param){
        List<DictTableEntity> entitys = dictTableMapper.selectByParam(param);
        if(CollectionUtils.isNotEmpty(entitys)){
            return DictTableAdapter.adapterEntity(entitys);
        }
		return Collections.EMPTY_LIST;
	}
}