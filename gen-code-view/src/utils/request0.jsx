import {
  extend
} from 'umi-request';
import {
  notification
} from 'antd';
import config from '@/config/setting';

/**
 * 异常处理程序
 */

const errorHandler = (error) => {
  const {
    response
  } = error;
  const {
    messageConfig
  } = config;
  if (response && response.status) {
    if (response.status === 401) {
      const env = config.getProcessEnv() || 'dev';
      const ssoUri = config[env].ssoLoginUrl;
      let currUri = window.location.href;
      currUri = encodeURIComponent(currUri);
      const url = `${ssoUri}?redirect=${currUri}`;
      window.location.href = url;
      return response;
    }
    const errorText = messageConfig[response.status] || response.statusText;
    notification.error({
      message: `请求错误 `,
      description: errorText || '网络异常！',
    });
  } else if (!response) {
    notification.error({
      description: messageConfig.server_error || '',
      message: '网络异常',
    });
  }
  throw error;
};
/**
 * 配置request请求时的默认参数
 */
const responseInterceptors = [async (response) => {
  if (response.status !== 200) {
    return response;
  }
  const {
    messageConfig
  } = config;
  const data = await response.json();
  if (data.status !== 200) {
    notification.error({
      message: `请求错误!`,
      description: messageConfig[data.status] || data.message,
    });
    return data;
  }
  return data;
}];
const request = extend({
  timeout: 10000,
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});
request.use((ctx, next) => {
  ctx.responseInterceptors = responseInterceptors;
  return next();
});
// responseInterceptors: [
//   (response) => {
//     console.log("++++++");
//     console.log(response);
//     if (response && response.status) {
//       if (response.status != 200) {
//         const errorText = codeMessage[response.status] || response.statusText;
//         notification.error({
//           message: `请求错误 ${status}: ${url}`,
//           description: errorText,
//         });
//       }
//       return response;
//     }
//     notification.error({
//       description: '您的网络发生异常，无法连接服务器',
//       message: '网络异常',
//     });
//     return response;
//   }
// ],

export default request;
