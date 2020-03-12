'use strict';
const fun = () => {
  console.log(`Even though value is not defined inside ghe function, it will take the global value: ${value}`)
  }

// do not use var for real
var value = 5;
console.log(value)

fun()

//this is legal even though it should not
var value = 8
console.log(value)

let value2 = 7
value3 = 8
console.log(value3)