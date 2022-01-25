let unknownVal: unknown = 'any';
let numberVal: number = 100;

unknownVal = true;
unknownVal = 1;
// 不能直接将unknownVal赋值给numberVal,可以使用类型断言进行赋值
// numberVal = unknownVal as number;
numberVal = <number>unknownVal;
console.log(unknownVal, numberVal); // 1 1
