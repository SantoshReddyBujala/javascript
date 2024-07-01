//Arrays
// Creating arrays below
let earr = [];
let arr = ["Santosh", "Bujala"];
let oarr = new Array();
let oarrv = new Array("Bujala", "Manvith");

arr.push("Reddy");
console.log(arr.pop());
console.log(arr.length);
console.log(arr[1]);

console.log(arr.includes("Santosh")); // include returns true if contains
console.log(arr.includes("Reddy")); // include returns false if not contains contains

console.log(arr.indexOf("Bujala")); // indexof returns position if contains
console.log(arr.indexOf("Reddy")); // indexof returns -1 if not contains contains

arr.unshift("Swetha"); // adding iteam at the begging
console.log(arr);

arr.shift("Swetha"); // taking out/remove iteam at the begging
console.log(arr);
