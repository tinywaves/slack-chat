<template>
  <div class="header">
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="number" v-model.number="n">
    <button @click="incrementN">+n</button>
    <h2>Header</h2>
    <h2>Nav-bar</h2>
  </div>
</template>

<script>
export default {
  // 数组写法
  emits: ['add', 'sub', 'addN'],
  // 对象写法
  // emits: {
  //   add: null,
  //   sub: null,
  //   addN: payload => {
  //     console.log(payload);
  //     return true
  //   }
  // },
  data() {
    return {
      n: 0
    }
  },
  methods: {
    increment() {
      console.log('+1');
      this.$emit('add')
    },
    decrement() {
      console.log('-1');
      this.$emit('sub')
    },
    incrementN() {
      console.log('+', this.n);
      this.$emit('addN', this.n)
    }
  }
};
</script>

<style scoped></style>
