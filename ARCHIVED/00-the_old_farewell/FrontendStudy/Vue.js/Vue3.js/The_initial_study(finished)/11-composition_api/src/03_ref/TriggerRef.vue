<template>
  <div>
    <h2>{{info.name}}</h2>
    <button @click="changeInfo">change info</button>
  </div>
</template>

<script>
  import { ref, shallowRef, triggerRef } from 'vue'

  export default {
    setup() {
      // 浅层响应式
      const info = shallowRef({name: 'zhengdonghui'})
      const changeInfo = () => {
        info.value.name = 'tinyRipple'
        console.log(info.value.name);
        // 手动触发浅层响应式
        triggerRef(info)
      }

      return {
        info,
        changeInfo
      }
    }
  }
</script>

<style scoped>

</style>