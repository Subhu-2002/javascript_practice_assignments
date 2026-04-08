// Q1. Sum of Array
// Problem: Find sum of numbers in array [1, 2, 3, 4, 5] using .reduce().

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((a, b) => a+b, 0);

console.log(sum)