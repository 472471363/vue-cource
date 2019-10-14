<template>
  <input @input="handleInput" :value="val" />
</template>

<script>
export default {
  name: 'AInput',
  props: {
    val: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
