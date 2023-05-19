import request from '@/utils/request'

const base = '/api/erp/boss/sys'


export async function fetchDictDetail(id) {
  return request(`${base}/dictDetail/detail.do?id=${id}`);
}

export async function deleteDictDetail(id) {
  return request(`${base}/dictDetail/delete.do?id={id}`);
}

export async function saveDictDetail(data) {
  return request(`${base}/dictDetail/save.do`, {
    method: 'POST',
    data
  });
}

export async function updateDictDetail(data) {
  return request(`${base}/dictDetail/update.do`, {
    method: 'POST',
    data
  });
}
