//firstName
const firstName = "Santosh";
const lastName = "Bujala";
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

//String concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);

//Template litterals
console.log(`${firstName} ${lastName}`);

//Dual/multiline strings
console.log("Line 1\nLine 2\nLine 3");

//With tamplate litterals
console.log(`Testing 1
Testing 2
Testing 3
Testing 4`);

//Escaping charaters
console.log('Testing "Double quotes"');
//escapes = "Testing \"Double quotes\".";

console.log(`Testing "Double quotes" and 'Single quotes'.`);

//String length
let test = "asdhf lasdlf alsiudfadfso";
console.log(test.length);
console.log(test[10]);
console.log(fullName.indexOf("to"));
console.log(fullName.indexOf("re")); // Nagitive value because not contain the value

// include does contains the value
console.log(fullName.includes("sh"));
