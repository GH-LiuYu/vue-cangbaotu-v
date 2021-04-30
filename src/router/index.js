import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/views/index/Index'),
    name:'main',
    meta: { title: '主页' },
    children: [
      {
        path: '/index',
        name:'main',
        component: () => import('@/views/index/Main'),//这种方式不需要在上面import引入
        meta: { title: '主页' }
      }
    ]
  },
  {
    path: '/test',
    component: () => import('@/views/test/Test'),
  },
  {
    path: '/register',
    component: () => import('@/views/user/Register'),
  },


]

const router = new Router({
  routes//注入路由组
})
export default router
