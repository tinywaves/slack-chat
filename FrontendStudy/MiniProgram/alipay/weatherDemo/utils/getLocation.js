// 获取当前位置
function getLocation() {
  return new Promise((resolve, reject) => {
    my.getLocation({
      type: 1,
      success(data) {
        resolve(data)
      },
      fail(err) {
        reject(err)
      },
      complete() {}
    })
  })
}

export {
  getLocation
}