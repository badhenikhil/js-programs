const factorial = require("./factorial");
const gcd = require("./gcd");
const lcm = require("./lcm");
const sum = require("./sum");

var a = 77,
  b = 88;
var result;
//find gcd of 2 numbers using while loop
result = gcd.usingWhile(a, b);
console.log(`gcd of ${a} and ${b} using while loop => ${result}`);

//find gcd of 2 numbers using recursive loop
result = gcd.usingRecursive(a, b);
console.log(`gcd of ${a} and ${b} using recursive loop => ${result}`);

//find lcm of 2 numbers using while loop
result = lcm.usingWhile(a, b);
console.log(`lcm of ${a} and ${b} using while loop => ${result}`);

//find lcm of 2 numbers using gcd
result = lcm.usingGcd(a, b);

//Calculate the sum of numbers in array
console.log(`lcm of ${a} and ${b} using gcd => ${result}`);
var arr = [4, 7, 2, 8, 54, 78, 34];
result = sum(arr);
console.log(`sum of numbers in array ${arr} => ${result}`);

//Calculate the factorial of a number
var n = 4;
result = factorial(n);
console.log(`Factorial of ${n} => ${result}`);
