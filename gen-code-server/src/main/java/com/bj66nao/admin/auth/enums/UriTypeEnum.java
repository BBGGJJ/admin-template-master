package com.bj66nao.admin.auth.enums;

/**
 * Created by EDZ on 2020/5/23.
 */
public enum UriTypeEnum {
    VIEW(1, "前端页面"), SERVER(2, "后端服务"), FUNC(3, "通用功能");


    private int code;
    private String desc;

    UriTypeEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public static UriTypeEnum ofCode(int code) {
        UriTypeEnum[] values = values();
        for (UriTypeEnum typeEnum : values) {
            if (typeEnum.getCode() == code) {
                return typeEnum;
            }
        }
        return null;
    }

    public int getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }
}
