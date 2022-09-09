import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'


// 1. 安装插件
Vue.use(Vuex);

const state = {
  counter: 1000,
  students: [
    {id: 1, name: 'tiny'},
    {id: 2, name: 'ripple'},
    {id: 3, name: 'zdh'}
  ],
  info: {
    name: 'tinyRipple',
    age: 20,
    height: 168
  }
}

// 2. 创建 store 插件
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store
