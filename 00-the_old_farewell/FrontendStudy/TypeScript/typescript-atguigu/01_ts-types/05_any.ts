let anyVal: any = 'any';
let stringVal: string = 'string';

anyVal = true;
anyVal = 1;
stringVal = anyVal;
console.log(anyVal, stringVal); // 1 1
