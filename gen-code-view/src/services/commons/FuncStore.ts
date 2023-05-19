import request from '@/utils/request';

export async function queryFuncConfig(funcCode) {
  return request(`/api/erp/boss/func/config/${funcCode}/propertys.do`);
}

export async function saveFuncData(funcCode, params) {
  return request(`/api/erp/boss/func/store/${funcCode}/save.do`, {
    method: 'POST',
    data: params,
  });
}

export async function deleteFuncData(funcCode, id) {
  return request(`/api/erp/boss/func/store/${funcCode}/delete/${id}`);
}

export async function updateFuncData(funcCode, params) {
  return request(`/api/erp/boss/func/store/${funcCode}/update.do`, {
    method: 'POST',
    data: params,
  });
}

export async function detailsFuncData(funcCode, id) {
  return request(`/api/erp/boss/func/store/${funcCode}/detail.do?id=${id}`);
}
