// Q5. Check All Positive
// Problem: Check if all numbers in [1,2,3] are positive using .every().

let arr = [1, 2, 3];

let res = arr.every(a => a>0);

if(res){
    console.log("All numbers are positive")
}else{
    console.log("All numbers are not positive")
}