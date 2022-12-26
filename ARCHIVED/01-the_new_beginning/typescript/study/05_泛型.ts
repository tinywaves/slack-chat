// 类型的参数化T，定义时不指定类型，使用时再指定类型
function foo<T, V>(arg1: T, arg2: V) {
  console.log(arg1, arg2);
}
foo<number, string>(0, 'tinyRipple');

// 泛型接口
interface Foo<T1 = string, T2 = number> {
  name: T1;
  type: T2;
}
const obj: Foo<string, number> = {
  name: 'tinyRipple',
  type: 0
};

// 泛型类
class Bar<T> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
// const bar = new Bar<string>('tinyRipple');
const bar: Bar<string> = new Bar('tinyRipple');

// 类型约束
interface Length {
  length: number;
}
function baz<T extends Length>(arg: T) {
  console.log(arg.length);
}
baz('tinyRipple'); // 10
baz([1, 2, 3]); // 3
baz({ length: 1 }); // 1
