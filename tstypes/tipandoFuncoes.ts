function calc(x: number, y: number): string {
  //receive two numbers as the parameters
  return `result: ${x + y}`; //return string
}

let result: string;
result = calc(46, 54);

console.log(result);

//  trying to change the type from string to number

// let result2: number;
// // result2 = calc(1, 2); error
// // console.log(result2);

