let color: string = 'blue';
let name1: string = 'tiny';
let name2: string = 'Ripple';
let fullName: string = `fullName:${name1 + name2}`;

color = 'red';
console.log(color, fullName); // red fullName:tinyRipple
