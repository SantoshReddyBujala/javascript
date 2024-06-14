// Creating dates using different types
let date1 = new Date();
console.log(date1); // displaying today date and current time
let date2 = new Date("12/13/2021");
console.log(date2); // displaying passed date without minus 1 day
console.log(date1); // displaying today date
let date3 = new Date("2021-12-31");
console.log(date3); // displaying passed date with minus 1 day
let date4 = Date.parse("12-13-2021");
console.log(date4); // displaying passed date ISO string

console.log(date1.getMonth()); // zero index
console.log(date1.getDate()); // Date
console.log(date1.getHours()); // Date
