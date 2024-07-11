/** What is Object.getOwnPropertyDescriptor ?console.log(Pi);

 * Object.getOwnPropertyDescriptor is a method in JS that returns a property descriptor for a given property on an object. A property descriptor is an object that describes the configurations of a property, including attributes like
 * Value: The value of the property
 * writable: Whether the value of the property can be changed
 * enumerable: Whether the property is listed in loops
 * configurable: Whether the property can be deleted or changed
 */
console.log(Math.PI);
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// Writing our own object and descriptor
const person = {
  name: "John",
  age: 30,

  user : function(){
    console.log(`Hello ${this.name}`);
  }
};
const personDescriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(personDescriptor);

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: true,
});
const ownDescriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(ownDescriptor);

// person.name = "Bhatti";
// console.log(person.name);

// Iterate through person
for (let [key, value] of Object.entries(person)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
//   console.log(`${key}: ${value}`);
}
