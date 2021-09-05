<template>
  <div>
    Category组件<button @click="increment">{{count}}</button>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>

<style scoped>

</style>