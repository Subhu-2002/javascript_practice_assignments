// Q6. Check Some Negative
// Problem: Check if some numbers in [1,-2,3] are negative using .some().

let arr = [1, -2, 3];

let res = arr.some(a => a<0);

if(res)
    console.log("some numbers are negative")
else
    console.log("all numbers are positive")