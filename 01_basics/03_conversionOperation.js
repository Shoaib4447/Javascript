// let score = "33" // This is string (1)statement
// let score = 33  //This is number (2)statement
// let score = "33abc"  //This is not a number (3)statement
// let score = null  // Null value (4)statement
// let score = undefined  // undefined (5)statement
// let score = true  // Boolean (6)statement
let score = "Shoaib"  //String not convert able to number (7)statement


// Checking type of the score
// console.log(typeof score)


/*
 *Suppose: I want to perform operation on number and my value is in string
*/

// Convert String to Number
let valueInNumber = Number(score) //Now check type of score
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
let isLoggedIn = "shoaib" //true

let isLoggedInNumber = Boolean(isLoggedIn)
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
// console.log("Value is : ",stringNumber) // "33"
// console.log("Type is : ",typeof stringNumber) // string

/*
 *              ******************* OPERATIONS *************************
*/

let value = 3
let negValue = -value
// console.log("Value is: ",negValue)

/*
!  ARITHMETIC OPERATIONS 
* 1. Addition: a + b
* 2. Subtraction: a - b
* 3. Multiplication: a * b
* 4. Division: a / b
* 5. Modulus: a % b
* 6. Exponentiation: a ** b
*/

// Concatenating Strings
let str1 = "Shoaib"
let str2 = "Bhatti"
let fullName = str1 + " " + str2
// console.log("Full Name is: ",fullName)

/*
! Problem while concatenation String and number 
? Observe: Before and After conversion
* lets have some examples
 */
let data = '1' + 2
let data2 =  2 + '1'
let data3 = '2' + 2 + 3
let data4 =  2 + 3 + '2' 
// These cases or not used in real life example but these was just for understanding purpose
let data5 =  2 + (3 + '2')
let data6 =  2 + (3 + 2)
// let data7 =  2 + (ture + 2) // Error


// console.log("String + number: ",data , 'type of data: ', typeof data)
// console.log("number + String: ",data2 , 'type of data: ', typeof data2)
// // What if 
// console.log("String + Numbers : ",data3 , 'type of data: ', typeof data3)
// console.log("Numbers + String: ",data4 , 'type of data: ', typeof data4)
// console.log("Numbers + String: ",data5 , 'type of data: ', typeof data5)
// console.log("Numbers + String: ",data6 , 'type of data: ', typeof data6)
// console.log("Numbers + String: ",data7 , 'type of data: ', typeof data7)


/*
! Tricky Conversions 
* just for understanding purpose not usable in real life
* Prefix and Postfix
 */

// console.log(+true)
// console.log(+"")

let num1,num2,num3
num1 = num2 = num3 = 2 + 3
// console.table([num1, num2, num3])


// Prefix vs Postfix 
let gameCounter = 100
// gameCounter++ // postfix
++gameCounter // prefix
// console.log(gameCounter)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);




