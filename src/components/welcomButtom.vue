<template>
    <button @click="handleClick">emit welcome button</button>
</template>

<script>
export default {
  name: 'welcomButtom',
  methods: {
    handleClick () {
      this.$emit('welcome', 'welcome to vue')
    }
  }
}
</script>

<style scoped>

</style>
