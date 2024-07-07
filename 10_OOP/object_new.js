// Object & new keyword in Javascript

// Mechanism of javascript prototypical behavior

function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;
// Checking function is object in prototypical behavior in javascript
// console.log(multiplyBy5 instanceof Object); // true
// console.log(multiplyBy5(3));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// Injecting our own functionality in prototype
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`${this.username} Price is ${this.score}`);
};

const chai = new createUser("Green Tea", 40);
const tea = new createUser("Tapal", 100);

// chai.increment();
// tea.printMe();

/*
 *---------------------------------------- Functionality of new Keyword --------------------------------
 
 * Here is what happens behind the scenes when the new keyword is used : 
A new object is created: The new keyword initiates the creation of new javascript object 

A prototype is linked: The newly created object get linked to the prototype property of the constructor function.This means that it has access to the properties and methods defined on the constructors prototype

The constructor function is called : The constructor function is bound to the newly created object. If no explicit return is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value

The new object is returned: after the constructor function is called, if it doesn't return a non-primitive value (object, array, function etc.), the newly created object is returned

 */
