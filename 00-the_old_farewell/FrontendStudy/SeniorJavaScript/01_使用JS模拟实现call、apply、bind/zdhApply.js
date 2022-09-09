// 给所有函数添加一个zdhApply方法，因此可以使用函数对象原型
/**
 * zdhApply
 * @param {*} thisArg 需要绑定的this指向
 * @param {Array} argArray 外部调用函数的参数
 * @returns 返回外部调用函数的运算结果
 */
Function.prototype.zdhApply = function (thisArg, argArray) {
  // 传入的thisArg数据类型并不确定，因此统一转化为对象类型
  // 若传入为null和undefined则赋值为window，实现JS-apply中若传入null和undefined则将this绑定为window
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
  // 当外部函数在调用zdhApply函数时进行了隐式绑定，因此zdhApply函数中的this就指向该外部函数
  // 给thisArg添加this指向的函数
  thisArg.fn = this
  // 若外部函数没有传入参数，则此时argArray为undefined，对undefined进行展开运算会报错
  argArray = argArray || []
  // 对该函数进行调用，因为fn在调用时进行了隐式绑定，因此fn函数(外部函数)的this就绑定了thisArg
  var result = thisArg.fn(...argArray)
  // 删除thisArg的fn函数
  delete thisArg.fn
  return result
}

function foo() {
  console.log('zdhApply', this)
}

function bar(number1, number2) {
  console.log('zdhApply', this)
  return number1 + number2
}

// 给zdhApply中的this进行了隐式绑定
foo.zdhApply() // zdhApply Window
foo.zdhApply(null) // zdhApply Window
foo.zdhApply(undefined) // zdhApply Window
foo.zdhApply(0) // zdhApply Number {0, fn: ƒ}
foo.zdhApply({}) // zdhApply {fn: ƒ}
foo.zdhApply('foo-apply') // zdhApply String {'foo-apply', fn: ƒ}
console.log(bar.zdhApply('bar-apply', [10, 20])) // zdhApply String {'bar-apply', fn: ƒ} 30
