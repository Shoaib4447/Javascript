/*
============================== map() method on array =============================
map() returns a new array with the results of applying the provided function on every element in the calling array.

*/

// let numbers = [1, 2, 3, 4, 5];
// let doubleNumbers = numbers.map(function (num) {
//    return num * 2;
// });

// let numbers = [1, 2, 3, 4, 5];
// let doubleNumbers = numbers.map((num) => num * 2);

/*
========================== Explain what is chaining =============================
Chaining is a technique of calling multiple methods on the same object in a single line of code It is possible because most of the methods in JavaScript return the object itself, allowing us to call another method on the returned object.

For example,
we can chain the map() and filter() methods together to first double the numbers
and then filter out the numbers that are greater than 10.
*/
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num)=> num > 11);

console.log(doubleNumbers);

