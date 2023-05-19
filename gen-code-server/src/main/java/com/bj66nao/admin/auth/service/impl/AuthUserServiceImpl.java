package com.bj66nao.admin.auth.service.impl;

import com.bj66nao.admin.auth.mapper.AuthUserMapper;
import com.bj66nao.admin.auth.service.IAuthUserService;
import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.Assert;

import java.util.*;
import java.util.stream.Collectors;


/**
 * 权限管理用户表
 * <p>
 * Created by  '2020-05-19 06:07:49'.
 */
@Service("authUserService")
public class AuthUserServiceImpl implements IAuthUserService {

    private static Logger logger = LoggerFactory.getLogger(AuthUserServiceImpl.class);
    private static final int MAX_PAGE_SIZE = 2000;

    private AuthUserMapper authUserMapper;


    private AppsourceCache appsourceCache;

    private AppsourceMapper appsourceMapper;

    private SsoRemote ssoRemote;

    private UserRoleMapper userRoleMapper;

    private RoleUriMapper roleUriMapper;

    private RoleMapper  roleMapper;

    private UriCache uriCache;

    @Value("${spring.application.name}")
    private String applicationName;

    private OperatorLogService operatorLogService;

    private AntPathMatcher pathMatcher = new AntPathMatcher();

    public AuthUserServiceImpl(AuthUserMapper authUserMapper, RoleMapper  roleMapper, AppsourceCache appsourceCache, AppsourceMapper appsourceMapper, SsoRemote ssoRemote, UserRoleMapper userRoleMapper, RoleUriMapper roleUriMapper, UriCache uriCache, OperatorLogService operatorLogService) {
        this.authUserMapper = authUserMapper;
        this.appsourceCache = appsourceCache;
        this.appsourceMapper = appsourceMapper;
        this.ssoRemote = ssoRemote;
        this.userRoleMapper = userRoleMapper;
        this.roleUriMapper = roleUriMapper;
        this.uriCache = uriCache;
        this.operatorLogService = operatorLogService;
        this.roleMapper=roleMapper;
    }

    /**
     * 新增
     */
    @Override
    public boolean insert(AuthUserDto dto) {
        AuthUserEntity authUserEntity = Safes.first(authUserMapper.selectByParam(AuthUserParam.of(dto.getUserId(), dto.getAppsourceId())));
        if (Objects.isNull(authUserEntity)) {
            AuthUserEntity entity = AuthUserAdapter.adapterDto(dto);
            authUserMapper.insertSelective(entity);
        } else if (!authUserEntity.getStatus()) {
            authUserEntity.setStatus(true);
            authUserMapper.updateByPrimaryKeySelective(authUserEntity);
        }
        AppsourceEntity appsourceEntity = appsourceCache.getById(authUserEntity.getAppsourceId());
        operatorLogService.addOperatorLog(appsourceEntity != null ? appsourceEntity.getAppCode() : applicationName, OperatorLogService.BizType.AUTH_USER, OperatorTypeEnum.ADD, authUserEntity.getUserId() + "");
        return true;
    }

    @Override
    public boolean auth(String uri, String appCode, Long userId) {
        AppsourceEntity appsourceEntity = appsourceMapper.selectByCode(appCode);
        Assert.notNull(appsourceEntity, "appCode is not find");
        AuthUserEntity authUserEntity = authUserMapper.selectByUserIdAndAppId(userId, appsourceEntity.getId());
        if (Objects.isNull(authUserEntity)) {
            return false;
        }
        List<UserRoleEntity> userRoleEntitys = userRoleMapper.selectByUserId(authUserEntity.getId());
        if (CollectionUtils.isEmpty(userRoleEntitys)) {
            return false;
        }
        List<Integer> roleIds = Lists.transform(userRoleEntitys, UserRoleEntity::getRoleId);
        List<RoleUriEntity> roleUriEntities = roleUriMapper.selectByRoleIds(roleIds);
        if (CollectionUtils.isEmpty(roleUriEntities)) {
            return false;
        }
        List<Integer> uriIds = Lists.transform(roleUriEntities, RoleUriEntity::getUriId);
        List<String> uriPaths = uriCache.getUriPaths(uriIds, UriTypeEnum.SERVER);
        for (String path : uriPaths) {
            if (match(uri, path)) {
                return true;
            }
        }
        return false;
    }

    private boolean match(String uri, String path) {
        if (pathMatcher.isPattern(path)) {
            return pathMatcher.match(path, uri);
        } else {
            return uri.equals(uri);
        }
    }

    @Override
    public boolean auths(List<String> uris, String appName, Long userId) {
        return false;
    }

    /**
     * 删除
     */
    @Override
    public boolean delete(Integer id) {
        AuthUserEntity authUserEntity = authUserMapper.selectByPrimaryKey(id);
        Assert.notNull(authUserEntity, "user is null");
        int len = authUserMapper.deleteByPrimaryKey(id);
        AppsourceEntity appsourceEntity = appsourceCache.getById(authUserEntity.getAppsourceId());
        operatorLogService.addOperatorLog(appsourceEntity != null ? appsourceEntity.getAppCode() : applicationName, OperatorLogService.BizType.AUTH_USER, OperatorTypeEnum.DELETE, authUserEntity.getUserId() + "");
        return len > 0;
    }

    /**
     * 更新
     */
    @Override
    public boolean update(AuthUserDto dto) {
        AuthUserEntity entity = AuthUserAdapter.adapterDto(dto);
        int len = authUserMapper.updateByPrimaryKeySelective(entity);
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppsourceId());
        operatorLogService.addOperatorLog(appsourceEntity != null ? appsourceEntity.getAppCode() : applicationName, OperatorLogService.BizType.AUTH_USER, OperatorTypeEnum.UPDATE, entity.getUserId() + "");
        return len > 0;
    }

    @Override
    public boolean updateUserRole(AuthUserDto dto) {
        AuthUserEntity authUserEntity = authUserMapper.selectByPrimaryKey(dto.getId());
        Assert.notNull(authUserEntity, "user is null");
        if (CollectionUtils.isEmpty(dto.getRoleIds())) {
            userRoleMapper.deleteByUserId(dto.getId());
        } else {
            List<UserRoleEntity> userRoleEntities = userRoleMapper.selectByUserId(dto.getId());
            List<UserRoleEntity> saveList = Lists.newArrayList();
            List<Integer> deleteIds = Lists.newArrayList();
            if (CollectionUtils.isEmpty(userRoleEntities)) {
                saveList = UserRoleAdapter.adapterUserId(dto.getId(), dto.getRoleIds());
            } else {
                List<Integer> newRoleIds = dto.getRoleIds();
                List<Integer> oldRoleIds = Lists.transform(userRoleEntities, UserRoleEntity::getRoleId);
                List<Integer> saveIds = newRoleIds.stream().filter(e -> !oldRoleIds.contains(e)).collect(Collectors.toList());
                saveList = UserRoleAdapter.adapterUserId(dto.getId(), saveIds);
                deleteIds = userRoleEntities.stream().filter(e -> !newRoleIds.contains(e.getRoleId())).map(e -> e.getId()).collect(Collectors.toList());
            }
            if (CollectionUtils.isNotEmpty(deleteIds)) {
                userRoleMapper.deleteByPrimaryKeys(deleteIds);
            }
            if (CollectionUtils.isNotEmpty(saveList)) {
                userRoleMapper.insertBatch(saveList);
            }
        }
        AppsourceEntity appsourceEntity = appsourceCache.getById(authUserEntity.getAppsourceId());
        operatorLogService.addOperatorLog(appsourceEntity != null ? appsourceEntity.getAppCode() : applicationName, OperatorLogService.BizType.AUTH_USER, OperatorTypeEnum.UPDATE, "更新角色[" + authUserEntity.getUserId() + "]");
        return true;
    }

    /**
     * 查询
     */
    @Override
    public AuthUserDto seletById(Integer id) {
        AuthUserEntity entity = authUserMapper.selectByPrimaryKey(id);
        if (entity == null) {
            return null;
        }
        AppsourceEntity appsourceEntity = appsourceCache.getById(entity.getAppsourceId());
        UserSecret userSecret = Safes.first(ssoRemote.findUserByIds(Lists.newArrayList(entity.getUserId())));
        Assert.notNull(userSecret, "参数异常，没有找到对应的用户！");
        List<UserRoleEntity> userRoleEntities = userRoleMapper.selectByParam(UserRoleParam.of(entity.getId(), null));
        List<Integer> role = Lists.transform(Safes.of(userRoleEntities), UserRoleEntity::getRoleId);
        AuthUserDto result = AuthUserAdapter.adapterEntity(entity, appsourceEntity, userSecret);
        result.setRoleIds(role);
        return result;
    }

    /**
     * 分页查询
     */
    @Override
    public Pager<AuthUserDto> selectPage(AuthUserParam param) {
        long count = authUserMapper.countByParam(param);
        List<AuthUserDto> list = Collections.EMPTY_LIST;
        if (count == 0) {
            return Pager.builder(list).current(param.getPage()).total(count).create();
        }
        list = selectList(param);
        return Pager.builder(list).current(param.getPage()).total(count).create();
    }

    /**
     * 列表查询
     */
    @Override
    public List<AuthUserDto> selectList(AuthUserParam param) {
        List<AuthUserEntity> entitys = authUserMapper.selectByParam(param);
        if (CollectionUtils.isNotEmpty(entitys)) {
            Map<Long, UserSecret> userSecretMap = getLongUserSecretMap(entitys);
            return entitys.stream()
                    .map(e -> AuthUserAdapter.adapterEntity(e, appsourceCache.getById(e.getAppsourceId()), userSecretMap.get(e.getUserId())))
                    .collect(Collectors.toList());

        }
        return Collections.EMPTY_LIST;
    }


    @Override
    public List<UriTree> queryUriTree(AuthUserParam param) {
        AppsourceEntity appsourceEntity = appsourceCache.getByCode(param.getAppName());
        param.getPage().setPageSize(MAX_PAGE_SIZE);
        Assert.notNull(appsourceEntity, "系统不存在！");
        param.setAppsourceId(appsourceEntity.getId());
        AuthUserEntity authUserEntity = authUserMapper.selectByUserIdAndAppId(param.getUserId(), appsourceEntity.getId());
        if (Objects.isNull(authUserEntity)) {
            logger.info("authUser is null");
            return Collections.EMPTY_LIST;
        }
        List<UserRoleEntity> userRoleEntities = userRoleMapper.selectByUserId(authUserEntity.getId());
        if (CollectionUtils.isEmpty(userRoleEntities)) {
            logger.info("authUser roles is null");
            return Collections.EMPTY_LIST;
        }
        List<Integer> roleIds = Lists.transform(userRoleEntities, UserRoleEntity::getRoleId);
      List<RoleEntity> roleEntities = roleMapper.selectByPrimaryKeys(roleIds);
        if (CollectionUtils.isEmpty(roleEntities)) {
            logger.info("authUser roles is null");
            return Collections.EMPTY_LIST;
        }
        roleIds = Lists.transform(roleEntities,RoleEntity::getId);

        List<RoleUriEntity> roleUriEntitys = roleUriMapper.selectByRoleIds(roleIds);
        if (CollectionUtils.isEmpty(roleUriEntitys)) {
            logger.info("role id is null");
            return Collections.EMPTY_LIST;
        }
        Set<Integer> uriIds = Sets.newHashSet(Lists.transform(roleUriEntitys, RoleUriEntity::getUriId));
        logger.info("url id size:{}", uriIds.size());
        List<UriEntity> uriEntitys = uriCache.getUris(uriIds, Arrays.asList(UriTypeEnum.VIEW, UriTypeEnum.FUNC));
        if (CollectionUtils.isEmpty(uriEntitys)) {
            logger.info("uriEntitys id is null");
            return Collections.EMPTY_LIST;
        }
        logger.info("url  size:{}", uriEntitys.size());
        return UriAdapter.adapterTrees(uriEntitys);
    }

    private Map<Long, UserSecret> getLongUserSecretMap(List<AuthUserEntity> entitys) {
        List<Long> userIds = Lists.transform(entitys, AuthUserEntity::getUserId);
        List<UserSecret> userSecrets = ssoRemote.findUserByIds(userIds);
        return userSecrets.stream().collect(Collectors.toMap(v -> v.getUserId(), v -> v));
    }

}