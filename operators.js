//Mathematical operators

let add = 2 + 3;
console.log(add);
let sub = 2 - 3;
console.log(sub);

let sub2 = 2 - -3;
console.log(sub2);

let div = 5 / 1;
console.log(div);

let div1 = 15 / 3;
console.log(div1);
let div2 = 11 / 3;
console.log(div2);
let mul = 11 * 3;
console.log(mul);
let rim = 11 % 3;
console.log(rim);
let rim1 = 11 % 2;
console.log(rim1);
let rim2 = -10 % 6;
console.log(rim2);

let exponential = 4 ** 4;
console.log(exponential);

let exponential1 = 2 ** 6;
console.log(exponential1);

let exponential2 = 2 ** -2;
console.log(exponential2);
let val = 1;
console.log(++val); //increment the value
let val1 = 10;
console.log(--val1); //decrement
//Assignment operators

let ass1 = 3;
let strAssig = "String something";
let boolAssig = true;
let nullAssign = null;
let date = new Date("June 19, 2024");
console.log(
  `Printing Assigment operators Number assignment: ${ass1} String assignment: ${strAssig} Boolean assignment: ${boolAssig} Null assignment: ${nullAssign} Date assignment: ${date}`
);

//Mathematical assigments

let addAnother = 10;
console.log((addAnother += 20));
let subAnother = 10;
console.log((subAnother -= 20));
let mulAnother = 10;
console.log((mulAnother *= 20));
let divAnother = 10;
console.log((divAnother /= 20));
let expAnother = 10;
console.log((expAnother **= 3));
let rimAnother = 10;
console.log((rimAnother %= 3));

//Comparison operators

console.log(7 > 5);

console.log(7 < 5);

console.log(7 >= 7);

console.log(7 <= 7);

console.log(7 <= 5);

console.log(7 >= 5);

console.log(7 == "7"); // equality true

console.log(7 === "7"); //strict equality false

console.log(7 === 7);

console.log("Hi" === "hi");

console.log("true" === true);

console.log(false === true);

console.log(false === false);

let obj1 = {};

let obj2 = {};

console.log(obj1 === obj2); // both the memories are diffent false

let obj3 = obj2;
console.log(obj3 === obj2); //  both the memories are same true

let isTruty = (val, exp) => {
  console.log(`${val} ${Boolean(exp)}`);
};

isTruty("Val", 0);
isTruty("Val1", 1);
isTruty("Val2", -1);
isTruty("Val3", 0n);
isTruty("Val4", false);
isTruty("Val5", true);
isTruty("Val6", NaN);
isTruty("Val7", undefined);
isTruty("Val8", null);
isTruty("Val9", "text");
isTruty("Val10", "");
isTruty("Val11", "false");
isTruty("Val12", {});
let text;
isTruty("Val13", text);
