let undefinedCheck = (x) => {
  console.log(typeof x);
  if (x == undefined) {
    console.log("Undefined value");
  }
};

undefinedCheck();

let nullCheck = (n) => {
  console.log(typeof n);
  console.log(JSON.parse(n));
  if (n == null) {
    console.log("Passed null value");
  }
};

nullCheck(null);
