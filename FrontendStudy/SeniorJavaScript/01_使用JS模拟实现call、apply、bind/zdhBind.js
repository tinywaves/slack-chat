// 给所有函数添加一个zdhBind方法，因此可以使用函数对象原型
/**
 * zdhBind
 * @param {*} thisArg 需要绑定的this指向
 * @param  {...any} args 外部调用函数的参数
 * @returns 返回外部调用函数的运算结果
 */
Function.prototype.zdhBind = function (thisArg, ...args) {
  // 传入的thisArg数据类型并不确定，因此统一转化为对象类型
  // 若传入为null和undefined则赋值为window，实现JS-bind中若传入null和undefined则将this绑定为window
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window
  // 当外部函数在调用zdhBind函数时进行了隐式绑定，因此zdhBind函数中的this就指向该外部函数
  // 给thisArg添加this指向的函数
  thisArg.fn = this
  return function (...restArgs) {
    // 将所有参数进行拼接
    var finalArgs = [...args, ...restArgs]
    // 对该函数进行调用，因为fn在调用时进行了隐式绑定，因此fn函数(外部函数)的this就绑定了thisArg
    var result = thisArg.fn(...finalArgs)
    // 删除thisArg的fn函数
    delete thisArg.fn
    return result
  }
}

function foo() {
  console.log('zdhBind', this)
}

function bar(number1, number2) {
  console.log('zdhBind', this)
  return number1 + number2
}

// 给zdhBind中的this进行了隐式绑定
var baz1 = foo.zdhBind('foo-bind')
baz1() // zdhBind String {'foo-bind', fn: ƒ}
var baz2 = bar.zdhBind('foo-bind', 10)
console.log(baz2(20)) // zdhBind String {'foo-bind', fn: ƒ} 30
