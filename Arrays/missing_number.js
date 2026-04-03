/*
Find Missing Number in 1 to N
Problem:
Find a missing number from 1 to N in array of N-1 size.
Example:
Input: [1, 2, 4, 5], N = 5  
Output: 3
*/

let arr = [1, 2, 4, 5];
let n = 5;

let sum = n*(n+1)/2;

let arrSum = 0;
for(let i=0; i<arr.length; i++){
    arrSum += arr[i];
}

console.log("Missing Number is "+(sum-arrSum));