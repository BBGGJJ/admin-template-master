export default {
  messageConfig: {},
  templateData: [
    {
      key: 'vue',
      title: 'vue-2.0-前端模版',
    },
    {
      key: 'spring-boot',
      title: 'java-spring-boot后端项目',
    }
  ],
  dev: {
    ssoLoginUrl: 'http://sso.dev.zomyun.com/login',
    chartsUrl: 'http://charts.dev.zomyun.com',
    fileUploadDomain: '/',
  },
  beta: {
    ssoLoginUrl: 'http://sso.beta.zomyun.com/login',
    chartsUrl: 'http://charts.beta.zomyun.com',
    fileUploadDomain: '/',
  },
  prod: {
    ssoLoginUrl: 'https://sso.zomyun.com/login',
    chartsUrl: 'https://charts.zomyun.com',
    fileUploadDomain: '/',
  },
  getProcessEnv: () => {
    const betaReg = RegExp(/beta/)
    const devReg = RegExp(/dev/)
    let currUri = window.location.href
    if (betaReg.test(currUri)) {
      return 'beta';
    } else if (devReg.test(currUri)) {
      return 'dev';
    }
    return 'prod';
  }
};
