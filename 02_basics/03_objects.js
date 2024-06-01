// We can declare objects like literal and constructor

// Use Symbol as a key in objects
let mySym = Symbol("key1");

// object literal
let person = {
  "Full Name": "Shoaib Bhatti",
  name: "John",
  [mySym]: "mykey1",
  age: 30,
  email: "john@gmail.com",
  location: "Lahore",
};

// How to access object literal keys or values

//=> Two way to access the values of objects
console.log(person.email);
console.log(person["email"]); 
console.log(person["Full Name"]); // ['mySym'] tries to access a property with the string key 

// Lets access the symbol and check its type
console.log(typeof person['mySym']); 
// String Datatype but we need Symbol datatype
console.log(person.mySym); // undefined because mySym is not a string key
console.log( person[mySym]); // result : value
console.log(typeof mySym); // Symbol
// write key in [mySym] then it will be Symbol in object

// Change values of the objects
person.name = "Shoaib";
console.log(person.name); // Changed from 'john to Shoaib
// freeze object
Object.freeze(person);
// person.name = "Shoaib"; // Object is freeze no changes will propagate


// Adding function to Object
person.greet = function(){
    console.log("Hello World");
};

// Referencing values of the same object in function
person.greet2 = function(){
    console.log(`Salam ${this.name}`);
};

console.log(person.greet2());




