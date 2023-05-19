package com.bj66nao.admin.sys.controller;


import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.gencode.model.Result;
import com.bj66nao.admin.sys.param.FuncPropertyParam;
import com.bj66nao.admin.sys.service.IFuncPropertyService;
import com.bj66nao.admin.sys.dto.FuncPropertyDto;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
*
* Created by  on '2020-08-07 15:58:33'.
*/
@RestController
@RequestMapping("/api/sys/funcProperty")
public  class FuncPropertyController {

    @Resource
    private IFuncPropertyService funcPropertyService;

    /**
    * 新增
    */
    @RequestMapping("/save.do")
    @ResponseBody
    public Object save(@RequestBody FuncPropertyDto param){
        Assert.notNull(param.getFuncId()," funcId is null");
        Assert.notNull(param.getPropName()," propName is null");
        Assert.notNull(param.getPropKey()," propKey is null");
        Assert.notNull(param.getColumnName()," columnName is null");
        Assert.notNull(param.getRequired()," required is null");
        boolean success = funcPropertyService.insert(param);
        return Result.success(success);
    }

    /**
    * 删除
    */
    @RequestMapping("/delete.do")
    @ResponseBody
    public Object delete(Integer id){
        Assert.notNull(id," id is null");
        boolean success = funcPropertyService.delete(id);
        return Result.success(success);
    }

    /**
    * 更新
    */
    @RequestMapping("/update.do")
    @ResponseBody
    public Object update(@RequestBody FuncPropertyDto dto){
        Assert.notNull(dto.getId()," id is null");
        boolean success = funcPropertyService.update(dto);
        return Result.success(success);
    }

    /**
    * Load查询
    */
    @RequestMapping("/detail.do")
    @ResponseBody
    public Object detail(Integer id){
        Assert.notNull(id," id is null");
        FuncPropertyDto dto = funcPropertyService.seletById(id);
         return Result.success(dto);
    }

    /**
    * 分页查询
    */
    @RequestMapping("/pageList.do")
    @ResponseBody
    public Object pageList(@RequestBody FuncPropertyParam param) {
        Pager<FuncPropertyDto> page = funcPropertyService.selectPage(param);
        return Result.success(page);
    }
}
