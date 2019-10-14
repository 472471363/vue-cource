import vue from 'vue'

const mutations = {
  SET_APPNAME (state, payload) {
    state.appName = payload.appName
  },
  // 之前没有属性，后面想添加属性
  SET_APPVERSION (state) {
    vue.set(state, 'appVersion', '2.0')
  }
}

export default mutations
