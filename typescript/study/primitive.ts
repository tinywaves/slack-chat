const a: string = 'string';
const b: number = 1;
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const f: object = {};
const g: symbol = Symbol('unique');
const h: bigint = BigInt(9007199254740991);

// 在ts中，null和undefined类型是有具体意义的类型，在没有开启strictNullChecks检查的情况下会被视作其他类型的子类型
const temp1: null = null;
const temp2: undefined = undefined;
const temp3: string = null;
const temp4: string = undefined;
const temp5: void = null;
const temp6: void = undefined;

const fun1 = () => { };
const fun2 = () => { return; };
const fun3 = () => console.log('test');
const fun4 = () => (1);

const array1: number[] = [];
const array2: Array<number> = [];
const array3 = [1, 2, 3];
array3[10];
const array4: [number, number, number] = [1, 2, 3]; // tuple
// Tuple type '[number, number, number]' of length '3' has no element at index '10'.
// array4[10];
const array5: [number, string, boolean] = [1, '2', true];
const array6: [number, string?, boolean?] = [0];
// is equal to
const array7: [number, string?, boolean?] = [0, ,];
const i = array7[1];
const j = array7[2];
type Array7Length = typeof array7.length; // type Array7Length = 1 | 2 | 3
const array8: [name: string, age: number, is?: boolean] = ['tinyRipple', 21, true]; // labeled tuple
const array9: number[] = [];
const [a1, a2, ...rest1] = array9;
const array10: [number] = [0];
// Tuple type '[number]' of length '1' has no element at index '1'.
// const [t1, t2, ...rest2] = array10;

interface IDescription {
  readonly name: string;
  age: number;
  is?: boolean;
  fun?: Function;
}
const obj1: IDescription = {
  name: '1',
  age: 1,
  is: true
};
const obj2: IDescription = {
  name: '2',
  age: 2,
};
obj1.fun();
// Cannot assign to 'name' because it is a read-only property.
// obj2.name = '3';

// 在TypeScript中表现为Object包含了所有的类型
const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;
// 对于undefined、null、void(0)，需要关闭strictNullChecks 👆
const tmp4: Object = 'Object';
const tmp5: Object = 599;
const tmp6: Object = { name: 'Object' };
const tmp7: Object = () => { };
const tmp8: Object = [];
// String是一个装箱类型，代表了undefined、null和对应的拆箱类型string，Boolean等类似
const tmpS1: String = null;
const tmpS2: String = undefined;
const tmpS3: String = 'String';
// Type 'number' is not assignable to type 'String'.
// const tmpS4: String = 1

// ⭐️ 在任何情况下都不应该使用这些装箱类型

const tmpO1: object = undefined;
const tmpO2: object = null;
const tmpO3: object = void 0;
// Type 'string' is not assignable to type 'object'.
// const tmpO4: object = 'Object';
const tmpO5: object = { name: 'Object' };
const tmpO6: object = () => { };
const tmpO7: object = [];

const t1: {} = undefined; // 仅在关闭strictNullChecks时成立，下同
const t2: {} = null;
const t3: {} = void 0; // void 0 等价于 undefined
const t4: {} = '{}';
const t5: {} = 1;
const t6: {} = { name: '{}' };
const t7: {} = () => { };
const t8: {} = [];
// 不能进行赋值操作
// Property 'name' does not exist on type '{}'.
// t6.name = 'change';

// 推荐使用Record<string, any>或者Record<string unknown>表示对象
// 推荐使用unknown[]或any[]表示数组
// 推荐使用(...args: any[]) => any表示函数

export { };
