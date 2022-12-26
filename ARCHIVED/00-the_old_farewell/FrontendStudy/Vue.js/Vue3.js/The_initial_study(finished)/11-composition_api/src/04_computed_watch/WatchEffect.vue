<template>
  <div>
    {{name}}-{{age}}
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
  import { watchEffect, watch, ref } from 'vue'

  export default {
    setup() {
      const name = ref('zhengdonghui')
      const age = ref(20)

      const changeName = () => name.value = 'tinyRipple'
      const changeAge = () => {
        age.value++
        if (age.value === 25) {
          stopWatch()
        }
      }

      const stopWatch = watchEffect((onInvalidate) => {
        const timer = setTimeout(() => {
          console.log('发送网络请求');
        }, 2000);
        onInvalidate(() => {
          // 清楚副作用
          clearTimeout(timer)
          console.log('onInvalidate');

        })
        console.log(name.value, age.value);
      })

      return {
        name,
        age,
        changeName,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>