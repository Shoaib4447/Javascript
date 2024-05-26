// DATATYPES AND ECMA STANDARDS

/*  
    ECMA STANDARDS: The previous version of the javascript doesn't support many new features 
        so the committee don't want that all the previous code is wasted so they defined some 
        standards

        'use Strict'; there is no way to go back if it is used all the code will be of new versions
*/
"use strict"; // Treat all the js code as a newer veriosn 


// Alert Statement
// alert()  //ReferenceError: alert is not defined , Because we are using node js not broswer


/* 
    // Space and ;
    console.log() console.log()  :Error 2 statements on same line LESS READABLE use ; to remove error
    // More Readable and no need of ; 
    console.log() 
    console.log()
    Most Imp thing in coding is Readablity
*/

console.log(3
    + 3
) // Not Good Practice: Code Readability should be high


/* JAVASCRIPT DOCs
1.ECMA : https://tc39.es/ecma262/
2.mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
*/

let name = 'shoaib' 
let age = 12        
let isLoggedIn = false 


// PREMITIVE DATATYPES

// number  => 2 to power 53
// bigInt  => if number is very big
// string  => ""
// boolean => true/false
// null    => standalone value its type
// undefined => declared but not assigned value to variable
// symbol  => unique



// object 
const value = null
let valueNotAssigned;
// null 
console.log(typeof(value)) // object
console.log(typeof(valueNotAssigned)) // undefined : its is type in js