<template>
  <div>
    <h2>About</h2>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
  import emitter from '../utils/eventBus'

  export default {
    methods: {
      btnClick() {
        console.log('About按钮点击');
        emitter.emit('zdh', 'eventBus')
      }
    }
  }
</script>

<style scoped>

</style>