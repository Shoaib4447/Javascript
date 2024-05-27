// let score = "33" // This is string (1)statement
// let score = 33  //This is number (2)statement
// let score = "33abc"  //This is not a number (3)statement
// let score = null  // Null value (4)statement
// let score = undefined  // undefined (5)statement
// let score = true  // Boolean (6)statement
// let score = "Shoaib"  //String not convert able to number (7)statement


// Checking type of the score
// console.log(typeof score)


/*
 *Suppose: I want to perform operation on number and my value is in string
*/

// Convert String to Number
// let valueInNumber = Number(score) //Now check type of score
// console.log(typeof valueInNumber) // TYpe is number but what is in the value
// Lets check out 
// console.log(valueInNumber) // It will give ? (7)statement
// Value in the valueInNumber is NaN : Which is not a number

/*
 *   ******************* Conversion Type to Numbers *************************
*/

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0
// "Shoaib" => NaN

/*
 *   ******************* Conversion Type to Boolean *************************
*/

// let isLoggedIn = 1 //true
// let isLoggedIn = "" //false
// let isLoggedIn = "shoaib" //true

// let isLoggedInNumber = Boolean(isLoggedIn)
// console.log("Value is : ",isLoggedInNumber) // true
// console.log("Type is : ",typeof isLoggedIn)

/**
 * ! Conversion from types to boolean
 * * 1. String: "" => false, "any string" => true
 * * 2. Number: 0 => false , 1 => true
 */


/*
 *   ******************* Conversion Type to String *************************
*/

let someNumber = 2
let stringNumber = String(someNumber)
console.log("Value is : ",stringNumber) // "33"
console.log("Type is : ",typeof stringNumber) // string