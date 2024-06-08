/*
================================= truthy and falsy values ==============================
falsy Values : 
- ""
- false
- null
- undefined
- NaN
- Zero of any numeric type (-0, BigInt 0n, 0, 0.0, 0j, etc.)

truthy Values : 
- True
- "0" , "false" , 'a'
- [1], []
- {}, {a:1}
- 1, -1, 1.0, -1.0, 1j
- function()
- Any non-zero, non-empty value 

*/

// Checking of empty array
let arr = [];
if (arr.length === 0) {
  console.log("Array is truthy");
} else {
  console.log("Array is falsy");
}
// Output: Array is falsy

// If you don't want empty array how to check
let arr2 = ["Shoaib"];

if (arr2.length === 0) {
  console.log("Array is Empty"); // still truthy value
} else {
  console.log("Array is Not Empty and It's truthy");
}
// Output: Array is truthy

// Checking of empty object
let obj = {};
if (Object.keys(obj).length === 0) {
  // Object.keys() return us array so we can use .length() method and check it
  console.log("Object is Empty");
} else {
  console.log("Object is Not Empty and It's truthy");
}

/* 
================================== Ternary Operator =================================
*/

// Syntax: condition ? true_value : false_value

let age = 18;
let result =
  age >= 18
    ? "You are eligible to vote in PK"
    : "You are not eligible to vote in PK";
console.log(result); // You are eligible to vote

/* 
==================== Nullish Coalescing Operator(??) : null  or undefined ==============
*/

// example # 1
let name = null;
let defaultName = "John Doe";
console.log(name ?? defaultName); // John Doe

// example # 2
let name2 = "Shoaib";
let defaultName2 = "John Doe";
console.log(name2 ?? defaultName2); // Shoaib

// example # 3
let name3 = undefined;
let defaultName3 = "John Doe";
console.log(name3 ?? defaultName3); // John Doe

// example # 4
let val1;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 15;
val4 = null ?? 10 ?? 20; // first value will be assigned

/* 

================= Optional Chaining Operator (?.) : null or undefined ==============    

Optional Chaining Operator (?.)
Syntax: obj?.prop
Syntax: obj?.method()
Syntax: obj?.prop?.subProp
Syntax: obj?.method?.subMethod()
*/

// Example of Optional Chaining Operator (?.) : null or undefined
let user = {
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};
console.log(user.address?.street); // 123 Main St
console.log(user.address?.city); // Anytown
console.log(user.address?.state); // CA
console.log(user.address?.zip); // 12345
console.log(user.address?.country); // undefined

/*
=== false comparison ===
fasle == 0 // true
fasle == "" // true
fasle == null // true
0 = ''  // true
*/
