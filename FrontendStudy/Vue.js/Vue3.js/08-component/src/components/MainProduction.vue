<template>
  <ul>
    <li>Production1</li>
    <li>Production2</li>
    <li>Production3</li>
  </ul>
</template>

<script>
import emitter from '../utils/eventBus'

export default {
  created() {
    emitter.on('zdh', name => {
      console.log(name);
    })
    emitter.on('*', (type, info) => {
      console.log(type, info);
    })
  }
};
</script>

<style scoped></style>
