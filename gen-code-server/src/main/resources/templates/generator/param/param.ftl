!#parse
!# ${name}Param.java
!#list

package ${classInfo.basePackage()}.param;

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
import ${classInfo.packagePath}.core.page.PageRequest;
/**
*  ${classInfo.desc}
*
*  Created by liupeng6251@163.com on '${.now?string('yyyy-MM-dd HH:mm:ss')}'.
*/
public class ${classInfo.name}Param extends  PageRequest{

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

    public void set${fieldItem.name?cap_first}(${fieldItem.beanAttr.typeClassName} ${fieldItem.beanAttr.name}) {
      this.${fieldItem.beanAttr.name} = ${fieldItem.beanAttr.name};
    }

    </#list>
</#if>

    public ${classInfo.name}Param() {
    }

    private ${classInfo.name}Param(Builder builder) {
    <#if classInfo.columnList?exists && classInfo.columnList?size gt 0>
        <#list classInfo.columnList as fieldItem>

        set${fieldItem.beanAttr.name?cap_first}(builder.${fieldItem.beanAttr.name});
        </#list>
    </#if>

    }

    public static final class Builder {
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
        public Builder ${fieldItem.beanAttr.name}(${fieldItem.beanAttr.typeClassName} ${fieldItem.beanAttr.name}) {
            this.${fieldItem.beanAttr.name} = ${fieldItem.beanAttr.name};
            return this;
        }

        </#list>
    </#if>
        public ${classInfo.name}Param build() {
              return new ${classInfo.name}Param(this);
        }

    }
}