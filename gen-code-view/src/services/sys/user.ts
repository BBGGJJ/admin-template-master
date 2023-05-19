import request from '@/utils/request';

const base = '/api/sso'

export async function fetchUserByMobile(mobile) {
  return request(`${base}/fuzzy/user?mobile=${mobile}`);
}
