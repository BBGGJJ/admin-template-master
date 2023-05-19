import {
  extend
} from 'umi-request';

const request = extend({
  timeout: 1000,
  credentials: 'include',
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: false,
        errorMessage: resData.message,
      };
    },
  },
  responseInterceptors: [
    async (response) => {
      console.log(response)
      if (response.status !== 200) {
        return response;
      }
      const data = await response.json();
      console.log(data)
      if (data.status !== 0) {
        message.error({
          message: `请求错误!`,
          description:  data.message,
        });
        return data;
      }
      return data;
    }
  ],
});
export default request;
