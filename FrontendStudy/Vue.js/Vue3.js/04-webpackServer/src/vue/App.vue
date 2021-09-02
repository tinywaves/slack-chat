<template>
  <div>
    <h2>Vue devServer</h2>
    <h2>HMR</h2>
    <h2>{{message}}</h2>
    <hello-vue />
  </div>
</template>

<script>
import HelloVue from "./HelloVue.vue"

export default {
  data() {
    return {
      message: 'Hello Vue3.js'
    }
  },
  components: {
    HelloVue
  }
}
</script>

<style>
  h2 {
    color: #f00;
  }
</style>