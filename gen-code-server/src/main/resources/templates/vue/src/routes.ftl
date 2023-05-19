!#parse
!#name /src/routes.js

import NotFound from './views/404.vue'
<#list routes as item >
<#list item["children"] as child>
<#if (child.businessModule)??>
import ${child.businessModule}${child.name} from './views/${child.businessModule}/${child.name?uncap_first}.vue'
<#else>
import ${child.name} from './views/${child.name?uncap_first}.vue'
</#if>
</#list>
</#list>
import Home from './views/Home.vue'
import Main from './views/Main.vue'

let routes = [
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '主页',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
        ]
    },
<#list routes as item >
    {
        path: '/${item["module"]}',
        component: Home,
        name: '${item["moduleName"]}',
        iconCls: 'fa fa-id-card-o',
        children: [
    <#list item["children"] as child>
        <#if (child.businessModule)??>
            { path: '/${child.businessModule}${child.name}', component: ${child.businessModule}${child.name}, name: '${child.desc}' },
        <#else>
            { path: '/${child.name}', component: ${child.name}, name: '${child.desc}' },
        </#if>
    </#list>
        ]
    },
</#list>
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
