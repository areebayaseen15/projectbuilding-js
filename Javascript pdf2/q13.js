// 13. For Loop with Break
// • Question: Write a for loop that iterates through an array of numbers and breaks the loop 
// when it encounters the number 5.

let array = [2,4,6,5,4,7];

for(let i= 0; i<array.length; i++){
    if(array[i] == 5){
        break;
    }
    console.log(array[i]);
    
}