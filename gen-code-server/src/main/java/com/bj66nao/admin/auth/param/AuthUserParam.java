package com.bj66nao.admin.auth.param;


import com.bj66nao.admin.bean.page.PageRequest;

/**
 * 权限管理用户表
 * <p>
 * Created by  on '2020-05-19 06:07:49'.
 */
public class AuthUserParam extends PageRequest {

    /**
     * 唯一主键
     */
    private Integer id;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 系统ID
     */
    private Integer appsourceId;


    private String appName;

    /**
     * 状态
     */
    private Boolean status;


    public static AuthUserParam of(Long userId, Integer appsourceId) {
        AuthUserParam authUserParam = new AuthUserParam();
        authUserParam.setAppsourceId(appsourceId);
        authUserParam.setUserId(userId);
        return authUserParam;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getAppsourceId() {
        return appsourceId;
    }

    public void setAppsourceId(Integer appsourceId) {
        this.appsourceId = appsourceId;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }
}