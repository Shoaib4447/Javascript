/*Explain reduce method in simple words
The reduce() method in JavaScript is used to reduce the array to a single value. It executes a provided function for each value of the array (from left to right) so as to reduce it to a single output value.
In simpler words, it takes an array, applies a function to each element, and returns a single value.

For example, if you have an array of numbers and you want to find the sum of all the
numbers, you can use the reduce method. 
*/

// Example # 1
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, current) => acc + current, 0);
// Explicit return
// {
//   console.log(`acc : ${acc} and current value : ${current}`);
//   return acc + current;
// }, 0);
// console.log(sum); // Output: 15

// Example # 2 Shopping Cart
let cart = [
  { product: "Apple", price: 10 },
  { product: "Banana", price: 5 },
  { product: "Orange", price: 7 },
  { product: "Grapes", price: 15 },
];

let totalCoast = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalCoast);