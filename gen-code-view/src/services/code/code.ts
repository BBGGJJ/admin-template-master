import { request } from 'umi';


/** 获取当前的用户 GET /api/currentUser */
export async function queryTables(params?: { [key: string]: any }) {
  return request('/api/gencode/v1/tableList', {
    method: 'POST',
    data: params,
  });
}

/** 获取当前的用户 GET /api/currentUser */
export function submitCodeGen(params?: { [key: string]: any }) {
  return request('/api/gencode/v1/codeGenerate', {
    method: 'POST',
    responseType: 'blob',
    data: params,
  });
}

/** 获取当前的用户 GET /api/currentUser */
export async function queryTemplates() {
  return request('/api/gencode/v1/template');
}
