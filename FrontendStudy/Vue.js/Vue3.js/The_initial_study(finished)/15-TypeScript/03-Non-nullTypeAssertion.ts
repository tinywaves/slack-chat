function printMessage(message?: string) {
  // if (message) {
  //   console.log(message.length);
  // }
  console.log(message!.length);
}

printMessage('test')
printMessage('Hello TypeScript')

export {}