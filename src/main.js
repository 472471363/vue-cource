import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Bus from '@/lib/bus'

Vue.config.productionTip = false

// 把bus注册到vue的根实例里 开始
Vue.prototype.$bus = Bus
// 把bus注册到vue的根实例里 结束
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
