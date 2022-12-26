// 小程序发起网络请求
function request(params) {
  return new Promise((resolve, reject) => {
    my.request({
      ...params,
      success(data) {
        resolve(data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export {
  request
}
