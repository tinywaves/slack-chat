<template>
  <div id="app">
    <h2>App</h2>
    <h1>当前计数：{{count}}</h1>
    <Header @add="this.count++" @sub="this.count--" @addN="addN"></Header>
    <Main></Main>
    <Footer :footers="message1" :content="message2"></Footer>
    <button @click="addArray">+</button>
    <about/>
  </div>
</template>

<script>
  // 实现响应式数据
  import { computed } from 'vue'

  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import About  from './components/About.vue'

  export default {
    data() {
      return {
        message1: '父传子',
        message2: '测试',
        count: 0,
        array: ['a', 'b', 'c']
      }
    },
    methods: {
      addN(number) {
        this.count += number
      },
      addArray() {
        this.array.push('array')
        console.log(this.array);
      }
    },
    components: {
      Header,
      Main,
      Footer,
      About
    },
    provide() {
      return {
        test: 'ProvideAndInject',
        name: 'tinyRipple',
        arrayLength: computed(() => this.array.length) // 返回 ref 对象
      }
    }
  }
</script>

<style scoped>
  h2 {
    color: #f00;
  }
</style>
