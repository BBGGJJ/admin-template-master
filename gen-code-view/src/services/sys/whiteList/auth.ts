import request from '@/utils/request';

const base = '/api/erp/boss/auth'

export async function fetchAppWhiteList(id) {
  return request(`${base}/appWhiteList/detail.do?id=${id}`);
}

export async function deleteAppWhiteList(id) {
  return request( `${base}/appWhiteList/delete.do?id=${id}`);
}

export async function createAppWhiteList(data) {
  return request( `${base}/appWhiteList/save.do`,{
    method: 'POST',
    data
  })
}

export async function updateAppWhiteList(data) {
  return request( `${base}/appWhiteList/update.do`,{
    method: 'POST',
    data
  })
}
