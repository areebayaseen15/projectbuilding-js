// 10. Object Methods
// • Question: Create an object calculator with methods add, subtract, multiply, and divide. Each 
// method should take two numbers as arguments and return the result of the corresponding 
// op

const calculator = {
    add : (a,b)=>a+b,
   subtract : (a,b)=>a-b,
    multiply : (a,b)=>a*b,
divide : (a,b)=>a/b,

}
console.log(calculator.add(2,3));  //5
console.log(calculator.subtract(2,3));  //-1
console.log(calculator.multiply(2,3));   //6
console.log(calculator.divide(2,3));   //0.6666
