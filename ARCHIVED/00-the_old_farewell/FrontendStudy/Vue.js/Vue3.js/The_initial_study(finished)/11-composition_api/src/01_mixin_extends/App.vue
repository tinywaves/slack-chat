<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">foo</button>
  </div>
  <home/>
</template>

<script>
  import { demoMixin } from './mixins/demoMixin'
  import Home from './pages/Home.vue'

  export default {
    mixins: [demoMixin],
    data() {
      return {
        message: 'component'
      }
    },
    methods: {
      foo() {
        console.log('foo-component');
      }
    },
    created() {
      console.log('component created');
    },
    components: {
      Home
    }
  }
</script>

<style scoped>

</style>