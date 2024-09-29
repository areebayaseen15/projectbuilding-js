// 8. Sum of Array Elements
// Write a function sumArray(arr) that takes an array of numbers and returns the sum 
// of all the elements.
// Example: sumArray([1, 2, 3, 4]) should return 10

const sumArray = (arr)=>{
    let sum =  arr.reduce((prev , total)=>
        prev + total,0)
    
    return sum
}

let result = sumArray([1,2,3,4]);
console.log(result);

