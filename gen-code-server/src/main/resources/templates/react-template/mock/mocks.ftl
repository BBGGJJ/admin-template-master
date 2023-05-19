!#parse
!#name /mock/mocks.js

import { parse } from 'url';

<#list classInfos as classInfo >
 const <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if> = [];
</#list>
export default {
<#list classInfos as classInfo >
  'POST /api<#if (classInfo.businessModule)??>/${classInfo.businessModule}</#if>/${classInfo.name?uncap_first}/pageList.do': (req, res) => {
    const { page = {} } = req.body;
    res.send({
      status: 200,
      data:{
        data:<#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if>,
        page:{
          pageNumber: page.pageNumber || 1,
          pageSize: page.pageSize || 10,
          total: <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if>.lenth,
        }
      }
    });
   },
  'DELETE /api<#if (classInfo.businessModule)??>/${classInfo.businessModule}</#if>/${classInfo.name?uncap_first}/delete.do': (req, res) => {
    res.send({
      status: 200,
	  message: '删除成功',
      data: true
    });
   },
  'POST /api<#if (classInfo.businessModule)??>/${classInfo.businessModule}</#if>/${classInfo.name?uncap_first}/update.do': (req, res) => {
	res.send({
      status: 200,
	     message: '更新成功',
      data: true
    });
  },
  'POST /api<#if (classInfo.businessModule)??>/${classInfo.businessModule}</#if>/${classInfo.name?uncap_first}/save.do': (req, res) => {
   <#if (classInfo.businessModule)??>${classInfo.businessModule}${classInfo.name}<#else>${classInfo.name?uncap_first}</#if>.push(req.body)
	 res.send({
      status: 200,
	    message: '保存成功',
      data: true
    });
  },
</#list>
};
