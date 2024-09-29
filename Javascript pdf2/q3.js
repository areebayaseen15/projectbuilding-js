// 3. Array Sum Function
// • Question: Write a function that takes an array of numbers as an argument and returns the 
// sum of all elements in the array.

const sum = (arr)=>{
    let sumOfAllElements= arr.reduce((prev , total) => prev + total , 0)
    return sumOfAllElements
}
let result = sum([1,2,3,4,5])
console.log(result);

