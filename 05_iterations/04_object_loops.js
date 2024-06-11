/*
Object Specific Loops
=> For...in Loop 
  The for...in loop is used to loop through the properties of an object. It returns the property
  name (or key) in each iteration.
*/

const myobj = {
  name: "Bhatti",
  age: 23,
  city: "Lahore",
};

for (const key in myobj) {
  // console.log(`${key}: ${myobj[key]}`);
}

// Definition for In
console.log("name" in myobj); // true
console.log("country" in myobj); // false
console.log(myobj.hasOwnProperty("name")); // true
console.log(myobj.hasOwnProperty("toString")); // false

/* 
========== Checking For in loop on array => It will work on arrays? ========= 
Yes it will work but it will gives us keys of array if we need value = array[key]
*/
const myArray = [1, 2, 3, 4, 5];
for (const key in myArray) {
  console.log(`Index: ${key}, Value: ${myArray[key]}`);
}

/* 
========== Checking For in loop on Map => It will work on map ? ========= 
No it will work => because map are not iterable 
*/

let map = new Map();
map.set("Pk", "Pakistan");
map.set("LR", "Lahore");
map.set("CHBJI", "Chabuarji");

for (const [key, value] in map) {
  console.log(`${key} : ${value}`);
}

/*
========== for of loop on Object =================
*/
for (const [key, value] of Object.entries(myobj)) {
  console.log(`${key} : ${value}`);
}

