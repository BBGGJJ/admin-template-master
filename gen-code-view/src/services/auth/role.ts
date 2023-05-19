import request from '@/utils/request';

export async function saveRole(params) {
  return request('/api/erp/boss/auth/role/save.do', {
    method: 'POST',
    data: params,
  });
}
export async function querRoleList(params) {
  return request('/api/erp/boss/auth/role/pageList.do', {
    method: 'POST',
    data: params,
  });
}

export async function deleteRole(id) {
  return request(`/api/erp/boss/auth/role/delete.do?id=${id}`);
}

export async function updateRole(params) {
  return request('/api/erp/boss/auth/role/update.do', {
    method: 'POST',
    data: params,
  });
}

export async function detailsRole(id) {
  return request(`/api/erp/boss/auth/role/detail.do?id=${id}`);
}

export function updateRoleUris(data) {
  return request('/api/erp/boss/auth/role/updateRoleUris.do', {
    method: 'POST',
    data
  })
}
