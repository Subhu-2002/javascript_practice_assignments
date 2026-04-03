/*
Check If Array Is Sorted
 Problem:
Determine whether an array is sorted in non-decreasing order.
Example:
Input: [1, 2, 2, 3, 4]  
Output: true
*/

let arr = [1, 2, 2, 4, 4];
let last = arr[0];

let i = 1;
while(i<arr.length){
    if(last > arr[i]) break;
    
    last = arr[i];
    i++;
}

if(i == arr.length){
    console.log("Sorted Array");
}else{
    console.log("Unsorted Array");
}