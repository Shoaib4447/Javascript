/*
++++++++++++++++++++++++++++++++ Control flow in Js ++++++++++++++++++++++++++++++

1.if statement

if (condition) {
     code to be executed if condition is true
}
*/

const userLoggedIn = true;
if (userLoggedIn) {
    console.log("You are logged in");
}

/*
==================================== Comparison Operators ===============================
Comparison are made in condition if they are true then code will be executed otherwise not
Comparison Operators : 
    1. == (equal to)
    2. != (not equal to)
    3. === (equal value and equal type)
    4. !== (not equal value or not equal type)
    5. > (greater than)
    6. < (less than)
    7. >= (greater than or equal to)
    8. <= (less than or equal to)

Let's have an example using Operators
*/

// example # 1
if (2 === "2") {
  // result is false code in scope will not be executed
}

// example # 2
if (2 == "2") {
  // result is true code in scope will be executed
  console.log("Executed even type is different");
}

/*
1.if else statement

if (condition) {
     code to be executed if condition is true
}
else {

}
*/
// example # 1
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

/* 
================================= Implicit Scope  ==============================

In JavaScript, variables declared inside a block (like if, else, for, while, etc.)
are scoped to that block. This means they are only accessible within that block
and not outside of it.

Implicit Scope means: 
- Variables declared inside a block are scoped to that block.
- Variables declared outside a block are scoped to the global scope.

1. if else statement with implicit scope
*/

let age2 = 18;
if (age2 >= 18) console.log("You are eligible to vote"); // Only one line execution

/*
============================   Multiple Conditions & Logic Gates ==========================

if (condition1) {
    code to be executed if condition1 is true
} else if (condition2) {
    code to be executed if condition2 is true
} else {
  code to be executed if all conditions are false
}

*/

// example # 1
let age3 = 18;
let country = "UK";
if (age3 >= 18 && country === "USA") {
  console.log("You are eligible to vote in the USA");
} else if (age3 >= 16 && country === "UK") {
  console.log("You are eligible to vote in the UK");
} else {
  console.log("You are not eligible to vote");
}

// example # 2
let isStudent = true;
let isEmployed = false;

if (isStudent || isEmployed) {
  console.log("You are eligible for a loan");
} else {
  console.log("You are not eligible for a loan");
}
