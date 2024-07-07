const myName = "Shoaib ur Rehman";
console.log(myName.length); // 16 letters

// What if we have extra spaces and want truelength of the string
const anotherName = "Bhatti     ";
console.log(anotherName.length); // 11 letters but real letters length is 6

// Now I want a functionality available to all the objects of javascript that has the ability to remove all the extra space and tell us the true length

// I want truelenght() have this functionality
console.log(anotherName.truelength);

// Array has the method
let heros = ["thor", "superman"];

// Object has the method
let heroPower = {
  thor: "hammer",
  spiderman: 'sling',

  getSpiderPower:function(){
    console.log(`Spidy has power ${this.spiderman}`);
  }
};

// Can we have method like
// heroPower.Bhatti() // heroPower.Bhatti is not a function

// Let's make it
Object.prototype.bhatti = function(){
    console.log(`Now bhatti function is available for every javascript object`);
}

// present in all object
// Array
// Object
// String
heros.bhatti() // Array
heroPower.bhatti() // Object
myName.bhatti() //String

// Now I want to restrict that the power should be only in Array
Array.prototype.heyBhatti = function(){
    console.log(`Hey Bhatti is available only for Array`)
}
// Array
heros.heyBhatti()
// Object 
// heroPower.heyBhatti()
// String
// myName.heyBhatti()


// Prototypal Inheritance // Old Approach
const User = {
  username : 'Bhatti',
  email : 'bhatti@gmail.com'
}


const Teacher = {
  makeVideo : true
}

const TeachingSupport = {
  isAvailable : false
}

const TASupport = {
  makeAssignment: 'JS Assignments',
  fullTime : true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherName2 = 'Shoaib        '
String.prototype.truelength2 = function(){
  console.log(`${this}`);
  console.log(`${this.anotherName2}`);
  console.log(`True length is: ${this.trim().length}`);
}


anotherName2.truelength2()
'Bhatti  '.truelength2()