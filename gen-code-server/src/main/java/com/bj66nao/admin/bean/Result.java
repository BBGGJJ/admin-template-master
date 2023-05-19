package com.bj66nao.admin.bean;

import java.io.Serializable;

/**
 * common return
 *
 * @author xuxueli 2015-12-4 16:32:31
 */
public class Result<T> implements Serializable {
    public static final long serialVersionUID = 42L;

    public static final int SUCCESS_CODE = 200;
    public static final int FAIL_CODE = -1024;
    public static final String STATUS_KEY = "code";
    public static final String MSG_KEY = "msg";
    public static final String ERROR_MSG = "服务器出错！";
    private int status;
    private String message;
    private T data;

    public Result() {

    }

    private Result(int code, String msg) {
        this.status = code;
        this.message = msg;
    }

    private Result(int code, T data) {
        this.status = code;
        this.data = data;
    }

    public Result(int status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public static <T> Result success(T data) {
        return new Result(SUCCESS_CODE, data);
    }

    public static <T> Result success(T data, String msg) {
        return new Result(SUCCESS_CODE, msg, data);
    }

    public static <T> Result error(int code, String msg) {
        return new Result(code, msg);
    }

    public static <T> Result error(String msg) {
        return new Result(FAIL_CODE, msg);
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}
