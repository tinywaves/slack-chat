import * as types  from './mutation-types'

export default {
  [types.INCREMENT](state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  incrementVal(state, payload) {
    // 普通的提交风格
    // state.counter += val;
    // 特殊的提交风格，提交一个对象
    state.counter += payload.val
  },
  addStudent(state, val) {
    state.students.push(val);
  },
  changeInfo(state) {
    // 会发生响应
    state.info.name = 'ZDH';
    // mutations 中的异步任务在 devtools 中不能监测到，因此推荐在 actions 中执行异步任务
    // setTimeout(() => {
    //   state.info.name = 'ZDH';
    // }, 1000)
    // 不会发生响应
    // state.info['address'] = '杭州';
    // delete state.info.age;
    // 实现响应式
    Vue.set(state.info, 'address', '杭州');
    Vue.delete(state.info, 'age');
  }
}
