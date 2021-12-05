type Person = {
  name: string,
  friend?: {
    name: string,
    age?: number
  }
}

const info: Person = {
  name: 'tinyRipple',
  friend: {
    name: 'ZDH'
  }
}
console.log(info.name);
console.log(info.friend?.name);
console.log(info.friend?.age);




export {}