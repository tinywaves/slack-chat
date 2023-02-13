function fun1(name: string): number {
  return name.length;
}
const fun2 = function (name: string): number {
  return name.length;
};
const fun3: (name: string) => number = function (name) {
  return name.length;
};

const fun4 = (name: string): number => name.length; // 推荐的方式
const fun5: (name: string) => number = (name) => name.length; // ⬇️改进
type FunType6 = (name: string) => number;
const fun6: FunType6 = (name) => name.length;
// callable interface
interface FunStruct {
  (name: string): number;
}

const fun7 = () => { };
const fun8 = () => { return; };
const fun9 = (): undefined => { return; };

const fun10 = (number: number = 10): number => number + 10;
const fun11 = (number?: number): number => number + 10;
const fun12 = (arg: string, ...rest: any[]) => { };
const fun13 = (arg: string, ...rest: [boolean, number]) => { };
fun13('string', true, 1);

// 重载签名
function fun14(foo: number, bar: true): string;
// 重载签名
function fun14(foo: number, bar?: false): number;
// 实现签名，包含重载签名的所有可能情况
function fun14(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo;
  }
}

const aa: string = 'ss';

let bbb: 'ss' | 'kk' = aa;
