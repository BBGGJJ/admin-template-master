import request from '@/utils/request';

const base = '/api/erp/boss/sys/dataSource';

export async function saveDatasource(params) {
  return request(`${base}/save.do`, {
    method: 'POST',
    data: params,
  });
}
export async function deleteDatasource(id) {
  return request(`${base}/delete.do?id=${id}`);
}

export async function updateDatasource(params) {
  return request(`${base}/update.do`, {
    method: 'POST',
    data: params,
  });
}

export async function detailsDatasource(id) {
  return request(`${base}/detail.do?id=${id}`);
}
