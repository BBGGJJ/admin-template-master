package com.bj66nao.admin.sys.controller;

import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.gencode.model.Result;
import com.bj66nao.admin.sys.param.FuncParam;
import com.bj66nao.admin.sys.service.IFuncService;
import com.bj66nao.admin.sys.dto.FuncDto;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created by  on '2020-08-07 15:58:33'.
 */
@RestController
@RequestMapping("/api/sys/func")
public class FuncController {

    @Resource
    private IFuncService funcService;

        /**
    * 新增
    */
    @RequestMapping("/save.do")
    @ResponseBody
    public Object save(@RequestBody FuncDto param) {
        Assert.notNull(param.getName(), " name is null");
        Assert.notNull(param.getCode(), " code is null");
        Assert.notNull(param.getTableName(), " tableName is null");
        Assert.notNull(param.getIsCreate(), " isCreate is null");
        Assert.notNull(param.getIsEdit(), " isEdit is null");
        Assert.notNull(param.getIsDetail(), " isDetail is null");
        Assert.notNull(param.getIsDelete(), " isDelete is null");
        boolean success = funcService.insert(param);
        return Result.success(success);
    }

        /**
    * 删除
    */
    @RequestMapping("/delete.do")
    @ResponseBody
    public Object delete(Integer id) {
        Assert.notNull(id, " id is null");
        boolean success = funcService.delete(id);
        return Result.success(success);
    }

    /**
     * 更新
     */
    @RequestMapping("/update.do")
    @ResponseBody
    public Object update(@RequestBody FuncDto dto) {
        Assert.notNull(dto.getId(), " id is null");
        boolean success = funcService.update(dto);
        return Result.success(success);
    }

    /**
     * Load查询
     */
    @RequestMapping("/detail.do")
    @ResponseBody
    public Object detail(Integer id) {
        Assert.notNull(id, " id is null");
        FuncDto dto = funcService.seletById(id);
        return Result.success(dto);
    }

    /**
     * 分页查询
     */
    @RequestMapping("/pageList.do")
    @ResponseBody
    public Object pageList(@RequestBody FuncParam param) {
        Pager<FuncDto> page = funcService.selectPage(param);
        return Result.success(page);
    }
}
