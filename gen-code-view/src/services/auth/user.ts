import request from '@/utils/request';

export async function saveUser(params) {
  return request('/api/erp/boss/auth/authUser/save.do', {
    method: 'POST',
    data: params,
  });
}

export async function deleteUser(id) {
  return request(`/api/erp/boss/auth/authUser/delete.do?id=${id}`);
}

export async function updateUser(params) {
  return request('/api/erp/boss/auth/authUser/update.do', {
    method: 'POST',
    data: params,
  });
}

export async function detailsUser(id) {
  return request(`/api/erp/boss/auth/authUser/detail.do?id=${id}`);
}

export async function updateUserRole(params) {
  return request('/api/erp/boss/auth/authUser/updateUserRole.do', {
    method: 'POST',
    data: params,
  });
}
