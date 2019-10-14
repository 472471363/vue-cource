<template>
  <div>
    <!--<a-input v-model="inputValue" />-->
    <a-input @input="handleInput" />
<!--    {{ inputValue }}-->
    <a-show :content="inputValue"/>

    <post-blog title="blog_title"/>
    <welcom-buttom @welcome="sayHi"/>
    <p>appName : {{ appName }} -> appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName : {{ userName }}</p>
    <button @click="changeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改userName</button>
  </div>
</template>

<script>
import AInput from '_c/AInput'
import AShow from '_c/AShow'
import postBlog from '_c/post-blog'
import welcomButtom from '_c/welcomButtom'
/*这是es6的写法 相当于
import vuex from 'vuex'
const mapState = vuex.mapState*/
import { mapState } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    // 写法1 开始
    // ...mapState([
    //   'appName'
    // ])
    // 写法1 结束

    // 写法2 开始
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // 写法2 结束

    // 写法3 开始
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion
    }),
    // 写法3 结束
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    }
  },

  components: { AInput, AShow, postBlog, welcomButtom },
  methods: {
    handleInput (val) {
      this.inputValue = val
    },
    sayHi (val) {
      alert(val)
    },
    changeAppName () {
      this.$store.commit('SET_APPNAME', { appName: 'new appName' })
      this.$store.commit('SET_APPVERSION')
    },
    changeUserName () {
      this.$store.commit('SET_USER_NAME', { userName: 'wangmazi' })
    }
  }
}
</script>

<style scoped>

</style>
