function sayHello(person: string) {
  return 'Hello, ' + person
}
let user = 'Tom'
console.log(sayHello(user))

// function concat(person: string) {
//   return 'Hello, ' + person;
// }
// 类型“number[]”的参数不能赋给类型“string”的参数。ts(2345)
// let array = [0, 1, 2];
// console.log(concat(array));
