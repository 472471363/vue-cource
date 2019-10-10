import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)

// 主要配置路由实例
export default new Router({
  // mode 的默认值事‘hash’ 也就是在地址重存在一个“#”号
  mode: 'history',
  routes
})
