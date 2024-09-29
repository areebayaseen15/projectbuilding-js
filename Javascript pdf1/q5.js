// 5. Factorial of a Number
// Write a function factorial(n) that takes a non-negative integer n and returns its 
// factorial.
// Example: factorial(5) should return  120


    function factorial(n) {
        if (n === 0) {
          return 1;
        } else return num * factorial(n- 1);
      }
      let response = factorial(5);
      console.log(response); //120