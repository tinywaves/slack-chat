<template>
  <div id="app">
    <h2>App</h2>
    <h1>当前计数：{{count}}</h1>
    <Header @add="this.count++" @sub="this.count--" @addN="addN"></Header>
    <Main></Main>
    <Footer :footers="message1" :content="message2"></Footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'

  export default {
    data() {
      return {
        message1: '父传子',
        message2: '测试',
        count: 0
      }
    },
    methods: {
      addN(number) {
        this.count += number
      }
    },
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style scoped>
  h2 {
    color: #f00;
  }
</style>
