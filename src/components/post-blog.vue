<template>
    <div>
      {{ title }}
    </div>
</template>

<script>
export default {
  name: 'post-blog',
  props: {
    title: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
