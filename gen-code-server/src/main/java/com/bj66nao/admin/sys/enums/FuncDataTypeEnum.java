package com.bj66nao.admin.sys.enums;

/**
 * Created by EDZ on 2020/8/14.
 */
public enum FuncDataTypeEnum {
    // funcDataTypeEnum: new Enum().add(0, '普通值', 0).add(1, '枚举，', 1).add(2, '关联表', 2).add(3, '字典表数据', 3),
    TEXT(0, "普通值"), ENUM(1, "枚举"), TABLE(2, "关联表"), DICT(3, "字典表数据"), REMOTE(4, "后端服务");


    private int code;
    private String desc;

    FuncDataTypeEnum(int code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public static FuncDataTypeEnum ofCode(int code) {
        FuncDataTypeEnum[] values = values();
        for (FuncDataTypeEnum typeEnum : values) {
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
