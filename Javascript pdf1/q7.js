// 7. Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that takes an array and returns a new array 
// with duplicates removed.
// Example: removeDuplicates([1, 2, 2, 3, 4, 4]) should return [1, 2, 3, 4]


function removeDuplicates(array){
    let removeDuplicates=[...new Set(array) ]
    return removeDuplicates
}

console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5,]));
