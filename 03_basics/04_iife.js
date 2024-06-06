/* 
=> Immediately Invoked Function Expressions (IIFE) :  are a way to execute a function immediately after it's defined. They are often used to create a scope for variables and functions, a way to avoid polluting the global namespace.
*/
// Example of IIFE
(function () {
  var a = "DB CONNECTED";
  console.log(a);
})();
// In the above example, the function is defined and immediately invoked. The variable 'a' is scoped to the function and is not accessible outside the function.

const name = "Shoaib";
(function () {
  const name = "Bhatti";
  console.log(name); // prints Bhatti
})();

// In the above example, the function has access to the outer scope and can log the value of the 'name' variable. => Not accessible

// IIFE Arrow function
((name) => {
  console.log(`${name} CONNECTED DB`);
})("Bhatti"); // prints Shoaib
