//Creating object with object literal
let obj1 = {};
console.log(obj1);
// Creating an object using constructor
let obj2 = new Object();
console.log(obj2);

obj1.firstName = "Santosh";
obj1.lastName = "Bujala";
obj1.isActive = true;
obj1.joiningDate = new Date("January 1, 2000");
obj1.numberOfVaction = 15;
console.log(obj1);

let obj3 = {
  firstName: "Santosh",
  lastName: "Bujala",
  isActive: true,
  joiningDate: new Date("January 1, 2000"),
  numberOfVaction: 15,
};

console.log(obj3);

console.log(obj1.firstName);
console.log(obj3["lastName"]);

// Delete Object values

delete obj3.firstName;
console.log(obj3);

// Accessing not containing elements

console.log(obj3.middleName);

// Objects passed by refernece, not value

let obj4 = obj3;
obj4.lastName = "Reddy BUjala";

console.log(`last name from object 3 ${obj3.lastName}`);

let obj5 = Object.create(obj3);
obj5.lastName = "Swetha Reddy";

console.log(`last name from object 3 ${obj3.lastName}`);
