import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

/**
 * 公共页面
 * */
const Login = r => require.ensure([], () => r(require('@/components/Login')), 'Login')
// const Top = r => require.ensure([], () => r(require('@/components/layout/Top')), 'Top')
// const Menux = r => require.ensure([], () => r(require('@/components/layout/Menux')), 'Menux')
const Main = r => require.ensure([], () => r(require('@/components/Main')), 'Main')
/**
 * chen
 * */
const Chen = r => require.ensure([], () => r(require('@/components/business/chen/Chen')), 'Chen')
/**
 * jun
 * */
const Jun = r => require.ensure([], () => r(require('@/components/business/jun/Jun')), 'Jun')

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    },
      {
        path: '/main',
        component: Main,
        children: [
          {
            path: '',
            redirect: 'chen'
          },
          {
            path: 'chen',
            name: 'Chen',
            component: Chen
          },
          {
            path: 'jun',
            name: 'Jun',
            component: Jun
          }
        ]
      }
  ]
})
