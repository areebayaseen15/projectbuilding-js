// 14. Date Comparison
// • Question: Write a function that takes two dates as arguments and returns true if the first 
// date is earlier than the second date

function isEarlierDate(date1, date2) {
 return new Date(date1) > new Date(date2)


}
  
console.log(isEarlierDate("2024-9-21"," 2024-9-3"));
  