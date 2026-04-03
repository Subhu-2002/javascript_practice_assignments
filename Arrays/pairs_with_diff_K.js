/*
Count All Pairs with Difference k
 Problem:
Find all pairs (i, j) such that |arr[i] - arr[j]| = k.
Example:
Input: arr = [1, 5, 3, 4, 2], k = 2  
Output: (1,3), (5,3), (3,1), (4,2)
*/

let arr = [1, 5, 3, 4, 2];
let k = 2;
let res = [];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(Math.abs(arr[i]-arr[j]) == k){
            res.push([arr[i], arr[j]]);
        }
    }
}

console.log(res);