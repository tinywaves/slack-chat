export default {
  powerCounter(state) {
    return state.counter * state.counter;
  },
  studentsVal(state) {
    return state.students.filter(s => s.id >= 2);
  },
  studentsAgeVal(state) {
    return id => {
      return state.students.filter(s => s.id >= id);
    }
  }
}
