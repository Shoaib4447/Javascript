// Variable , Const Declaration

const accoundId = 123
let accountEmail = 'shoaib@gmail.com'
var accoundPassword = 'something123'
accountCity = 'Lahore' //Variable Can be decalred but not good practice
let accoundState;

// Const are the type of the variable that or not changeable let's try to change it
// accoundId = 2  //Not Allowed
// console.log(accoundId);
// We will recieve an error assignment to constant variable

accountEmail = 'Email Changed'
accoundPassword = '12123'
accountCity = 'City Changed Lahore Islamabad'

/**
 Prefer Not to Var
 because of issue in Block Scope and Functional Scope
 */

// Use table() method for output if you have multiple variables
console.table([accoundId, accoundPassword, accountEmail, accountCity,accoundState])

