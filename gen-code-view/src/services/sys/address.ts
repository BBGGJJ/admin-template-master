import request from '@/utils/request'

const base = '/api/erp/boss/sys'

export function fetchAddresss(data) {
  return request(`${base}/address/pageList.do`, {
    method: 'POST',
    data
  });
}

export async function fetchAddress(id) {
  return request(`${base}/address/detail.do?id=${id}`);
}

export async function deleteAddress(id) {
  return request(`${base}/address/delete.do?id=${id}`);
}

export async function createAddress(data) {
  return request(`${base}/address/save.do`, {
    method: 'POST',
    data
  });
}

export async function updateAddress(data) {
  return request(`${base}/address/update.do`, {
    method: 'POST',
    data
  });
}

export async function provinces() {
  return request(`${base}/address/provinces`);
}

export async function citys(provinceId) {
  return request(`${base}/address/citysByProvince?provinceId=${provinceId}`);
}

export async function areas(cityId) {
  return request(`${base}/address/areasByCity?cityId=${cityId}`);
}

export async function addressTree() {
  return request(`${base}/address/three/level`);
}
