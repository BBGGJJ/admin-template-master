import request from '@/utils/request'

const base = '/api/operator/log/operatorLog'

export async function fetchDetail(id) {
  return request(`${base}/detail.do?id=${id}`);
}
