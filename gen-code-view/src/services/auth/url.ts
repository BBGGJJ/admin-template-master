import request from '@/utils/request';

export async function updateIndex(params) {
  return request('/api/erp/boss/auth/uri/updateIndex.do', {
    method: 'POST',
    data: params,
  });
}

export async function deleteUrl(id) {
  return request(`/api/erp/boss/auth/uri/delete.do?id=${id}`);
}

export async function saveUrl(params) {
  return request('/api/erp/boss/auth/uri/saveOrReturenValue.do', {
    method: 'POST',
    data: params,
  });
}

export async function updateUrl(params) {
  return request('/api/erp/boss/auth/uri/update.do', {
    method: 'POST',
    data: params,
  });
}

export async function queryAllUrlTree(params) {
  return request('/api/erp/boss/auth/uri/queryTree.do', {
    method: 'POST',
    data: params,
  });
}
