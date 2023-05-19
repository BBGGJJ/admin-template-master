import request from '@/utils/request'

const base = '/api/erp/boss/sys/errorToastConf'

export function fetchErrorToasts(data) {
  return request(`${base}/pageList.do`, {
    method: 'POST',
    data
  });
}

export async function fetchErrorToast(id) {
  return request(`${base}/detail.do?id=${id}`);
}

export async function deleteErrorToast(id) {
  return request(`${base}/delete.do?id=${id}`);
}

export async function createErrorToast(data) {
  return request(`${base}/save.do`, {
    method: 'POST',
    data
  });
}

export async function updateErrorToast(data) {
  return request(`${base}/update.do`, {
    method: 'POST',
    data
  });
}
export async function loadAll(appsouceCode) {
  return request(`/api/erp/boss/sys/errorToast/load.do?appsouceCode=${appsouceCode}`);
}
