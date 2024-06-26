let employee = {
  firstName: "Santosh",
  lastName: "Bujala",
  isActive: true,
  joiningDate: new Date("January 1, 2000"),
  numberOfVaction: 15,
  group: "HR",
};

// Condition of if else
if (employee.numberOfVaction < 5) {
  console.log("Green");
} else if (employee.numberOfVaction < 10) {
  console.log("Yellow");
} else if (employee.numberOfVaction < 15) {
  console.log("Red");
} else if (employee.numberOfVaction < 20) {
  console.log("Blue");
} else {
  console.log("Gray");
}

// Multiple conditions both should be true
if (employee.numberOfVaction < 20 && employee.firstName === "Santosh") {
  console.log("Multiple Condition Success");
} else {
  console.log(`Condition not passed`);
}

// Multiple conditions either one is true
if (employee.numberOfVaction < 5 || employee.isActive === true) {
  console.log("Either one Condition Success");
} else {
  console.log(`Both the condition not passed`);
}

// Multiple conditions and using NOT
if (employee.numberOfVaction < 5 || !employee.isActive) {
  console.log("Either one Condition Success");
} else {
  console.log(`Both the condition not passed`);
}
// Terinary condition
console.log(employee.isActive ? `True value result` : `False value result`);
console.log(!employee.isActive ? `True value result` : `False value result`);

switch (employee.group) {
  case "Engineering":
    console.log("ENG group");
    break;
  case "HR":
    console.log("HR group");
    break;
  case "Marketing":
    console.log("Market group");
    break;
  default:
    console.log("Default Group");
}

// Multiple case's together
switch (employee.group) {
  case "Engineering":
  case "HR":
    console.log("ENG and HR group");
    break;
  case "Marketing":
    console.log("Market group");
    break;
  default:
    console.log("Default Group");
}
