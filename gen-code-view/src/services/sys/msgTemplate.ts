import request from '@/utils/request'

// /api/erp/sms
const base = '/api/erp/sms'

export async function fetchMsgTemplates(data) {
  return request(`${base}/msgTemplate/pageList.do`, {
    method: 'POST',
    data
  });
}

export async function fetchMsgTemplate(id) {
  return request(`${base}/msgTemplate/detail.do?id=${id}`);
}

export async function deleteMsgTemplate(id) {
  return request(`${base}/msgTemplate/delete.do?id=${id}`);
}

export async function createMsgTemplate(data) {
  return request(`${base}/msgTemplate/save.do`, {
    method: 'POST',
    data
  });
}

export async function updateMsgTemplate(data) {
  return request(`${base}/msgTemplate/update.do`, {
    method: 'POST',
    data
  });
}
