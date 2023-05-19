import request from '@/utils/request';

export async function saveFunc(params) {
  return request('/api/erp/boss/func/save.do', {
    method: 'POST',
    data: params,
  });
}

export async function deleteFunc(id) {
  return request(`/api/erp/boss/func/delete.do?id=${id}`);
}

export async function updateFunc(params) {
  return request('/api/erp/boss/func/update.do', {
    method: 'POST',
    data: params,
  });
}

export async function detailsFunc(id) {
  return request(`/api/erp/boss/func/detail.do?id=${id}`);
}
