let value: unknown = 'string';

// console.log((value as string).length);
console.log((<string>value).length); // 6
