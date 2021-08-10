// CommonJS 的模块规范
const { add, mul } = require('./mathUtils')
console.log(add(10, 10));
console.log(mul(10, 10));

// ES6 的模块规范
import { name, age } from './info';
console.log(name);
console.log(age);