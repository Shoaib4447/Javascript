/*
* => push() 
* => concat() 
* => ...spread
* => flat(depth - level) 
* => from() 
* => of() 
*/


const heros_1 = ["hero1", "hero2", "hero3", "hero4"];
const villain_2 = ["villain1", "villain2", "villain3", "villain4"];

heros_1.push(villain_2);
// Expected heros_1 array = ['hero1','hero2','hero3','hero4','villain1','villain2','villain3','villain4']
// but its takes the villain_2 array as element not as we expected let's see
console.log(heros_1[4]);
// Output: ['hero1','hero2','hero3 ,'hero4',['villain1','villain2','villain3','villain4']]
console.log(heros_1[4][2]); // Accessing the elements of the villain array

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, a new array is returned with the merged arrays.
const result = heros_1.concat(villain_2);
console.log("Using Concat Method: ", result);

// Spread Operator
const result2 = [...heros_1, ...villain_2];
console.log("Using Spread Operator: ", result2);

// flat(depth) // How much depth array should be flat
const array1 = [1, 2, 3, [3, 46, 67], [34, 46, 2, [234, [233]]], 123];
const flatArray = array1.flat(Infinity);
console.log("Using flat method: ", flatArray);

// When we want to convert data into array
const str = "Hello World";
const strToArray = [...str];
console.log("String to Array: ", strToArray);
console.log(Array.isArray(strToArray));

// from() method
const str2 = "Hello World";
const strToArray2 = Array.from(str2);
console.log("String to Array using from method: ",strToArray2)

// Interesting case:
console.log(Array.isArray({ name: "Shoaib Bhatti" }));
console.log(Array.from({ name: "Shoaib Bhatti" })); // It will return [empty array] why ?
// Because Array.from() method expects an iterable object, and objects are not iterable by default.
// To make an object iterable, we need to add a Symbol.iterator property to it.
console.log(Array.from(Object.entries({ name: "Shoaib Bhatti" }))); // Now
//  In case of object to array we need to specify the .from() that make an array of the keys or the values
const obj = { a: 1, b: 2, c: 3 };
const objToArray = Array.from(Object.values(obj));
console.log(objToArray);


// Practice from()
const num1 = [2,3,4,5]
const num2 = Array.from(num1,(x)=>x+1);
console.log("Number 2 Array from() : ",num2);


// of()
let score1 = 100;
let score2 = 200;
let score3 = 300;
let scores = Array.of(score1, score2, score3);
console.log(" of() scores : " , scores);
const arrayFromValues = Array.of(1, 2, 3, 4);
console.log("of() Method : ", arrayFromValues);
