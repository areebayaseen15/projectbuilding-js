// 6. Count Vowels in a String
// Write a function countVowels(str) that takes a string and returns the number of 
// vowels (a, e, i, o, u) in it.
// Example: countVowels('hello world') should return 3

function countVowels(str){
    return str.toLowerCase().split("").filter(vowel=>"aeiou".includes(vowel)).length;
}

// console.log(countVowels("Areeba"));

let check = countVowels("Hello World");
console.log(check);  //3


