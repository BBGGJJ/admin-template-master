!#parse
!#name /src/mock/mock.js

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });
<#list classInfos as classInfo>
  let base${classInfo.name} = '/api<#if (classInfo.businessModule)??>/${classInfo.businessModule}</#if>';
  let <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if> = [];
  //分页查询
  mock.onPost(`${r'${'}base${classInfo.name}}/${classInfo.name?uncap_first}/pageList.do`).reply(config => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
          list: <#if (classInfo.businessModule)?? >${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if>,
      }]);
    }, 1000);
    });
  });
  //删除
  mock.onGet(`${r'${'}base${classInfo.name}}/${classInfo.name?uncap_first}/delete.do`).reply(config => {
    let { ${classInfo.primaryKey.beanAttr.name} } = config.params;
    <#if (classInfo.businessModule)?? >${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if> = <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if>.filter(u => u.${classInfo.primaryKey.beanAttr.name} !== ${classInfo.primaryKey.beanAttr.name});
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
        code: 200,
        msg: '删除成功'
      }]);
      }, 500);
    });
  });
  //批量删除
  mock.onGet(`${r'${'}base${classInfo.name}}/${classInfo.name?uncap_first}/batchDelete.do`).reply(config => {
    let { ${classInfo.primaryKey.beanAttr.name}s } = config.params;
    ${classInfo.primaryKey.beanAttr.name}s = ${classInfo.primaryKey.beanAttr.name}s.split(',');
    <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if> = <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if>.filter(u => !${classInfo.primaryKey.beanAttr.name}s.includes(u.id));
      return new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve([200, {
           code: 200,
           msg: '删除成功'
        }]);
      }, 500);
    });
  });
  //更新
  mock.onPost(`${r'${'}base${classInfo.name}}/${classInfo.name?uncap_first}/update.do`).reply(config => {
  let { <#list classInfo.columnList as fieldItem ><#if fieldItem.beanAttr.name != classInfo.primaryKey.beanAttr.name>${fieldItem.beanAttr.name}, </#if></#list>${classInfo.primaryKey.beanAttr.name} } = JSON.parse(config.data).params;
  <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if>.some(u => {
      if (u.${classInfo.primaryKey.beanAttr.name} === ${classInfo.primaryKey.beanAttr.name}) {
  <#list classInfo.columnList as fieldItem >
    <#if fieldItem.beanAttr.name != classInfo.primaryKey.beanAttr.name>
     u.${fieldItem.beanAttr.name} = ${fieldItem.beanAttr.name};
    </#if>
  </#list>
      }
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
        code: 200,
        msg: '编辑成功'
      }]);
      }, 500);
    });
  });
  //新增
  mock.onPost(`${r'${'}base${classInfo.name}}/${classInfo.name?uncap_first}/save.do`).reply(config => {
    let { <#list classInfo.columnList as fieldItem ><#if fieldItem.beanAttr.name != classInfo.primaryKey.beanAttr.name>${fieldItem.beanAttr.name}, </#if></#list>${classInfo.primaryKey.beanAttr.name} } = JSON.parse(config.data).params;
    <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if>.push({
  <#list classInfo.columnList as fieldItem >
    <#if fieldItem.beanAttr.name != classInfo.primaryKey.beanAttr.name>
      ${fieldItem.beanAttr.name}: ${fieldItem.beanAttr.name},
    </#if>
  </#list>
      ${classInfo.primaryKey.beanAttr.name}: Mock.Random.guid(),
    }
   );
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          code: 200,
          msg: '保存成功'
        }]);
      }, 500);
     });
  });
  </#list>
  }
};