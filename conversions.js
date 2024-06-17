// creating string variable
let strValue = "Santosh";
console.log(typeof strValue);
// creating number variable
let numValue = 123;
console.log(typeof numValue);
// creating boolean value
let boolValue = true;
console.log(typeof boolValue);

// joining a non-string value into string
let personName = "Santosh";
let personAge = 38;
let personInformation = `${personName} is ${personAge} year's old.`;
console.log(personInformation);

// converting a string number int numeric number
let strAge = "38";
let numAge1 = Number(strAge);
let numAge2 = +strAge;
console.log(typeof numAge1);
console.log(numAge1);
console.log(typeof numAge2);
console.log(numAge2);
console.log(isNaN(numAge2));

// what about NaN
let strRamValue = "Reddy";
let convertNum = Number(strRamValue);
console.log(typeof convertNum);
console.log(convertNum);
let isInvalid = isNaN(convertNum);
console.log(isInvalid);

// converting a value to boolean
let numBoolValue1 = 1;
let numBoolValue0 = 0;
let convertBoolean1 = Boolean(numBoolValue1);
let convertBoolean0 = Boolean(numBoolValue0);
console.log(
  `True converion:${convertBoolean1} False conversion: ${convertBoolean0}`
);

let numStrValue1 = "Hellow";
let numUnValue0;
let convertStr1 = Boolean(numStrValue1);
let convertNotDefined0 = Boolean(numUnValue0);
console.log(
  `True converion:${convertStr1} False conversion: ${convertNotDefined0}`
);

// converting boolean to string
// using template litter's
// usting String calass

let boolToString = String(convertStr1);
console.log(typeof boolToString);
console.log(boolToString);
