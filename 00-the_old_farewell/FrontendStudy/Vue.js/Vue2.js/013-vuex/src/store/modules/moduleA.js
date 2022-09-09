export default {
  state: {
    name: 'module'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    aChangeName(context) {
      setTimeout(() => {
        context.commit('updateName', 'change');
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + '*****tinyRipple';
    },
    fullNameTemp(state, getters) {
      return state.name + '   ' + getters.fullName + '  temp';
    },
    fullNameCounter(state, getters, rootState) {
      return state.name + '   ' + getters.fullName + '   temp   ' + rootState.counter;
    }
  }
}
