!#parse
!# ${name}Entity.java
!#list

package ${classInfo.basePackage()}.entity;

<#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
    <#list classInfo.columnList as fieldItem >
        <#if fieldItem.beanAttr.javaType == "java.util.Date">
            <#assign importDdate = true />
        </#if>
    </#list>
</#if>
<#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
    <#list classInfo.columnList as fieldItem >
        <#if fieldItem.beanAttr.javaType == "java.math.BigDecimal">
            <#assign importBigDecimal = true />
        </#if>
    </#list>
</#if>

<#if importBigDecimal?? && importBigDecimal>
import java.math.BigDecimal;
</#if>

<#if importDdate?? && importDdate>
import java.util.Date;
</#if>

/**
*  ${classInfo.desc}
*
*  Created by liupeng6251@163.com on '${.now?string('yyyy-MM-dd HH:mm:ss')}'.
*/
public class ${classInfo.name}Entity {

<#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
<#list classInfo.columnList as fieldItem >
    /**
    * ${fieldItem.beanAttr.cnName}
    */
    private ${fieldItem..beanAttrtypeClassName} ${fieldItem.beanAttr.name};

</#list>
</#if>

<#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
<#list classInfo.columnList as fieldItem>
    public ${fieldItem.beanAttr.typeClassName} get${fieldItem.name?cap_first}() {
        return ${fieldItem.beanAttr.name};
    }

    public void set${fieldItem.beanAttr.name?cap_first}(${fieldItem.beanAttr.typeClassName} ${fieldItem.beanAttr.name}) {
        this.${fieldItem.beanAttr.name} = ${fieldItem.beanAttr.name};
    }

</#list>
</#if>
}