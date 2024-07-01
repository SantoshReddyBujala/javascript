// Map creation
let map = new Map();
map.set("firstname", "Santosh");
map.set("lastname", "Bujala");
map.set(new Date(), "Non string keays are allowed");
map.set([], "Array as a key");
map.set(() => "Hi", "Function as a key");
console.log(map);
//Checking the size of map
console.log(`Map size: ${map.size}`);
//Get the map values passing the keay
console.log(map.get("lastname"));
console.log(map.get([])); // undefined
//Delete the map values
map.delete("lastname");
console.log(`Map size: ${map.size}`);

// Set creation
let set = new Set();

// Adding values to set
set.add("Santosh");
// Checking the size of set
console.log(`Size of the Set: ${set.size}`);
// Set not allowed duplicatesa and its mainten unique values
set.add("Santosh");
console.log(`Size of the Set: ${set.size}`);
set.add("Reddy");
let emp = { firstname: "Santosh", lastname: "Bujala" };

//Checking set has the value
console.log(set.has(emp));
set.add(emp);
console.log(`Size of the Set: ${set.size}`);
console.log(set.has(emp));

// Deleting values from set
set.delete("Reddy");
console.log(`Size of the Set: ${set.size}`);

// Deleting all the values from set
set.clear();
console.log(`Size of the Set: ${set.size}`);
