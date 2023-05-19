package com.bj66nao.admin.gencode.generator;

import com.bj66nao.admin.gencode.param.GenParam;

import java.io.InputStream;
import java.util.zip.ZipOutputStream;

/**
 * Created by peng.liu11 on 2019/6/5.
 */
public interface IGenerator {

    void execute(InputStream templateFileInputStream, GenParam param, String dirName, ZipOutputStream zipOutputStream) throws Exception;

}
