<template>
  <div>
    <button @click="update">update</button>
  </div>
</template>

<script>
  import { readonly, reactive, ref } from 'vue'

  export default {
    setup() {
      // 1. 普通对象
      const info1 = {name: 'zdh'}
      const readonlyInfo1 = readonly(info1)
      // 2. 响应式对象
      const info2 = reactive({name: 'zdh'})
      const readonlyInfo2 = readonly(info2)
      // 3. ref 对象
      const info3 = ref('zdh')
      const readonlyInfo3 = readonly(info3)

      const update = () => {
        readonlyInfo1.name = 'tinyRipple'
        readonlyInfo2.name = 'tinyRipple'
        readonlyInfo3.value = 'tinyRipple'
      }

      return {
        update
      }
    }
  }
</script>

<style scoped>

</style>