import { sum } from './js/math'
const { priceFormat } = require('./js/format')

import './js/element'

console.log(sum(1, 2));
console.log(priceFormat(20));

const message = "Hello Webpack"
const names = ["a", "b", "c"]
names.forEach(item => console.log(item))
console.log(message);