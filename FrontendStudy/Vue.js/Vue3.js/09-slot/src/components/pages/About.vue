<template>
  <div>
    About组件<button @click="increment">{{count}}</button>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      }
    },
    activated() {
      console.log('activated');
    },
    deactivated() {
      console.log('deactivated');
    },
    created() {
      console.log('created');
    },
  }
</script>

<style scoped>

</style>