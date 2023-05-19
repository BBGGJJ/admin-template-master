import request from '@/utils/request';

const base = '/api/erp/boss/sys';

export async function fetchEnterprise(id) {
  return request(`${base}/enterprise/detail.do?id={id}`);
}


export async function updateEnterprise(data) {
  return request(`${base}/enterprise/update.do`, {
    method: 'POST',
    data
  })
}
