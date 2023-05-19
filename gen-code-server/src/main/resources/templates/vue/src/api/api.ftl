!#parse
!#name /src/api/<#if (classInfo.businessModule)??> ${classInfo.businessModule}/</#if>${classInfo.name?uncap_first}.js
!#list

import axios from 'axios';

let base = '<#if (classInfo.businessModule)?? >/${classInfo.businessModule}</#if>';

export const ${classInfo.name?uncap_first}PageList = params => { return axios.post(`/api${r'${'}base}/${classInfo.name?uncap_first}/pageList.do`,  params); };

export const ${classInfo.name?uncap_first}Detete = params => { return axios.get(`/api${r'${'}base}/${classInfo.name?uncap_first}/delete.do`, { params: params }); };

export const ${classInfo.name?uncap_first}BatchDelete = params => { return axios.get(`/api${r'${'}base}/${classInfo.name?uncap_first}/batchDelete.do`, { params: params }); };

export const ${classInfo.name?uncap_first}Update = params => { return axios.post(`/api${r'${'}base}/${classInfo.name?uncap_first}/update.do`,  params ); };

export const ${classInfo.name?uncap_first}Detail = params => { return axios.get(`/api${r'${'}base}/${classInfo.name?uncap_first}/detail.do`, { params: params }); };

export const ${classInfo.name?uncap_first}Save = params => { return axios.post(`/api${r'${'}base}/${classInfo.name?uncap_first}/save.do`,  params); };