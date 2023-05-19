package com.bj66nao.admin.sys.controller;
import com.bj66nao.admin.bean.page.Pager;
import com.bj66nao.admin.gencode.model.Result;
import com.bj66nao.admin.sys.dto.DatasourceDto;
import com.bj66nao.admin.sys.param.DatasourceParam;
import com.bj66nao.admin.sys.service.IDatasourceService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by  on '2020-06-09 14:31:37'.
 */
@RestController
@RequestMapping("/api/v1/admin/sys/datasource")
public class DatasourceController {

    @Resource
    private IDatasourceService datasourceService;

    /**
     * 新增
     */
    @RequestMapping("/save.do")
    @ResponseBody
    public Object save(@RequestBody DatasourceDto param) {
        boolean success = datasourceService.insert(param);
        return Result.success(success);
    }

    /**
     * 删除
     */
    @RequestMapping("/delete.do")
    @ResponseBody
    public Object delete(Integer id) {
        boolean success = datasourceService.delete(id);
        return Result.success(success);
    }

    /**
     * 更新
     */
    @RequestMapping("/update.do")
    @ResponseBody
    public Object update(@RequestBody DatasourceDto dto) {
        boolean success = datasourceService.update(dto);
        return Result.success(success);
    }

    /**
     * Load查询
     */
    @RequestMapping("/detail.do")
    @ResponseBody
    public Object detail(Integer id) {
        DatasourceDto dto = datasourceService.seletById(id);
        return Result.success(dto);
    }

    /**
     * 分页查询
     */
    @RequestMapping("/pageList.do")
    @ResponseBody
    public Object pageList(@RequestBody DatasourceParam param) {
        Pager<DatasourceDto> page = datasourceService.selectPage(param);
        return Result.success(page);
    }

    @RequestMapping("/list.do")
    @ResponseBody
    public Object suggest(@RequestBody DatasourceParam param) {
        List<DatasourceDto> page = datasourceService.selectList(param);
        return Result.success(page);
    }
}