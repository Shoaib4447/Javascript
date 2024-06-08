/*
================================ switch cases in Js ====================================
When we want to check a value multiple time then we use switch instead of if else 

Syntax : switch (key) {
  case value:
    break;

  default:
    break;
}
*/

// Example :
let month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("Invalid month");
    break;
}

/*
=> Question: What is purpose of the break keyword in switch case ?
Answer: The break keyword is used to terminate the execution of the switch block. If the break keyword is omitted, the execution will continue to the next case and execute its code block. Without break keyword :

=> Question: What is the problem with switch case in JavaScript if we don't use break statement?
Answer: Once key matches any case all the cases after it will be executed except the default.

*/

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
  default:
    console.log("Invalid day");
}
// Output :
// Tuesday
// Wednesday
// Invalid day

// example # 2 with string case
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;
  case "banana":
    console.log("This is a banana");
    break;
}
