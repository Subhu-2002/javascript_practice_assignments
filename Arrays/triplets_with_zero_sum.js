/*
Check for Triplets with Zero Sum
Problem:
Check if any three elements in the array sum to 0.
Example:
Input: [-1, 0, 1, 2, -1, -4] 
Output: (-1, 0, 1), (-1, -1, 2)
*/

let arr = [-1, 0, 1, 2, -1, -4];
arr.sort();
let res = [];

for(let i=0; i<arr.length-2; i++){
    if(i!=0 && arr[i]==arr[i-1]) continue;
    let left = i+1;
    let right = arr.length-1;

    while(left<right){
        let sum = arr[i] + arr[left] + arr[right];

        if(sum == 0){
            res.push([arr[i], arr[left], arr[right]]);
            left++;
            right--;

            while(arr[left] == arr[left-1] && left<right) left++;
            while(arr[right] == arr[right+1] && left<right) right++;
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(res)