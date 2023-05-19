package com.bj66nao.admin.auth.controller;

import com.bj66nao.admin.auth.dto.UriDto;
import com.bj66nao.admin.auth.dto.UriTree;
import com.bj66nao.admin.auth.enums.UriTypeEnum;
import com.bj66nao.admin.auth.param.UriParam;
import com.bj66nao.admin.auth.service.IUriService;
import com.bj66nao.admin.bean.Result;
import com.bj66nao.admin.bean.page.Pager;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.List;

/**
 * Created by  on '2020-05-15 06:39:55'.
 */
@RestController
@RequestMapping("/api/erp/boss/auth/uri")
public class UriController {

    @Resource
    private IUriService uriService;

    /**
     * 新增
     */
    @RequestMapping("/save.do")
    @ResponseBody
    public Object save(@RequestBody UriDto param) {
        Assert.hasLength(param.getPath(), "path is null");
        Assert.hasLength(param.getUriName(), "path is null");
        Assert.notNull(UriTypeEnum.ofCode(param.getType()), "type is error");
        Assert.notNull(param.getAppCode(), "appCode is null");
        boolean success = uriService.insert(param);
        return Result.success(success);
    }

    /**
     * 新增
     */
    @RequestMapping("/saveOrReturenValue.do")
    @ResponseBody
    public Object saveOrReturenValue(@RequestBody UriDto param) {
        UriDto uriDto = uriService.saveOrReturenValue(param);
        return Result.success(uriDto);
    }

    /**
     * 删除
     */
    @RequestMapping("/delete.do")
    @ResponseBody
    public Object delete(Integer id) {
        boolean success = uriService.delete(id);
        return Result.success(success);
    }

    /**
     * 更新
     */
    @RequestMapping("/update.do")
    @ResponseBody
    public Object update(@RequestBody UriDto dto) {
        boolean success = uriService.update(dto);
        return Result.success(success);
    }
    /**
     * 更新
     */
    @RequestMapping("/updateIndex.do")
    @ResponseBody
    public Object updateIndex(@RequestBody List<UriDto> dtos) {
        int success = uriService.updateIndex(dtos);
        return Result.success(success);
    }
    /**
     * Load查询
     */
    @RequestMapping("/detail.do")
    @ResponseBody
    public Object detail(Integer id) {
        UriDto dto = uriService.seletById(id);
        return Result.success(dto);
    }

    /**
     * 分页查询
     */
    @RequestMapping("/pageList.do")
    @ResponseBody
    public Object pageList(@RequestBody UriParam param) {
        Pager<UriDto> page = uriService.selectPage(param);
        return Result.success(page);
    }

    /**
     * 分页查询
     */
    @RequestMapping("/queryTree.do")
    @ResponseBody
    public Object queryTree(@RequestBody UriParam param) {
        Assert.notNull(param.getAppCode(), "系统不能为空");
        List<UriTree> page = uriService.queryTree(param);
        return Result.success(page);
    }
}