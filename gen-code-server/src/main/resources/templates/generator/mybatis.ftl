!#parse
!# ${name}Mapper.xml
!#list

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="${classInfo.mapperPackage()}.${classInfo.name}Mapper">
    <resultMap id="BaseResultMap" type="${classInfo.entityPackage()}.${classInfo.name}Entity">
    <#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
        <#list classInfo.columnList as fieldItem >
            <result column="${fieldItem.tableColumn.columnName}" jdbcType="${fieldItem.tableColumn.type}" property="${fieldItem.tableColumn.name}" />
        </#list>
    </#if>
    </resultMap>
    <sql id="Base_Column_List">
    <#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
     <#list classInfo.columnList as fieldItem >`${fieldItem.tableColumn.columnName}`<#if fieldItem_has_next>,</#if></#list>
    </#if>
    </sql>

    <sql id="limit">
        <if test='offset != 0 and limit != 0'>
            ${r"limit #{offset}, #{limit}"}
        </if>

        <if test='offset == 0 and limit != 0'>
            limit ${r"#{limit}"}
        </if>
    </sql>

    <sql id="queryWhere">
        <where>
         <#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
          <#list classInfo.columnList as fieldItem >
              <if test="${fieldItem.tableColumn.name} != null">
                  and `${fieldItem.tableColumn.columnName}` = ${fieldItem.tableColumn.name}
              </if>
          </#list>
          </#if>
        </where>
    </sql>

    <select id="selectByParam" parameterType="${classInfo.paramPackage()}.${classInfo.name}Param" resultMap="BaseResultMap">
        select
        <if test="distinct">
            distinct
        </if>
        <include refid="Base_Column_List" />
        from ${classInfo.tableName}
        <include refid="queryWhere" />
        <if test="orderByClause != null">
            order by ${r"${orderByClause}"}
        </if>
        <if test="orderByClause == null">
            order by ${classInfo.primaryKey.tableColumn.columnName} desc
        </if>
        <include refid="limit" />
    </select>

    <select id="countByParam" resultType="java.lang.Long">
        SELECT count(*)
        from ${classInfo.tableName}
        <include refid="queryWhere"/>
    </select>
    <select id="selectByPrimaryKey" resultMap="BaseResultMap">
        select
        <include refid="Base_Column_List" />
        from ${classInfo.tableName}
        where ${classInfo.primaryKey.tableColumn.columnName} = ${r"#{"}${classInfo.primaryKey.tableColumn.name}${r"}"}
    </select>
    <delete id="deleteByPrimaryKey">
        delete from ${classInfo.tableName}
        where ${classInfo.primaryKey.tableColumn.columnName} = ${r"#{"}${classInfo.primaryKey.tableColumn.name}${r"}"}
    </delete>

    <insert id="insertSelective"  >
    <#if classInfo.primaryKey != null && classInfo.primaryKey.tableColumn.autoIncrement>
        <selectKey resultType="java.lang.Integer" keyProperty="id" order="AFTER">
            SELECT LAST_INSERT_ID()
        </selectKey>
    </#if>
        INSERT INTO ${classInfo.tableName}
        <#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
        <trim prefix="(" suffix=")" suffixOverrides=",">
         <#list classInfo.columnList as fieldItem >
             <#if !classInfo.primaryKey.tableColumn.autoIncrement>
              <if test="${fieldItem.tableColumn.name} != null">
                  `${fieldItem.tableColumn.columnName}`,
             </if>
             </#if>
          </#list>
        </trim>
        <trim prefix="values (" suffix=")" suffixOverrides=",">
         <#list classInfo.columnList as fieldItem >
             <#if !classInfo.primaryKey.tableColumn.autoIncrement>
              <if test="${fieldItem.tableColumn.name} != null">
                 ${r"#{"}${fieldItem.tableColumn.name}${r"}"},
              </if>
             </#if>
         </#list>
        </trim>
        </#if>
    </insert>
    <insert id="insertBatch"  >
        INSERT INTO ${classInfo.tableName}
    <#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
        <trim prefix="(" suffix=")" suffixOverrides=",">
            <#list classInfo.columnList as fieldItem >
                <#if !classInfo.primaryKey.tableColumn.autoIncrement>
                    `${fieldItem.tableColumn.columnName}`,
                </#if>
            </#list>
        </trim>
         values
        <foreach collection="list" item="item" index="index" separator=",">
        <trim prefix="(" suffix=")" suffixOverrides=",">
                <#list classInfo.columnList as fieldItem >
                 <#if !classInfo.primaryKey.tableColumn.autoIncrement>
                    ${r"#{item."}${fieldItem.tableColumn.name}${r"}"},
                 </#if>
                </#list>
            </trim>
        </foreach>
    </#if>
    </insert>
    <insert id="insertOrUpdate"  >
        INSERT INTO ${classInfo.tableName}
    <#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
        <trim prefix="(" suffix=")" suffixOverrides=",">
            <#list classInfo.columnList as fieldItem >
                <#if !classInfo.primaryKey.tableColumn.autoIncrement>
                <if test="${fieldItem.tableColumn.name} != null">
                    `${fieldItem.tableColumn.columnName}`,
                </if>
                </#if>
            </#list>
        </trim>
        <trim prefix="values (" suffix=")" suffixOverrides=",">
            <#list classInfo.columnList as fieldItem >
                <#if !classInfo.primaryKey.tableColumn.autoIncrement>
                <if test="${fieldItem.tableColumn.name} != null">
                    ${r"#{"}${fieldItem.tableColumn.name}${r"}"},
                </if>
                </#if>
            </#list>
        </trim>
        ON DUPLICATE KEY UPDATE
        <set>
            <#list classInfo.columnList as fieldItem >
                <#if !classInfo.primaryKey.tableColumn.autoIncrement>
                <if test="${fieldItem.tableColumn.name} != null">
                    `${fieldItem.tableColumn.columnName}` = ${r"#{"}${fieldItem.tableColumn.name}${r"}"},
                </if>
                </#if>
            </#list>
        </set>
    </#if>
    </insert>
    <update id="updateByPrimaryKeySelective"  useGeneratedKeys="true">
        update ${classInfo.tableName}
        <set>
        <#list classInfo.columnList as fieldItem >
            <#if !classInfo.primaryKey.tableColumn.autoIncrement>
            <if test="${fieldItem.tableColumn.name} != null" >
                 `${fieldItem.tableColumn.columnName}` = ${r"#{"}${fieldItem.tableColumn.name}${r"}"},
            </if>
            </#if>
        </#list>
        </set>
        where ${classInfo.primaryKey.tableColumn.columnName} = ${r"#{"}${classInfo.primaryKey.tableColumn.name}${r"}"}
    </update>
</mapper>