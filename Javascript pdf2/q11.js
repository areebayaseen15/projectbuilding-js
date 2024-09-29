// 11. Nested If-Else
// • Question: Write a function that checks a student's grade and returns "A" for marks above 90, 
// "B" for marks between 80 and 90, "C" for marks between 70 and 80, and "F" for marks below 
// 70.

function grade(marks){
    if(marks > 90) {
      return "A";

    }
       else if( marks >= 80 && marks <= 90){
        return "B";

       }
       else if(marks >= 70 && marks < 80){
        return "C";

       }
          return "F";
    

   }
    

console.log(grade(60));
