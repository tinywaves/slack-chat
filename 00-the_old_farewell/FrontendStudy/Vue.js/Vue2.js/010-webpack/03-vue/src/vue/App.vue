<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue'
    }
  },
  methods: {
    btnClick() {
      console.log('按钮点击');
    }
  },
  components: {
    Cpn
  }
};
</script>

<style>
  .title {
    color: yellow;
  }
</style>