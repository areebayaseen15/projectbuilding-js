// Q1:You are given an array of objects representing users:
// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 35 },
//   { id: 4, name: "David", age: 22 }
// ];
// Write a function getAdultUserNames that returns an array of names of users who are 30 years or older.


function getAdultUserNames() {
    const users = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 },
      { id: 4, name: "David", age: 22 }
    ];
  
    let userNames = users
      .filter(user => user.age >= 30)
      .map(user => user.name);
  
    return userNames;
  }
  
  let adultUsers = getAdultUserNames();
  console.log(adultUsers);  //[ 'Bob', 'Charlie' ]
  