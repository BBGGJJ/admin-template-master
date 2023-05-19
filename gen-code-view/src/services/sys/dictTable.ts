import request from '@/utils/request';

const base = '/api/erp/boss/sys';

export async function fetchDictTable(id) {
  return request(`${base}/dictTable/detail.do?id=${id}`);
}

export async function deleteDictTable(id) {
  return request(`${base}/dictTable/delete.do`, {
    method: 'delete',
    data: { id }
  })
}

export async function saveDictTable(data) {
  return request(`${base}/dictTable/save.do`, {
    method: 'POST',
    data
  })
}

export async function updateDictTable(data) {
  return request(`${base}/dictTable/update.do`, {
    method: 'POST',
    data
  })
}
