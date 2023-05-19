!#parse
!#name /src/main/java/${classInfo.basePackage()}.dto/${classInfo.name}Dto.java
!#list

package ${classInfo.basePackage()}.dto;

<#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
    <#list classInfo.columnList as fieldItem >
        <#if fieldItem.beanAttr.javaType == "java.util.Date">
            <#assign importDate = true />
        </#if>
         <#if fieldItem.beanAttr.javaType == "java.time.LocalDateTime">
            <#assign importDate = true />
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

<#if importDate?? && importDate>
import java.time.LocalDateTime;
import java.util.Date;
</#if>
import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Length;
import java.io.Serializable;
/**
*  ${classInfo.desc}
*
*  Created by liupeng6251@163.com on '${.now?string('yyyy-MM-dd HH:mm:ss')}'.
*/
public class ${classInfo.name}Dto implements Serializable{

<#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
<#list classInfo.columnList as fieldItem >
    /**
    * ${fieldItem.beanAttr.cnName}
    */
    private ${fieldItem.beanAttr.typeClassName} ${fieldItem.beanAttr.name};

</#list>
</#if>

<#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
<#list classInfo.columnList as fieldItem>
    public ${fieldItem.beanAttr.typeClassName} get${fieldItem.beanAttr.name?cap_first}() {
        return ${fieldItem.beanAttr.name};
    }

    public void set${fieldItem.beanAttr.name?cap_first}(${fieldItem.beanAttr.typeClassName} ${fieldItem.beanAttr.name}) {
        this.${fieldItem.beanAttr.name} = ${fieldItem.beanAttr.name};
    }

</#list>
</#if>
}