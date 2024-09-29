// 8. Array Filtering
// • Question: Write a function that takes an array of numbers and returns a new array 
// containing only the even numbers.


const arrayOfNumbers = (array)=>{
    return array.filter(arr=>arr%2 === 0)
}
console.log(arrayOfNumbers([4,5,7,8,9]));
