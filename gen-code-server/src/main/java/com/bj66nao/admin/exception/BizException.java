package com.bj66nao.admin.exception;

/**
 * Created by EDZ on 2020/5/12.
 */
public class BizException extends RuntimeException {

    private int status;

    public BizException() {
    }

    public BizException(String message) {
        super(message);
    }

    public BizException(int status, String message) {
        super(message);
        this.status = status;
    }

    public BizException(String message, Throwable cause) {
        super(message, cause);
    }

    public BizException(Throwable cause) {
        super(cause);
    }

    public BizException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    public int getStatus() {
        return status;
    }
}
