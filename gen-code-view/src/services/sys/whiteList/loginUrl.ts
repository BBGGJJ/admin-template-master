import request from '@/utils/request';

const base = '/api/sso'

export async function fetchUriWhiteList(id) {
  return request(`${base}/uriWhiteList/detail.do?id=${id}`);
}

export async function deleteUriWhiteList(id) {
  return request( `${base}/uriWhiteList/delete.do?id=${id}`);
}

export async function createUriWhiteList(data) {
  return request( `${base}/uriWhiteList/save.do`,{
    method: 'POST',
    data
  })
}

export async function updateUriWhiteList(data) {
  return request( `${base}/uriWhiteList/update.do`,{
    method: 'POST',
    data
  })
}
