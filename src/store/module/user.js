// 如果要获取模块中的属性，那么要使用 this.$store.state.模块名.xxx
const state = {
  //
  userName: 'zhangsan'
}

const mutations = {
  //
  SET_USER_NAME (state, payload) {
    state.userName = payload.userName
  }
}

const actions = {
  //
}

export default {
  state,
  mutations,
  actions
}
