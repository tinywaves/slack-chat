let unusable: void = undefined;

function fn(): void {
  // return;
  return undefined;
}

console.log(unusable); // undefined
