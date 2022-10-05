// null类型只能有一个值null
const n: null = null;
// undefined类型只能有一个值undefined
const u: undefined = undefined;

// any
let message: any = 1;
message = '1';

// unknown
let result: unknown;

// never
function foo(): never {
  while (true) {}
}
function bar(): never {
  throw Error();
}

// 元组
let tuple: [string, number] = ['tinyRipple', 2001];

// 对象类型
function printPoint1(point: { x: number; y: number }) {
  console.log(point.x, point.y);
}
// z是可选类型
function printPoint2(point: { x: number; y: number; z?: number }) {
  console.log(point.x, point.y, point.z);
}

// 类型断言
const ele = document.getElementById('tinyRipple') as HTMLImageElement;
ele.src = '';

class Person {}
class Student extends Person {
  study() {}
}
function baz(p: Person) {
  (p as Student).study();
}
const student = new Student();
baz(student);

// !
function temp(message?: string) {
  console.log(message!.length);
}

// ?.
type People = {
  name: string;
  age?: number;
  friend?: {
    name: string;
    girlFriend?: {
      name: string;
    };
  };
};

const people: People = {
  name: 'tinyRipple',
  friend: {
    name: 'zdh'
  }
};
console.log(people.name);
console.log(people.age);
console.log(people.friend?.name);
console.log(people.friend?.girlFriend?.name);

// !!
const words: string = 'words';
console.log(!!words); // true

// ??
let nullType: string | null = null;
const output = nullType ?? 'default'; // default

// 字面量类型
let align: 'top' | 'bottom' | 'left' | 'right';
align = 'left'; // √
// align = 'tinyRipple' ×

// 字面量类型推理
type method = 'POST' | 'GET';
function request(url: string, method: method) {}
const options = {
  url: '',
  method: 'POST'
} as const;
request(options.url, options.method);

// 剩余参数
function add(...numbers: number[]) {
  let total = 0;
  for (const item of numbers) {
    total += item;
  }
  return total;
}
add(10, 20); // 30
add(10, 20, 30); // 60

// 函数的重载
function cal(v1: number, v2: number): number;
function cal(v1: string, v2: string): string;
function cal(v1: any, v2: any): any {
  return v1 + v2;
}
console.log(cal(20, 30)); // 50
console.log(cal('A', 'B')); // AB

export {};
