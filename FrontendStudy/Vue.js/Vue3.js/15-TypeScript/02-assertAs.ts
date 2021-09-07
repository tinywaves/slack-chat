// 类型断言
const myEle = document.getElementById('my-image') as HTMLImageElement
myEle.src = ''

class Person {}
class Student extends Person {
  study() {}
}
function sayHello(p: Person) {
  (p as Student).study()
}
const student = new Student()
sayHello(student)

const message = 'hello'
const temp: number = (message as any) as number

export {}