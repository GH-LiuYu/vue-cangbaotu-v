// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // 轻量级进度条
// import 'nprogress/nprogress.css' // progress bar style
// import { getToken} from './utils/auth'
// NProgress.configure({ showSpinner: false }) // NProgress Configuration
// const whiteList = ['/login','/', '/auth-redirect'] // 白名单
//
// //前置路由守卫--所有请求前都要经过这里
// // router.beforeEach((to, from, next) => {
// //     NProgress.start()
// //       const hasToken = getToken()
// //       if (hasToken) {//如果已经登录
// //           if (to.path === '/login') {
// //               next({ path: '/' })
// //               NProgress.done()
// //            }else {
// //               next()
// //               NProgress.done()
// //           }
// //       }else {//如果没有登录
// //           if (whiteList.indexOf(to.path) !== -1) { //如果在白名单，则往下继续，这就是跳出循环的关键
// //               next()
// //           } else {
// //               next('/login')
// //           }
// //       }
// // })
// // router.afterEach(() => {
// //     // finish progress bar
// //     NProgress.done()
// // })
