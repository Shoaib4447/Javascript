/*
! How many datatypes in Javascript
? How the data is stored in the memory and how it is accessed based on that there are 2 categories of the datatypes
* 2 Types => Primitive (7) and Non Primitive ()


* => Primitive { CALL BY VALUE } types (7)
> Copy of a value 
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol => For unique value  (ES6+)
7. BigInt (ES2020+)

* => Non Primitive { CALL BY REFERENCE } types (3)
> Reference of the value can be allocated directly
1. array
2. object
3. function




! Javascript is dynamically typed language or statically typed language ?

* The type of a variable is determined at runtime as opposed to compile time. Variables in dynamically typed languages can hold values of any type and can change type during the execution of the program. 

? Example
=> const score = '10' //string
score = 10 //number
score = true //boolean
score = null //null
=> So the value can changed and we don't need to tell the language explicitly that this variable is string type or number type etc.

*   Dynamically Typed Language: 
    const score = 1001

*   Statically Typed Language: 
    => const score:number = 102 

*/

const score = 101; //Number
const scoreValue = 210.3; // Number
const isLogedIn = false; // Boolean
const outSideTemp = null; // Null
let email = undefined; // Undefined
let email2; // Undefined
const id = Symbol("123"); //unique
const anotherID = Symbol("123"); // unique not same id as above variable both are unique
const bigNumber = 12345678901234567890n; // bigInt
console.log(typeof bigNumber)
// console.log(id === anotherID); // false


// => Non Primitive => typeof() They all are object: array, object ,function 

const heros = ['Usman','M Fateh', 'Tepu Sultan'] //object 
const person = {name: 'Shoaib', age: 22, occupation: 'Software Engineer'} //object
const add = function(a,b){
    return a + b;
} // object function

// => How to check type of any variable or constant : typeof()
// console.log(typeof heros); // array


// https://262.ecma-international.org/5.1/#sec-11.4.3