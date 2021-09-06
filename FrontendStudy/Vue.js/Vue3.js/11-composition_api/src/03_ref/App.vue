<template>
  <div>
    <h2>{{info.name}}-{{age}}</h2>
    <button @click="ageIncrement">age + 3</button>
    <trigger-ref/>
    <debounce-ref/>
  </div>
</template>

<script>
  import { reactive, toRefs, toRef } from 'vue'

  import TriggerRef from './TriggerRef.vue'
  import DebounceRef from './DebounceRef.vue'

  export default {
    setup() {
      const info = reactive({name: 'zhengdonghui', age: 20})
      // 1. toRefs 解构所有属性
      // let { name, age } = toRefs(info)
      // 2. toRef 解构一个属性
      let age = toRef(info, 'age')
      const ageIncrement = () => {
        info.age++
        age.value += 3
        // +4
      }

      return {
        info,
        age,
        ageIncrement
      }
    },
    components: {
      TriggerRef,
      DebounceRef
    }
  }
</script>

<style scoped>

</style>