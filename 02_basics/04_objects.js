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
const Users = Object.assign({}, user1, user2);
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
console.log(users[0].name);

// Accessing keys of any object
console.log(Object.keys(obj)); // return array of keys so we can map over them
console.log(Object.values(obj)); // return array of values so we can map over them
console.log(Object.entries(obj)); // array of array for each key/value pair
console.log(Object.hasOwnProperty("name")); //ask question that this object has this key or not

/*  ******************************* Object Destructuring ****************************** */

const course = {
  coursename: "Js Mastery",
  instructor: "Shoaib Bhatti",
  duration: "4 weeks",
  price: 500,
};

// How to access values of object
// 1. Using dot notation
console.log(course.coursename);
// 2. square bracket notation
console.log(course["instructor"]);
// 3. de-structuring object
const { coursename: title, instructor, duration, price } = course;

console.table([title, instructor, duration, price]);




/*  ******************************* API's Json ****************************** */

// What is API ?
// API stands for Application Programming Interface. It is a set of rules, protocols, and tools that allows different systems to communicate with each other. APIs are used to share data between systems, and they are commonly used in web development to fetch data from a server or to send data to a server.

// What is JSON ?
// JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy to read and write. JSON is often used to exchange data between a server and a web application, or between different web applications.

// Json
// {
//   "name" : 'Bhatti',
//   "courseName" : 'JS',
//   "price": 'free',
// }

[
  {},
  {},
  {}
]