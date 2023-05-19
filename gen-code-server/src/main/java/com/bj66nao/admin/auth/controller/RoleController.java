package com.bj66nao.admin.auth.controller;

import com.bj66nao.admin.auth.dto.RoleDto;
import com.bj66nao.admin.auth.param.RoleParam;
import com.bj66nao.admin.auth.service.IRoleService;
import com.bj66nao.admin.bean.Result;
import com.bj66nao.admin.bean.page.Pager;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created by  on '2020-05-15 06:39:55'.
 */
@RestController
@RequestMapping("/api/erp/boss/auth/role")
public class RoleController {

    @Resource
    private IRoleService roleService;

    /**
     * 新增
     */
    @RequestMapping("/save.do")
    @ResponseBody
    public Object save(@RequestBody RoleDto param) {
        Assert.hasLength(param.getRoleName(), "角色名称不能为空");
        Assert.notNull(param.getAppCode(), "关联系统不能为空");
        boolean success = roleService.insert(param);
        return Result.success(success);
    }

    /**
     * 删除
     */
    @RequestMapping("/delete.do")
    @ResponseBody
    public Object delete(Integer id) {
        boolean success = roleService.delete(id);
        return Result.success(success);
    }

    /**
     * 更新
     */
    @RequestMapping("/update.do")
    @ResponseBody
    public Object update(@RequestBody RoleDto dto) {
        boolean success = roleService.update(dto);
        return Result.success(success);
    }

    /**
     * 更新
     */
    @RequestMapping("/updateRoleUris.do")
    @ResponseBody
    public Object updateRoleUris(@RequestBody RoleDto dto) {
        Assert.notNull(dto.getId(), "请求异常，缺少必要参数");
        Assert.notNull(dto.getUriIds(), "请求异常，缺少必要参数");
        boolean success = roleService.updateRoleUris(dto);
        return Result.success(success);
    }


    /**
     * Load查询
     */
    @RequestMapping("/detail.do")
    @ResponseBody
    public Object detail(Integer id) {
        RoleDto dto = roleService.seletById(id);
        return Result.success(dto);
    }

    /**
     * 分页查询
     */
    @RequestMapping("/pageList.do")
    @ResponseBody
    public Object pageList(@RequestBody RoleParam param) {
        Pager<RoleDto> page = roleService.selectPage(param);
        return Result.success(page);
    }
}