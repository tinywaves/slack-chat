<template>
  <div>
    Home-{{message}}
    <h2>{{name}}-{{age}}</h2>
    <!-- 在 template 中使用 ref 对象会自动进行浅层解包 -->
    <h2>计数：{{count}}</h2>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue'

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    /**
     * props: 父组件传递的属性
     */
    // setup(props, context) {
    //   console.log(props.message);
    //   console.log(context.attrs.id, context.attrs.class);
    //   console.log(context.slots);
    //   console.log(context.emit);
    // }
    // context 对象解构
    setup(props, { attrs, slots, emit }) {
      console.log(props.message);
      console.log(attrs.id, attrs.class);
      console.log(slots);
      console.log(emit);

      // const state = reactive({
      //   count: 0
      // })
      // count 为一个可响应式引用
      let count = ref(0)
      // 局部函数
      const increment = () => {
        // state.count++
        // 逻辑代码不会进行、自动解包
        count.value++
      }
      const decrement = () => {
        // state.count--
        count.value--
      }
      return {
        name: 'zhengdonghui',
        age: 20,
        // state,
        count,
        increment,
        decrement
      }
    }
  }
</script>

<style scoped>

</style>