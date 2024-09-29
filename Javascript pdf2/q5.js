// 5. If-Else Statement
// • Question: Write a function that takes a number as an argument and returns "Positive" if the 
// number is greater than 0, "Negative" if the number is less than 0, and "Zero" if the number is 
// 0.

function checkStatement(num){
       if(num > 0){
        return "Positive"
       }
       else if(num == 0){
        return 0
       }
       return "Negative"
}

let storeValue = checkStatement(0)
console.log(storeValue);
