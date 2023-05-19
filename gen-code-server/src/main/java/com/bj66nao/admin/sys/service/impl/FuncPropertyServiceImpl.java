package com.bj66nao.admin.sys.service.impl;
import java.util.Collections;
import java.util.List;

import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.sys.mapper.FuncPropertyMapper;
import com.bj66nao.admin.sys.param.FuncPropertyParam;
import com.bj66nao.admin.sys.service.IFuncPropertyService;
import org.apache.commons.collections4.CollectionUtils;
import com.bj66nao.admin.sys.adapter.FuncPropertyAdapter;
import com.bj66nao.admin.sys.dto.FuncPropertyDto;
import com.bj66nao.admin.sys.entity.FuncPropertyEntity;
import org.springframework.stereotype.Service;


/**
* 功能属性配置
*
* Created by  '2020-08-07 15:58:33'.
*/
@Service
public class FuncPropertyServiceImpl implements IFuncPropertyService {

	private FuncPropertyMapper funcPropertyMapper;

	public  FuncPropertyServiceImpl(FuncPropertyMapper funcPropertyMapper){
		this.funcPropertyMapper=funcPropertyMapper;
	}

    @Override
	public boolean insert(FuncPropertyDto dto){
		FuncPropertyEntity entity = FuncPropertyAdapter.adapterDto(dto);
		return funcPropertyMapper.insertSelective(entity) > 0;
    }

    @Override
	public boolean insertOrUpdate(FuncPropertyDto dto){
		FuncPropertyEntity entity = FuncPropertyAdapter.adapterDto(dto);
		return funcPropertyMapper.insertOrUpdate(entity) > 0;
	}

    @Override
	public int insertBatch(List<FuncPropertyDto> dtos){
		List<FuncPropertyEntity> entitys = FuncPropertyAdapter.adapterDto(dtos);
		return funcPropertyMapper.insertBatch(entitys);
    }

	/**
	* 删除
	*/
    @Override
	public boolean delete(Integer id){
		return funcPropertyMapper.deleteByPrimaryKey(id) > 0;
	}

	/**
	* 更新
	*/
    @Override
	public boolean update(FuncPropertyDto dto){
		FuncPropertyEntity entity = FuncPropertyAdapter.adapterDto(dto);
		return funcPropertyMapper.updateByPrimaryKeySelective(entity) > 0;
	}

	/**
	* 查询
	*/
    @Override
	public FuncPropertyDto seletById(Integer id){
		FuncPropertyEntity entity = funcPropertyMapper.selectByPrimaryKey(id);
		if(entity ==null){
        	return null;
		}
		return FuncPropertyAdapter.adapterEntity(entity);
	}

	/**
	* 分页查询
	*/
    @Override
	public Pager<FuncPropertyDto> selectPage(FuncPropertyParam param){
        long count = funcPropertyMapper.countByParam(param);
		List<FuncPropertyDto> list = Collections.EMPTY_LIST;
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
    public List<FuncPropertyDto> selectList(FuncPropertyParam param){
        List<FuncPropertyEntity> entitys = funcPropertyMapper.selectByParam(param);
        if(CollectionUtils.isNotEmpty(entitys)){
            return FuncPropertyAdapter.adapterEntity(entitys);
        }
		return Collections.EMPTY_LIST;
	}
}
