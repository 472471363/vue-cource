import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)

const router = new Router({
  routes
})

// 下面演示导航守卫 —— 全局守卫 开始
// beforeEach是前置路由守卫（这玩意就有点像spring aop的织入），他又一个回调函数
// to: 即将要进入的路由对象
// from: 当前导航正要离开的路由对象
// next: 一个函数对象 具体可以参考一下vue router 的导航守卫那个章节

const HAS_LOGIN = true

// router.beforeEach((to, from, next) => {
//   // 如果将要跳转的是登陆页面，那么判断它是否已经登陆，如果登陆直接进行跳转
//   if (to.name !== 'login') {
//     if (HAS_LOGIN) next()
//     // 如果没有登陆，则跳转到登陆页面
//     else next({ name: 'login' })
//   } else {
//     if (HAS_LOGIN) next({ name: 'home' })
//     next()
//   }
// })
// 下面演示导航守卫 —— 全局守卫 结束

// 后置钩子 开始
router.afterEach((to, from) => {
  //
})
// 后置钩子 结束

export default router

// 主要配置路由实例
// export default new Router({
//   // mode 的默认值事‘hash’ 也就是在地址重存在一个“#”号
//   mode: 'history',
//   routes
// })
