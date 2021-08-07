// var obj = {
//   get: function () {
//     console.log('从服务器获取数据');
//   },
//   post: function () {
//     console.log('向服务器提交数据');
//   }
// }

// module.exports = obj;

exports.get = function () {
  console.log('从服务器获取数据');
}
exports.post = function () {
  console.log('向服务器提交数据');
}

/* 
如果是一个对象，推荐使用 module.exports
如果模块中有多个方法 ，推荐在方法前加入 exports
*/