<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <button @click="clickHandle('addParame')">添加参数</button>
    <b>{{ food }}</b>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  methods: {
    clickHandle (type) {
      if (type === 'addParame') {
        const name = 'zhangsan'
        this.$router.push({
          // 下面事动态路由传参的例子  开始
          name: 'argue',
          params: {
            name: 'zhangsan'
          }
          // 下面事动态路由传参的例子 结束
          // 一下是再地址添加参数 类似于 http:xxx?name=zhangsan 开始
          // name: 'parent',
          // query: {
          //   name: 'zhangsan'
          // }
          // 一下是再地址添加参数 类似于 http:xxx?name=zhangsan 结束
          // 以下是ex6 方式 开始
          // path: `/argue/${name}`
          // 以下是ex6 方式 结束
        })
      }
    }
  }
}
</script>
