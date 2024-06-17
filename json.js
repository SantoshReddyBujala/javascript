// creating javascript object
let empInformation = {
  firstName: "Santosh",
  lastName: "Bujala",
  isActive: true,
  joiningDate: new Date("January 1, 2000"),
  numberOfVaction: 15,
};

// converting js object to JSON object
let jsonObject = JSON.stringify(empInformation);
console.log(jsonObject);
let newFormatObject = JSON.stringify(empInformation, null, 2);
console.log(newFormatObject);

// converting json object to javascript object
let newJavascriptObject = JSON.parse(newFormatObject);
console.log(newJavascriptObject);

// directly creating json object

let directJsonObject = `{
"firstName":"Santosh",
"lastName":"Bujala"
}`;
console.log(directJsonObject);

let newJavascriptObject1 = JSON.parse(directJsonObject);
console.log(newJavascriptObject1);
