// Object Literal
const user = {
  username: "Bhatti",
  age: 22,
  email: "bhatti@gmail.com",
  password: "123456",
  loginCount: 8,
  signedIn: true,

  // Method
  greet: function () {
    console.log(`Hello ${this.username}! You are ${this.age} years old.`);
    console.log(this);
  },
};
// user.greet();

// Global Context (this) // is empty object in node environment
// console.log(this);

// Constructor Function (new)
// const promise = new Promise();
// const date = new Date();

// function
function User2(username, password, email) {
  this.username = username;
  this.password = password;
  this.email = email;

  this.greet = function () {
    console.log(`Hello ${this.username}! You are ${this.age} years old.`);
  };

  return this;
}

const userOne = new User2("Shoaib", "123", "shoaib@date.com");
const userTwo = new User2("bhatti", "543", "bhatti@date.com");
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

// When we use (new)keyword first of all {empty object} is created called instance
// constructor function is called due to the (new) keyword. It pack all the arguments
// in the empty object and return it.
// arguments are injected in this keyword

// What is constructor : It is reference of the itself 
// Constructor is a function that is used to create an object.
// It is a function that is called with the new keyword and without a return statement.
// It is used to initialize the object's properties.
