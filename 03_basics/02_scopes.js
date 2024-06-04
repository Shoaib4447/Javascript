/* 
 ! Scopes {}
 * The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
 ?Types: 
 
    Global scope: The default scope for all code running in script mode.
    Module scope: The scope for code running in module mode.
    Function scope: The scope created with a function.

 */

// The Story begins with let, const , var
// let a = 1;
// const b = 2;
// var c = 3;

// console.log(a);
// console.log(b);
// console.log(c);

/* Great : Everything is working good but why we need these let and const if var is working fine and the problem comes when we talk about scope {} block level scope

Someone else also defines c variable 
*/

// Global Scope
var c = 200
let a = 300
// Block Scope
if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
  console.log("Inner value of let a: " , a);
}

console.log(a); // Good a is defined in scope of if(){} so it shouldn't come out : Good
// console.log(b); // Good b is defined in scope of if(){} so it shouldn't come out : Good
console.log(c);    // Good c is defined in scope of if(){} but it is accessible outside of it which can cause problem


