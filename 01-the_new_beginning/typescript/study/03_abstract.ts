// 抽象类不能实例化
abstract class Shape {
  // 抽象方法在子类中必须要进行实现
  abstract getArea(): any;
}

class Rectangle extends Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();
    this._width = width;
    this._height = height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Circle extends Shape {
  private _radius: number;

  constructor(radius: number) {
    super();
    this._radius = radius;
  }

  getArea() {
    return this._radius * this._radius * 3.14;
  }
}

function getShapeArea(shape: Shape) {
  return shape.getArea();
}

const rectangle = new Rectangle(10, 20);
const circle = new Circle(10);

console.log(getShapeArea(rectangle)); // 200
console.log(getShapeArea(circle)); // 314

export {};
