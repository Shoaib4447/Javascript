/* 
* The Array object, as with arrays in other programming languages, enables storing a  collection of multiple items under a single variable name
=> JavaScript arrays are resizable
=> can contain a mix of different data types.
=> JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes : array['one'] 
=>  must be accessed using nonnegative integers (or their respective string form) as indexes.
=> JavaScript arrays are zero-indexed
=> the last element is at the value of the array's length property minus 1.

? Deep Copy(Primitive[stack memory]) vs Shallow Copy (Non - Primitive[heap memory])
* Deep Copy: When you create a deep copy of an array, it creates a new copy of each element in the original array. This means that if you modify an element in the copied array, it won't affect the original array.

* Shallow Copy: When you create a copy of an array, it only copies the references to the original elements, not the elements themselves. This means that if you modify an element in the copied array it will also be modified in the original array.

*/

const myArray = [ 0,2,3,4,5,7,8,true,undefined,"shoaib",{},[], Symbol,null];
// console.log(myArray[3]); // Accessing elements with index
// console.log(myArray.length); // Getting the length of the array
// console.log(myArray[myArray.length - 1]); // Accessing the last element of the
// console.log(myArray.push(10)); // Adding an element to the end of the array
// console.log(myArray.pop()); // Removing the last element from the array
// console.log(myArray.includes(7)); // Checking if an element exists in the array
// console.log(myArray.indexOf(7)); // Getting the index of an element in the array
// console.log(myArray.unshift(20)); // Adding an element to the beginning of the array
// console.log(myArray.shift()); // Removing the first element from the array
// console.log(myArray.join());  // Convert the array into the String Type
// console.log(myArray);

// slice and splice
const myArray2 = [1,2,3,4,5,6,7,8,9,10];
    console.log("Original array : ",myArray2);
    // console.log("Sliced Array: ",myArray2.slice(2,5)); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
    console.log("Spliced Array: ",myArray2.splice(2,3)); // removes a sequence of array elements and returns the removed elements. This method changes the original array.
    console.log("Final Array: ",myArray2); // Original array is modified    

/*
? Array Methods

at: function at()
length: 1
name: "at"
concat: function concat()
constructor: function Array()
copyWithin: function copyWithin()
entries: function entries()
every: function every()
fill: function fill()
filter: function filter()
find: function find()
findIndex: function findIndex()
findLast: function findLast()
findLastIndex: function findLastIndex()
flat: function flat()
flatMap: function flatMap()
forEach: function forEach()
includes: function includes()
indexOf: function indexOf()
join: function join()
keys: function keys()
lastIndexOf: function lastIndexOf()
length: 0
map: function map()
pop: function pop()
push: function push()
reduce: function reduce()
reduceRight: function reduceRight()
reverse: function reverse()
shift: function shift()
slice: function slice()
some: function some()
sort: function sort()
splice: function splice()
toLocaleString: function toLocaleString()
toReversed: function toReversed()
toSorted: function toSorted()
toSpliced: function toSpliced()
toString: function toString()
unshift: function unshift()
values: function values()
with: function with() 

*/