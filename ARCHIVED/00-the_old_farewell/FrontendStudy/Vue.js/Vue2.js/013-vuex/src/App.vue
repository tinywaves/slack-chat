<template>
  <div id="app">
    <h2>{{$store.state.a.name}}</h2>
    <button @click="btnClickModuleA">修改moduleA的name</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullNameTemp}}</h2>
    <h2>{{$store.getters.fullNameCounter}}</h2>
    <button @click="btnClickModuleAAsync">btnClickModuleAAsync-异步</button>
    <h2>{{message}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addVal(5)">+5</button>
    <button @click="addVal(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <button @click="changeInfoSync">更改信息-同步</button>
    <button @click="changeInfoAsync">更改信息-异步</button>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.state.info}}</h2>
    <hello-vuex></hello-vuex>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.studentsVal}}</h2>
    <h2>{{$store.getters.studentsAgeVal(1)}}</h2>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
import * as types from './store/mutation-types'

export default {
  name: 'App',
  data() {
    return {
      message: 'tinyRipple'
    }
  },
  methods: {
    addition() {
      this.$store.commit(types.INCREMENT);
    },
    subtraction() {
      this.$store.commit('decrement');
    },
    addVal(val) {
      // 普通的提交风格
      // this.$store.commit('incrementVal', val);
      // 特殊的提交风格，提交一个对象
      this.$store.commit({
        type: 'incrementVal',
        val
      })
    },
    addStudent() {
      this.$store.commit('addStudent', {id: 4, name: 'zhengdonghui'});
    },
    changeInfoSync() {
      this.$store.commit('changeInfo');
    },
    changeInfoAsync() {
      this.$store.dispatch('aChangeInfo', '携带的信息').then(res => {
        console.log(res);
      })
    },
    btnClickModuleA() {
      this.$store.commit('updateName', 'moduleA');
    },
    btnClickModuleAAsync() {
      this.$store.dispatch('aChangeName');
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>

</style>
