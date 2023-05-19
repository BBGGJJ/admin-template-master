package com.bj66nao.admin.gencode.model;

import java.io.Serializable;

/**
 * common return
 *
 * @author xuxueli 2015-12-4 16:32:31
 */
public class Result<T> implements Serializable {
    public static final long serialVersionUID = 42L;

    public static final int SUCCESS_CODE = 0;
    public static final int FAIL_CODE = -1024;
    private int code;
    private String msg;
    private T data;

    private Result(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    private Result(int code, T data) {
        this.code = code;
        this.data = data;
    }

    public static <T> Result success(T data) {
        return new Result(SUCCESS_CODE, data);
    }

    public static <T> Result error(int code, String msg) {
        return new Result(code, msg);
    }

    public static <T> Result error(String msg) {
        return new Result(FAIL_CODE, msg);
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}
