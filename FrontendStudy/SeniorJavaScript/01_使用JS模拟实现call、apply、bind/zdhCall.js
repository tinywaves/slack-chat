// 给所有函数添加一个zdhCall方法，因此可以使用函数对象原型
/**
 * zdhCall
 * @param {*} thisArg 需要绑定的this指向
 * @param  {...any} args 外部调用函数的参数
 * @returns 返回外部调用函数的运算结果
 */
Function.prototype.zdhCall = function (thisArg, ...args) {
  // 传入的thisArg数据类型并不确定，因此统一转化为对象类型
  // 若传入为null和undefined则赋值为window，实现JS-call中若传入null和undefined则将this绑定为window
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  // 当外部函数在调用zdhCall函数时进行了隐式绑定，因此zdhCall函数中的this就指向该外部函数
  // 给thisArg添加this指向的函数
  thisArg.fn = this
  // 对该函数进行调用，因为fn在调用时进行了隐式绑定，因此fn函数(外部函数)的this就绑定了thisArg
  var result = thisArg.fn(...args)
  // 删除thisArg的fn函数
  delete thisArg.fn
  return result
}

function foo() {
  console.log('zdhCall', this)
}

function bar(number1, number2) {
  console.log('zdhCall', this)
  return number1 + number2
}

// 给zdhCall中的this进行了隐式绑定
foo.zdhCall() // zdhCall Window
foo.zdhCall(null) // zdhCall Window
foo.zdhCall(undefined) // zdhCall Window
foo.zdhCall(0) // zdhCall Number {0, fn: ƒ}
foo.zdhCall({}) // zdhCall {fn: ƒ}
foo.zdhCall('foo-call') // zdhCall String {'foo-call', fn: ƒ}
console.log(bar.zdhCall('bar-call', 10, 20)) // zdhCall String {'bar-call', fn: ƒ} 30
