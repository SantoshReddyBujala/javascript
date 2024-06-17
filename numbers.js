//rounding the number
let numberFormats = 7.6484934;
console.log(`Round ${Math.round(numberFormats)}`);
console.log(`Celling ${Math.ceil(numberFormats)}`);
console.log(`Floor ${Math.floor(numberFormats)}`);
console.log(`Max ${Math.max(numberFormats)}`);
console.log(`Min ${Math.min(numberFormats)}`);
console.log(`Pow ${Math.pow(numberFormats)}`);
//fixed
console.log(numberFormats.toFixed(3));

//display local-specific format
let numFormat = 1_000_000;
console.log(`USA ${numFormat.toLocaleString("en-US")}`);
console.log(`Great Briten ${numFormat.toLocaleString("en-GB")}`);
console.log(`Greece ${numFormat.toLocaleString("el-EL")}`);
console.log(`Bangladesh ${numFormat.toLocaleString("bg-BG")}`);
console.log(`Panjab ${numFormat.toLocaleString("pa-PA")}`);

//intl format currency
let sal = 100000;
let monthlySalary = sal / 12;
console.log(monthlySalary.toFixed(2));

let formatter1 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(formatter1.format(monthlySalary));

let formatter2 = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
console.log(formatter2.format(monthlySalary));

let formatter3 = new Intl.NumberFormat("ja-JA", {
  style: "currency",
  currency: "JPY",
});
console.log(formatter3.format(monthlySalary));

let formatter4 = new Intl.NumberFormat("zh-HK", {
  style: "currency",
  currency: "HKD",
});
console.log(formatter4.format(monthlySalary));
