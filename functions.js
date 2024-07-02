function display() {
  console.log(`Display Function Called`);
}

display();

console.log((display = () => `Display Details with Arrow function`));

let displayArrow = (str = "Reddy") => `Display ${str}`;

console.log(displayArrow("Santosh"));
console.log(displayArrow());
let obj = ["Santosh", "Reddy", "Bujala", "Santosh"];

obj.filter((abc) => console.log(abc.toUpperCase()));
