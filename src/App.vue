<template>
  <div id="app">
    <div id="nav">
<!--      router-link 实际封装了一个a标签-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
<!--      一下是使用命名路由示例开始-->
      <!--| <router-link :to="{ name:'home' }">Home2</router-link> |
      <router-link :to="{ name:'about' }">About2</router-link>-->
<!--      一下是使用命名路由示例结束-->

    </div>
<!--    router-view 是渲染组件-->
    <router-view/>

<!--    命名视图开始-->
    <router-view name="email"/>
    <router-view name="tel"/>
<!--    命名视图结束-->
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
