// 1. Object Property Access
// • Question: Create an object named car with properties make, model, and year. How would 
 // you access and print the model of the car?

 let car ={
    make : "Honda",
    model: "suzuki",
    year : "2023"
 }
console.log(car);
 
console.log(`____________________________________________________________________________________`);


// 2. Array Iteration
// • Question: Given an array of numbers, write a for loop that prints each number in the array.

let array = [1,2,3,4,5]
for(let i = 1; i <array.length ; i++){
    console.log(i);
    
}
console.log(`____________________________________________________________________________________`);


// 3. Array Sum Function
// • Question: Write a function that takes an array of numbers as an argument and returns the 
// sum of all elements in the array.

const sum = (arr)=>{
    let sumOfAllElements= arr.reduce((curr , acc) => curr + acc , 0)
    return sumOfAllElements
}
let result = sum([1,2,3,4,5])
console.log(result);


console.log(`____________________________________________________________________________________`);



// 4. Date Manipulation
// • Question: How would you create a new Date object in JavaScript and extract the current year 
// from it?
console.log(`____________________________________________________________________________________`);



// 5. If-Else Statement
// • Question: Write a function that takes a number as an argument and returns "Positive" if the 
// number is greater than 0, "Negative" if the number is less than 0, and "Zero" if the number is 
// 0.

console.log(`____________________________________________________________________________________`);


// 6. While Loop
// • Question: Write a while loop that prints numbers from 1 to 5.

console.log(`____________________________________________________________________________________`);


// 7. Math Operations
// • Question: Write a function that calculates the square root of a number using JavaScript's 
// Math object.

console.log(`____________________________________________________________________________________`);


// 8. Array Filtering
// • Question: Write a function that takes an array of numbers and returns a new array 
// containing only the even numbers.

console.log(`____________________________________________________________________________________`);


// 9. Function with Default Parameters
// • Question: Create a function that multiplies two numbers. If the second number is not 
// provided, it should default to 10.

console.log(`____________________________________________________________________________________`);


// 10. Object Methods
// • Question: Create an object calculator with methods add, subtract, multiply, and divide. Each 
// method should take two numbers as arguments and return the result of the corresponding 
// operation.
console.log(`____________________________________________________________________________________`);


// 11. Nested If-Else
// • Question: Write a function that checks a student's grade and returns "A" for marks above 90, 
// "B" for marks between 80 and 90, "C" for marks between 70 and 80, and "F" for marks below 
// 70.