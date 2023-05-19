package com.bj66nao.admin.sys.controller;

import com.bj66nao.admin.gencode.model.Result;
import com.bj66nao.admin.sys.dto.FuncDataDetailVo;
import com.bj66nao.admin.sys.param.FuncDataParam;
import com.bj66nao.admin.sys.service.IFuncStroeService;
import com.google.common.collect.Lists;
import com.bj66nao.admin.sys.dto.FuncDataVo;
import org.springframework.util.Assert;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * Created by  on '2020-08-07 15:58:33'.
 */
@RestController
@RequestMapping("/api/sys/func/store")
public  class FuncStoreController {

    private IFuncStroeService funcStroeService;

    public FuncStoreController(IFuncStroeService funcStroeService) {
        this.funcStroeService = funcStroeService;
    }

    /**
     * 新增
     */
    @RequestMapping("/{funcCode}/save.do")
    @ResponseBody
    public Object save(@PathVariable String funcCode, @RequestBody Map<String, Object> param) {
        Assert.notNull(funcCode, "funcCode is null");
        Boolean success = funcStroeService.save(funcCode, param);
        return Result.success(success);
    }

    /**
     * 删除
     */
    @RequestMapping("/{funcCode}/delete/{key}")
    @ResponseBody
    public Object delete(@PathVariable String funcCode, @PathVariable Object key) {
        Assert.notNull(key, " id is null");
        Assert.notNull(funcCode, "funcCode is null");
        Boolean success = funcStroeService.delete(funcCode, key);
        return Result.success(success);
    }

    /**
     * 更新
     */
    @RequestMapping("/{funcCode}/update.do")
    @ResponseBody
    public Object update(@PathVariable String funcCode, @RequestBody Map<String, Object> param) {
        Assert.notNull(funcCode, "funcCode is null");
        Assert.notNull(param, "param is null");
        Boolean success = funcStroeService.update(funcCode, param);
        return Result.success(success);
    }

    /**
     * Load查询
     */
    @RequestMapping("/{funcCode}/detail/{key}")
    @ResponseBody
    public Object detail(@PathVariable String funcCode, @PathVariable Object key) {
        Assert.notNull(key, " id is null");
        Assert.notNull(funcCode, "funcCode is null");
        FuncDataDetailVo dto = funcStroeService.find(funcCode, key);
        return Result.success(dto);
    }

    /**
     * 分页查询
     */
    @RequestMapping("/{funcCode}/pageList.do")
    @ResponseBody
    public Object pageList(@PathVariable String funcCode, @RequestBody FuncDataParam param) {
        Assert.notNull(funcCode, "funcCode is null");
        Assert.notNull(param, "param is null");

        HashMap<String, Object> data = param.getData();
        if (!CollectionUtils.isEmpty(data)) {
            Iterator<String> iterable = Lists.newArrayList(data.keySet()).iterator();
            while (iterable.hasNext()) {
                String key = iterable.next();
                Object value = data.get(key);
                if (Objects.isNull(value) || StringUtils.isEmpty(String.valueOf(value))) {
                    data.remove(key);
                }
            }
        }
        FuncDataVo page = funcStroeService.selectPage(funcCode, param);
        return Result.success(page);
    }
}
