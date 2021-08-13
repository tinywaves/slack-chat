export default {
  aChangeInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('changeInfo')
        resolve('信息提交成功');
      }, 1000)
    })
  }
}
