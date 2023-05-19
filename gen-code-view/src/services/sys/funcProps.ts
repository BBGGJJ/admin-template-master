import request from '@/utils/request';

export async function saveFuncProps(params) {
  return request('/api/erp/boss/funcProperty/save.do', {
    method: 'POST',
    data: params,
  });
}

export async function deleteFuncProps(id) {
  return request(`/api/erp/boss/funcProperty/delete.do?id=${id}`);
}

export async function updateFuncProps(params) {
  return request('/api/erp/boss/funcProperty/update.do', {
    method: 'POST',
    data: params,
  });
}

export async function detailsFuncProps(id) {
  return request(`/api/erp/boss/funcProperty/detail.do?id=${id}`);
}
