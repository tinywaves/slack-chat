<template>
  <div>
    {{info.name}}-{{info.age}}
    <button @click="changeInfo">changeInfo</button>
  </div>
</template>

<script>
  import { reactive, watch, ref } from 'vue'

  export default {
    setup() {
      const info = reactive({
        name: 'zhengdonghui',
        age: 20
      })
      // 1. 传入 getter 函数
      // watch(() => info.name, (newValue, oldValue) => {
      //   console.log('newValue:', newValue, 'oldValue:', oldValue);
      // })
      // 2. 传入 reactive 对象，得到 reactive 对象
      // watch(info, (newValue, oldValue) => {
      //   console.log('newValue:', newValue, 'oldValue:', oldValue);
      // })
      watch(() => {
        return {...info}
      }, (newValue, oldValue) => {
        console.log('newValue:', newValue, 'oldValue:', oldValue);
      }, {
        deep: true,
        immediate: true
      })
      // 3. 传入 ref 对象，得到值
      // const name = ref('ZDH')
      // watch(name, (newValue, oldValue) => {
      //   console.log('newValue:', newValue, 'oldValue:', oldValue);
      // })
      const changeInfo = () => {
        info.name = 'tinyRipple'
        // name.value = 'tinyRipple'
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