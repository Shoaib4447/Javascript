// Variable , Const Declaration

const accountId = 123
let accountEmail = 'shoaib@gmail.com'
var accountPassword = 'something123'
accountCity = 'Lahore' //Variable Can be declared but not good practice
let accountState;

// Const are the type of the variable that or not changeable let's try to change it
// accountId = 2  //Not Allowed
// console.log(accountId);
// We will receive an error assignment to constant variable

accountEmail = 'Email Changed'
accountPassword = '12123'
accountCity = 'City Changed Lahore Islamabad'

/**
 Prefer Not to Var
 because of issue in Block Scope and Functional Scope
 */

// Use table() method for output if you have multiple variables
console.table([accountId, accountPassword, accountEmail, accountCity,accountState])

