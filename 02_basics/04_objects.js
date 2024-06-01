// constructor object || singleton object

const obj = new Object();
// Adding values to User
obj.name = "John Doe";
obj.age = 30;

// console.log(obj); //Empty Object

// Objects in Objects
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      first: "John",
    },
  },
};

// console.log(regularUser.fullname.userfullname.first);
// Optional Chaining

// Merging Objects
const user1 = { name: "John Doe", age: 30 };
const user2 = { email: "john@gmail.com", country: "USA" };
// const Users = { user1, user2 }; // Problem object in object not merged

/* {
    user1: { name: 'John Doe', age: 30 },
    user2: { email: 'john@gmail.com', country: 'USA' }
}*/

// Merged as expected
const Users = Object.assign({},user1,user2)
console.log(Users);


// Merge using spread operator
const UsersSpread = { ...user1, ...user2 };
console.log(UsersSpread); // Same output as assign method



// Array of objects
const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Doe", age: 25 },
    { id: 3, name: "Bob Doe", age: 35 },
];
// Accessing values from array of objects
console.log( users[0].name);

// Accessing keys of any object
console.log(Object.keys(obj)); // return array of keys so we can map over them
console.log(Object.values(obj)); // return array of values so we can map over them
console.log(Object.entries(obj)); // array of array for each key/value pair 
console.log(Object.hasOwnProperty('name')); //ask question that this object has this key or not