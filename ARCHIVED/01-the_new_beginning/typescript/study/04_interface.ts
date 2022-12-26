// 1.通过类型别名
// type InfoType = {
//   name: string;
//   id?: number;
// };

// 2.通过接口定义对象类型
interface InfoType {
  readonly name: string;
  id?: number;
}

const info: InfoType = {
  name: 'tinyRipple'
};

// interface定义索引类型，限制键值数据类型
interface IdName {
  [id: number]: string;
}

const person: IdName = {
  2: 'tinyRipple',
  1: 'ZDH'
};

// 1.通过类型别名
// type CalFn = (number1: number, number2: number) => number;
// 2.通过接口定义函数类型
interface CalFn {
  (number1: number, number2: number): number;
}

function calculate(number1: number, number2: number, fn: CalFn) {
  return fn(number1, number2);
}
const add: CalFn = (number1, number2) => number1 + number2;
console.log(calculate(10, 20, add)); // 30

// 继承
interface ISwim {
  swim: () => void;
}

interface IFly {
  fly: () => void;
}

interface IAction extends ISwim, IFly {}

const action: IAction = {
  swim() {
    console.log('swim');
  },
  fly() {
    console.log('fly');
  }
};

// 联合类型，满足其一即可
type Type1 = ISwim | IFly;
// 交叉类型，需要满足全部，实现类似接口继承的效果
type Type2 = ISwim & IFly;

const obj1: Type1 = {
  swim() {
    console.log('swim');
  }
};
const obj2: Type2 = {
  swim() {
    console.log('swim');
  },
  fly() {
    console.log('fly');
  }
};

// 接口的实现
class Animal {}

interface Swim {
  swim: () => void;
}
interface Eat {
  eat: () => void;
}

// 1.继承为单继承
// 2.实现可以为多实现
class Person extends Animal implements Swim, Eat {
  swim() {
    console.log('swim');
  }
  eat() {
    console.log('eat');
  }
}

// 字面量赋值
interface Information {
  name: string;
  id: number;
}

const temp = {
  name: 'ZDH',
  id: 2001,
  nickNAme: 'tinyRipple'
};
// freshness擦除
const information: Information = temp;

export {};
