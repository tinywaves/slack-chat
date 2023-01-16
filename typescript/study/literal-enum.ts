// primitive literal type
interface IResponse {
  code: 10000 | 10001 | 50000;
  status: 'success' | 'failure';
  data: any;
}
declare const response: IResponse;
if (response.status === 'success') {
  console.log('success');
}
const a: 'string' = 'string';
const b: 1 = 1;
const c: true = true;
interface ILiteral {
  bool: true | false;
  no: 1 | 2 | 3;
  str: 'a' | 'b' | 'c';
}

// union type
interface IUnion {
  // 对于联合类型中的函数类型需要使用()包裹
  // 可以在联合类型中进一步嵌套联合类型，但这些嵌套的联合类型最终会被展平到第一级
  mixed: 1 | 'tinyRipple' | boolean | {} | (() => {}) | (100 | 200);
}
interface IUser {
  user: { vip: true; expires: string; } | { vip: false; promotion: string; };
}
type Code = 10 | 20 | 30;
type Status = 'success' | 'failure';

// object literal type
interface IAccount {
  account: {
    name: 'tinyRipple';
    age: 0;
  };
}
const obj: IAccount = {
  account: {
    name: 'tinyRipple',
    age: 0
  }
};
// 无论是原始类型还是对象类型的字面量类型，它们的本质都是类型而不是值。因此在编译时会被擦除，同时他们是被存储在内存中的类型空间而非值空间

// enum
enum PageUrl {
  HOMEPAGE = 'url1',
  SETINGPAGE = 'url2'
}
const home = PageUrl.HOMEPAGE;
const setting = PageUrl.SETINGPAGE;
// 默认使用数字枚举
enum TestEnum1 {
  Foo,
  Bar,
  Baz
}
enum TestEnum2 {
  Foo,
  Bar = 10,
  Baz
}
// 延迟求值
// 如果使用了延迟求值，那么没有使用延迟求值的枚举成员必须放在使用常量枚举值声明的成员之后或者放在第一位
const returnValue = () => 100 + 100;
enum TestEnum3 {
  Foo, // 0
  Bar = returnValue(), // 200
  Baz = 500 // 500
}
enum Mixed {
  n = 10,
  s = 's'
}
// 对象：key->value；枚举：key<->value
enum TestEnum4 {
  Foo,
  Baz,
  Bar
}
console.log(TestEnum4.Bar); // 2
console.log(TestEnum4[1]); // 'Baz'
// 仅有值为数字的枚举成员才能够进行双向枚举，字符串枚举成员仍然只会进行单向映射
// 常量枚举
const enum TestEnum5 {
  Foo,
  Baz,
  Bar
}
// 对于常量枚举只能通过枚举成员访问枚举值而不能通过值访问成员
