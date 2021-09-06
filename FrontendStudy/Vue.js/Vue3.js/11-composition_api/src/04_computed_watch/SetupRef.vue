<template>
  <div>
    <h2 ref="name">zhengdonghui</h2>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue'

  export default {
    setup() {
      const name = ref(null)

      watchEffect(() => {
        console.log(name.value);
      }, {
        flush: 'post'
      })

      return {
        name
      }
    }
  }
</script>

<style scoped>

</style>