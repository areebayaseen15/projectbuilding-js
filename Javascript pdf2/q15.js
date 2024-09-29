// 15. Switch Statement
// • Question: Write a switch statement that takes a day of the week (1 for Monday, 2 for 
// Tuesday, etc.) and returns the name of the day.

const dayOfWeek = (dayInNumeric) => {
    switch (dayInNumeric) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
            case 7:
                return"Sunday"
          default:
            "check number between 1 to 7"
    }
}
    
let day = dayOfWeek(3);
console.log(day);



