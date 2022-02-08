class Person {
  // 定义实例属性
  name: string = 'tinyRipple';
  age: number;

  // 定义静态属性
  static id: number = 1;

  // 只读属性
  static readonly testVal: number = 1000;

  // 构造函数
  constructor(age: number) {
    this.age = age;
  }

  // 定义方法
  fn() {
    console.log('function');
  }

  // 定义静态方法
  static fnStatic() {
    console.log('static function');
  }
}

const person = new Person(5);
console.log(person); // Person { name: 'tinyRipple', age: 5 }
console.log(person.name, person.age, Person.id, Person.testVal); // tinyRipple 5 1 1000
person.fn(); // function
Person.fnStatic(); // static function
