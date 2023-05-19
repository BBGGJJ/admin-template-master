package com.bj66nao.admin.auth.dto;

import lombok.Data;

import java.util.List;

/**
 * @author: xinglongge
 * @date: 2020/6/8 13:54
 * @description:
 */
@Data
public class Address {

    private int parentCode;
    private Integer code;
    private String name;
    private List<Address> children;
}
