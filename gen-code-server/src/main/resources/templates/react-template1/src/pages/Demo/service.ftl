!#parse
!#name /src/pages/${classInfo.businessModule?cap_first}/${classInfo.name}/service.js
!#list

import request from '@/utils/request';
let base = '<#if (classInfo.businessModule)?? >/${classInfo.businessModule}</#if>';

export async function queryRule(params) {
  return request(`/api${r'${'}base}/${classInfo.name?uncap_first}/pageList.do`, {
    params,
  });
}
export async function removeRule(params) {
  return request(`/api${r'${'}base}/${classInfo.name?uncap_first}/delete.do`, {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request(`/api${r'${'}base}/${classInfo.name?uncap_first}/save.do`, {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request(`/api${r'${'}base}/${classInfo.name?uncap_first}/update.do`, {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
