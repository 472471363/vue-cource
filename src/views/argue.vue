<template>
<!--  $route 表示当前路由对象-->
<!--    <div>{{ $route.params.name }}</div>-->
    <div>{{ name }}</div>
</template>

<script>
export default {
  // name: 'argue'
  props: {
    name: {
      type: String,
      default: 'zhangsan'
    }
  }
}
</script>


