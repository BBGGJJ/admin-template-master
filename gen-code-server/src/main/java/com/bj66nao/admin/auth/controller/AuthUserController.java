package com.bj66nao.admin.auth.controller;

import com.alibaba.fastjson.JSON;
import com.bj66nao.admin.auth.dto.AuthUserDto;
import com.bj66nao.admin.auth.dto.UriTree;
import com.bj66nao.admin.auth.param.AuthUserParam;
import com.bj66nao.admin.auth.service.IAuthUserService;
import com.bj66nao.admin.bean.Result;
import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.cached.AppsourceCache;
import com.bj66nao.admin.sys.entity.AppsourceEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Objects;

/**
 * Created by  on '2020-05-19 06:07:49'.
 */
@RestController
@RequestMapping("/api/erp/boss/auth/authUser")
public class AuthUserController {

    private static Logger logger = LoggerFactory.getLogger(AuthUserController.class);

    private IAuthUserService authUserService;

    private AppsourceCache appsourceCache;

    public AuthUserController(IAuthUserService authUserService, AppsourceCache appsourceCache) {
        this.authUserService = authUserService;
        this.appsourceCache = appsourceCache;
    }

    /**
     * 新增
     */
    @RequestMapping("/save.do")
    @ResponseBody
    public Object save(@RequestBody AuthUserDto param) {
        Integer appsourceId = param.getAppsourceId();
        Assert.isTrue(Objects.nonNull(appsourceId) || Objects.nonNull(param.getAppsourceName()), " appsourceId is null");
        if (Objects.isNull(appsourceId)) {
            AppsourceEntity appsourceEntity = appsourceCache.getByCode(param.getAppsourceName());
            Assert.notNull(appsourceEntity,"appsource is null");
            appsourceId = appsourceEntity.getId();
        }
        Assert.notNull(param.getUserId(), " userId is null");
        param.setAppsourceId(appsourceId);
        boolean success = authUserService.insert(param);
        return Result.success(success);
    }

    /**
     * 删除
     */
    @RequestMapping("/delete.do")
    @ResponseBody
    public Object delete(Integer id) {
        Assert.notNull(id, " id is null");
        boolean success = authUserService.delete(id);
        return Result.success(success);
    }

    /**
     * 更新
     */
    @RequestMapping("/update.do")
    @ResponseBody
    public Object update(@RequestBody AuthUserDto dto) {
        Assert.notNull(dto.getId(), " id is null");
        boolean success = authUserService.update(dto);
        return Result.success(success);
    }

    /**
     * 更新
     */
    @RequestMapping("/updateUserRole.do")
    @ResponseBody
    public Object updateUserRole(@RequestBody AuthUserDto dto) {
        Assert.notNull(dto.getId(), " id is null");
        boolean success = authUserService.updateUserRole(dto);
        return Result.success(success);
    }


    /**
     * Load查询
     */
    @RequestMapping("/detail.do")
    @ResponseBody
    public Object detail(Integer id) {
        Assert.notNull(id, " id is null");
        AuthUserDto dto = authUserService.seletById(id);
        return Result.success(dto);
    }

    /**
     * 分页查询
     */
    @RequestMapping("/pageList.do")
    @ResponseBody
    public Object pageList(@RequestBody AuthUserParam param) {
        Pager<AuthUserDto> page = authUserService.selectPage(param);
        return Result.success(page);
    }

    /**
     * 分页查询
     */
    @RequestMapping("/queryUriTree.do")
    @ResponseBody
    public Object queryTree(HttpServletRequest request, @RequestBody AuthUserParam param) {
        Assert.hasLength(param.getAppName(), "app name is null");
        String userInfo = request.getHeader("curr_user");
        Assert.hasLength(userInfo, "curr_user is null");
        UserSecret userSecret = JSON.parseObject(userInfo, UserSecret.class);
        logger.info(userInfo);
        logger.info("userId", userSecret.getId());
        param.setUserId(userSecret.getId());
        List<UriTree> uriTrees = authUserService.queryUriTree(param);
        return Result.success(uriTrees);
    }

}