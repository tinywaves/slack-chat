let objectVal: {
  name: string;
  id?: number;
};

objectVal = {
  name: 'tinyRipple',
  id: 1
};
console.log(objectVal); // { name: 'tinyRipple', id: 1 }
objectVal = {
  name: 'zdh'
};
console.log(objectVal); // { name: 'zdh' }

let anyObject: {
  name: string;
  [prop: string]: any;
};

anyObject = {
  name: 'A'
};
console.log(anyObject); // { name: 'A' }
anyObject = {
  name: 'B',
  id: 1
};
console.log(anyObject); // { name: 'B', id: 1 }
anyObject = {
  name: 'C',
  id: 2,
  flag: true
};
console.log(anyObject); // { name: 'C', id: 2, flag: true }

// 声明一个函数,参数为两个number类型,返回值为number类型
let fn: (val1: number, val2: number) => number;

fn = function (n1, n2) {
  return n1 + n2;
};

let obj: { name: string } & { id: number };

obj = {
  name: 'TR',
  id: 100
};
console.log(obj); // { name: 'TR', id: 100 }
