import request from '@/utils/request';

const base = '/api/erp/boss/sys/appsource';


export async function saveAppsource(params) {
  return request(`${base}/save.do`, {
    method: 'POST',
    data: params,
  });
}
export async function deleteAppsource(id) {
  return request(`${base}/delete.do?id=${id}`);
}

export async function updateAppsource(params) {
  return request(`${base}/update.do`, {
    method: 'POST',
    data: params,
  });
}

export async function detailsAppsource(id) {
  return request(`${base}/detail.do?id=${id}`);
}

export async function updateAppsourceUser(param) {
  return request(`${base}/updateUser.do`, {
    method: 'POST',
    data: param,
  });
}
