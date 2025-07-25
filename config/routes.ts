﻿/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        component: './dashboard/analysis',
      },
      {
        path: '/dashboard/monitor',
        name: 'monitor',
        component: './dashboard/monitor',
      },
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        component: './dashboard/workplace',
      },
    ],
  },
  {
    path: '/form',
    name: 'form',
    icon: 'form',
    routes: [
      {
        path: '/form',
        redirect: '/form/basic-form',
      },
      {
        path: '/form/basic-form',
        name: 'basic-form',
        component: './form/basic-form',
      },
      {
        path: '/form/step-form',
        name: 'step-form',
        component: './form/step-form',
      },
      {
        path: '/form/advanced-form',
        name: 'advanced-form',
        component: './form/advanced-form',
      },
    ],
  },
  {
    path: '/list',
    name: 'list',
    icon: 'table',
    routes: [
      {
        path: '/list',
        redirect: '/list/table-list',
      },
      {
        path: '/list/table-list',
        name: 'table-list',
        component: './table-list',
      },
      {
        path: '/list/search-list',
        name: 'search-list',
        routes: [
          {
            path: '/list/search-list',
            redirect: '/list/search-list/articles',
          },
          {
            path: '/list/search-list/articles',
            name: 'search-articles',
            component: './list/search-list/articles',
          },
          {
            path: '/list/search-list/projects',
            name: 'search-projects',
            component: './list/search-list/projects',
          },
          {
            path: '/list/search-list/applications',
            name: 'search-applications',
            component: './list/search-list/applications',
          },
        ],
      },
      {
        path: '/list/query-table',
        name: 'query-table',
        component: './list/query-table',
      },
      {
        path: '/list/standard-list',
        name: 'standard-list',
        component: './list/standard-list',
      },
      {
        path: '/list/card-list',
        name: 'card-list',
        component: './list/card-list',
      },
    ],
  },
  {
    path: '/profile',
    name: 'profile',
    icon: 'profile',
    routes: [
      {
        path: '/profile',
        redirect: '/profile/basic',
      },
      {
        path: '/profile/basic',
        name: 'basic',
        component: './profile/basic',
      },
      {
        path: '/profile/advanced',
        name: 'advanced',
        component: './profile/advanced',
      },
    ],
  },
  {
    path: '/result',
    name: 'result',
    icon: 'checkCircle',
    routes: [
      {
        path: '/result',
        redirect: '/result/success',
      },
      {
        path: '/result/success',
        name: 'success',
        component: './result/success',
      },
      {
        path: '/result/fail',
        name: 'fail',
        component: './result/fail',
      },
    ],
  },
  {
    path: '/exception',
    name: 'exception',
    icon: 'warning',
    routes: [
      {
        path: '/exception',
        redirect: '/exception/403',
      },
      {
        path: '/exception/403',
        name: '403',
        component: './exception/403',
      },
      {
        path: '/exception/404',
        name: '404',
        component: './exception/404',
      },
      {
        path: '/exception/500',
        name: '500',
        component: './exception/500',
      },
    ],
  },
  {
    path: '/account',
    name: 'account',
    icon: 'user',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        path: '/account/center',
        name: 'center',
        component: './account/center',
      },
      {
        path: '/account/settings',
        name: 'settings',
        component: './account/settings',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/sub-page',
      },
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        component: './Admin',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: '404',
    layout: false,
    path: './*',
  },
];
