export default [
  {
    path: '/utils',
    name: '工具箱',
    icon: 'crown',
    routes: [{ path: '/utils/gencode', name:"代码生成工具",icon: 'smile', component: './Gencode' }],
  },
  {
    path: '/auth',
    name: '权限管理',
    icon: 'smile',
    dynamic: true,
    routes: [
      {
        path: '/auth/:appCode',
        icon: 'smile',
        dynamic: true,
        routes: [
          {
            path: '/auth/:appCode/Url',
            icon: 'smile',
            name: '权限管理',
            dynamic: true,
            component: './auth/[appCode]/Url',
          },
          {
            path: '/auth/:appCode/Role',
            icon: 'smile',
            name: '角色管理',
            dynamic: true,
            component: './auth/[appCode]/Role',
          },
          {
            path: '/auth/:appCode/User',
            icon: 'smile',
            name: '用户管理',
            dynamic: true,
            component: './auth/[appCode]/User',
          },
        ]
      },
      {
          path: '/sys/Config',
          name: '系统配置',
          icon: 'smile',
          routes: [
            {
              path: '/sys/Config/Func',
              name: '功能管理',
              icon: 'smile',
              component: './sys/Config/Func',
            },
            {
              path: '/sys/Config/Func/Detail',
              component: './sys/Config/Func/Detail',
            },
            {
              path: '/sys/Config/FuncProperty',
              name: '功能属性管理',
              icon: 'smile',
              component: './sys/Config/FuncProperty',
            },
            {
              path: '/sys/Config/FuncProperty/detail',
              component: './sys/Config/FuncProperty/Detail',
            },
            {
              path: '/sys/Config/Datasource',
              name: '数据源配置',
              icon: 'smile',
              component: './sys/Config/Datasource',
            },
            {
              path: '/sys/Config/Appsource',
              name: '系统配置',
              icon: 'smile',
              component: './sys/Config/Appsource',
            },
            {
              path: '/sys/Config/Appsource/detail',
              component: './sys/Config/Appsource/Detail',
            },
            {
              path: '/sys/Config/DictTable',
              name: '字典管理',
              icon: 'smile',
              component: './sys/Config/DictTable',
            },
            {
              path: '/sys/Config/DictTable/detail',
              component: './sys/Config/DictTable/Detail',
            },
            {
              path: '/sys/Config/DictDetail',
              name: '字典詳情',
              icon: 'smile',
              component: './sys/Config/DictDetail',
            },
            {
              path: '/sys/Config/DictDetail/detail',
              component: './sys/Config/DictDetail/Detail',
            },
            {
              path: '/sys/Config/GatewayRoute',
              name: '网关路由配置',
              icon: 'smile',
              component: './sys/Config/GatewayRoute',
            },
          ]
        },
      {
          path: '/work/:code/:funcCode',
          icon: 'smile',
          dynamic: true,
          component: './commons/[funcCode]',
        },
    ]
  },
  {
    path: '/config/:code/:funcCode',
    icon: 'smile',
    dynamic: true,
    component: './commons/[funcCode]',
  },
  { path: '/', redirect: '/welcome' },
  { component: './404' },

];
