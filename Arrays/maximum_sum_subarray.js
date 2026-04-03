let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let sum = arr[0];
let currSum = arr[0];
for(let i=1; i<arr.length; i++){

    sum = Math.max(sum, currSum+arr[i]);
    currSum = Math.max(0, currSum + arr[i]);

}

console.log(sum);