package com.bj66nao.admin.sys.controller;

import com.bj66nao.admin.gencode.model.Result;
import com.bj66nao.admin.sys.param.SuggestParam;
import com.bj66nao.admin.sys.service.IFuncService;
import com.bj66nao.admin.sys.dto.FuncVo;
import com.bj66nao.admin.sys.service.IFuncStroeService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by  on '2020-08-07 15:58:33'.
 */
@RestController
@RequestMapping("/api/sys/func/config")
public class FuncConfigController {

    @Resource
    private IFuncService funcService;

    @Resource
    private IFuncStroeService funcStroeService;

        /**
     * 查询属性
     */
    @RequestMapping("/{funcCode}/propertys.do")
    @ResponseBody
    public Object propertys(@PathVariable String funcCode) {
        FuncVo funcVo = funcService.getVoByFuncCode(funcCode);
        return Result.success(funcVo);
    }

        /**
     * 查询属性
     */
    @RequestMapping("/{funcCode}/{propCode}/suggest.do")
    @ResponseBody
    public Object suggest(@PathVariable String funcCode, @PathVariable String propCode, @RequestBody SuggestParam param) {
        List<Map<String, Object>> value = funcStroeService.suggestJoinTable(funcCode, propCode, param);
        return Result.success(value);
    }

}
