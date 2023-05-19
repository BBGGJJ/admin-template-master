import request from '@/utils/request'

const base = '/api/enterprise/config/industry'

export async function industryTree() {
  return request(`${base}/list`);
}

export async function industryDetails(id) {
  return request(`${base}//detail.do?id=${id}`);
}
