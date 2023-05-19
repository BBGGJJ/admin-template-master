import request from '@/utils/request';


const base = '/api/erp/boss/sys'

export async function fetchGatewayRoutes(data, sort, filter) {
  const page = {};
  page.pageNumber = data.current;
  page.pageSize = data.pageSize;
  data.page = page;
  const result = await request(`${base}/gatewayRoute/pageList.do`, {
    method: 'post',
    data
  });
  return {
    data: result.data.data || [],
    total: result.data.page.total || 0,
    success: result.status == 200
  }
}
export async function fetchGatewayRoute(id) {
  return request(`${base}/gatewayRoute/detail.do`, {
    method: 'get',
    data: {
      id
    }
  })
}

export async function deleteGatewayRoute(id) {
  return request(`${ base}/gatewayRoute/delete.do`, {
    method: 'delete',
    data: {
      id
    }
  })
}

export async function createGatewayRoute(data) {
  return request(`${base}/gatewayRoute/save.do`, {
    method: 'post',
    data
  })
}

export async function updateGatewayRoute(data) {
  return request(`${base}/gatewayRoute/update.do`, {
    method: 'post',
    data
  })
}
