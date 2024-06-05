/*
 * ******************** This Keyword and Arrow Functions ***********************************
 */

// Register User
const user = {
  //this keyword refer to Current Context
  username: "Shoaib Bhatti",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to Website`);
    // console.log(this); //figure out what is value of this keyword ?
  },
};

user.welcomeMessage(); // Same context till now context = values
user.username = "Hitesh"; // Changing the context
user.welcomeMessage(); // ? output => Hitesh, Welcome to Website

console.log(this); // value of this => empty object {} in node environment
console.log(this); // value of this => Browser => Global object = window{} object

/* 
* this keyword is function
=> this work in context of the object not working in functions
*/

// Function
function chai1() {
  const username = "Shoaib";
  console.log(this);
  console.log(this.username); // undefined
}

// Expression
const chai2 = function () {
  const username = "Shoaib";
  console.log(this);
  console.log(this.username); // undefined
};

// this keyword in Arrow Function
const chai3 = () => {
  const username = "Shoaib";
  console.log(this);
  console.log(this.username); // undefined
};
// chai3()

// Pure Arrow Function

// Basic
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

// Implicit Return
const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2); // work same as above

// Return object using Implicit Return
const addThree = (num1, num2) => ({ username: "Shoaib Bhatti" });

console.log(addThree(2, 5));
