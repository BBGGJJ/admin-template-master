package com.bj66nao.admin.sys.enums;

/**
 * Created by EDZ on 2020/9/15.
 */
public enum OperatorTypeEnum {

    ADD(1, "新增"), UPDATE(2, "修改"), DELETE(3, "刪除"), SELECT(4, "查詢");

    private int code;
    private String desc;

    OperatorTypeEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public static OperatorTypeEnum ofCode(int code) {
        OperatorTypeEnum[] values = values();
        for (OperatorTypeEnum typeEnum : values) {
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
