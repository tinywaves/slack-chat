// CommonJS 的模块规范
const { add, mul } = require('./js/mathUtils')
console.log(add(10, 10));
console.log(mul(10, 10));

// ES6 的模块规范
import { name, age } from './js/info';
console.log(name);
console.log(age);

// 依赖 css 文件
require('./css/normal.css')

// 依赖 less 文件
require('./css/special.less')