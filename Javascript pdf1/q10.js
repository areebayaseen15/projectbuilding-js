// 10. Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
// Example: isPrime(7) should return true


const isPrime = (n )=> {
    if(n <= 1){
        return false
    }
    for(let i = 2; i*i <= n; i++) {
        if(n % i === 0) {
            return false;
          
        }
        return true;
    }
}

console.log(isPrime(7));  //true

