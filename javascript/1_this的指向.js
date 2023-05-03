// function foo() {
//   console.log(this);
// }
// const f = foo.bind('bind');
// f.apply('apply'); // [String: 'bind']
// f.call('call'); // [String: 'bind']

// var name = 'window';
// var person = {
//   name: 'person',
//   sayName: function () {
//     console.log(this.name);
//   }
// };
// function sayName() {
//   var fn = person.sayName;
//   fn(); // window -> 独立函数调用
//   person.sayName(); // person -> 隐式绑定
//   (person.sayName)(); // person -> 隐式绑定
//   (b = person.sayName)(); // window -> 间接函数引用
// }
// sayName();

// var name = 'window';
// var person1 = {
//   name: 'person1',
//   foo1: function () {
//     console.log(this.name);
//   },
//   foo2: () => console.log(this.name),
//   foo3: function () {
//     return function () {
//       console.log(this.name);
//     };
//   },
//   foo4: function () {
//     return () => {
//       console.log(this.name);
//     };
//   }
// };
// var person2 = { name: 'person2' };

// person1.foo1(); // person1 -> 隐式绑定
// person1.foo1.call(person2); // person2 -> 显式绑定
// person1.foo2(); // window -> arrow function: 上层作用域查找
// person1.foo2.call(person2); // window -> arrow function: 上层作用域查找
// person1.foo3()(); // window -> 独立函数调用
// person1.foo3.call(person2)(); // window -> 独立函数调用
// person1.foo3().call(person2); // person2 -> 显式绑定
// person1.foo4()(); // person1 -> arrow function: 上层作用域查找
// person1.foo4.call(person2)(); // person2 -> arrow function: 上层作用域查找
// person1.foo4().call(person2); // person1 -> arrow function: 上层作用域查找

// var name = 'window';
// function Person(name) {
//   this.name = name;
//   this.foo1 = function () {
//     console.log(this.name);
//   };
//   this.foo2 = () => console.log(this.name);
//   this.foo3 = function () {
//     return function () {
//       console.log(this.name);
//     };
//   };
//   this.foo4 = function () {
//     return () => {
//       console.log(this.name);
//     };
//   };
// }
// var person1 = new Person('person1');
// var person2 = new Person('person2');

// person1.foo1(); // person1 -> 隐式绑定
// person1.foo1.call(person2); // person2 -> 显式绑定
// person1.foo2(); // person1 -> arrow function: 上层作用域查找
// person1.foo2.call(person2); // person1 -> arrow function: 上层作用域查找
// person1.foo3()(); // window -> 独立函数调用
// person1.foo3.call(person2)(); // window -> 独立函数调用
// person1.foo3().call(person2); // person2 -> 显式绑定
// person1.foo4()(); // person1 -> arrow function: 上层作用域查找
// person1.foo4.call(person2)(); // person2 -> arrow function: 上层作用域查找
// person1.foo4().call(person2); // person1 -> arrow function: 上层作用域查找

var name = 'window';
function Person(name) {
  this.name = name;
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      return () => {
        console.log(this.name);
      };
    }
  };
}
var person1 = new Person('person1');
var person2 = new Person('person2');

person1.obj.foo1()(); // window -> 独立函数调用
person1.obj.foo1.call(person2)(); // window -> 独立函数调用
person1.obj.foo1().call(person2); // person2 -> 显式绑定
person1.obj.foo2()(); // obj -> arrow function: 上层作用域查找
person1.obj.foo2.call(person2)(); // person2 -> arrow function: 上层作用域查找
person1.obj.foo2().call(person2); // obj -> arrow function: 上层作用域查找
