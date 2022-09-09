// number
let a: number;
a = 1;
// a = 'string'; ×

// string
let b: string;
b = 'string';
// b = 1; ×

// boolean
let c: boolean = true;
c = false;
let d = false;
// d = 1; × 自动类型推导

// 函数
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(1, 2));
// sum('a', 'b'); ×
