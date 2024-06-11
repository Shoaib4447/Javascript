/* 
=============================== Explain filter function ===========================
The filter() method creates a new array with all elements that pass the test implemented by the provided function. It does not execute the function for array elements without values.
Syntax: arr.filter(callbackFunction)
Parameters: callbackFunction - Function is a predicate, to test each element of the array.
Returns: A new array with the elements that pass the test. If no elements pass the test
an empty array is returned.

=> true 
=> false
*/


const coding = ["js", "html", "css", "python", "java", "swift"];

// forEach doesn't return anything and it will not
const values = coding.forEach((item) => {
  //  console.log(item)
  return item; //undefined
});
// console.log(values); // undefined
// console.log(coding); // ["js", "html", "css", "python", "
// java", "swift"]

/* Sometimes we just need want return each value or perform operation on it or want to check conditionally then we use method like
map() method
filter() method
reduce() method


find() method
findIndex() method
includes() method
every() method
some() method
sort() method
reverse() method
join() method
slice() method
splice() method
*/

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Manual Code vs filter()
// Manual Code
let filteredCoding = [];
numbers1.forEach((item) => {
  if (item === 2 || item === 4) {
    filteredCoding.push(item);
  }
});
// console.log(filteredCoding);

// its return values but if we open scope then we need to explicitly return the value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = numbers.filter((num) => num > 5);
let newNums2 = numbers.filter((num) => {
  return num > 2; // explicit return
});
// console.log(newNums);
// console.log(newNums2);

// Now make an array of 9 objects containing title and genre and published date and audition
const books = [
  {
    title: "Harry Potter",
    genre: "Fantasy",
    published: 1997,
    audition: "J.K. Rowling",
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    published: 1954,
    audition: "J.R.R. Tolkien",
  },
  {
    title: "The Hunger Games",
    genre: "Dystopian",
    published: 2000,
    audition: "Suzanne Collins",
  },
  {
    title: "The Giver",
    genre: "Dystopian",
    published: 1999,
    audition: "Lois Lowry",
  },
  {
    title: "The Nightingale",
    genre: "Historical Fiction",
    published: 2015,
    audition: "Kristin Hannah",
  },
  {
    title: "The Hate U Give",
    genre: "Young Adult",
    published: 2011,
    audition: "Angie Thomas",
  },
  {
    title: "The Alchemist",
    genre: "Fantasy",
    published: 1980,
    audition: "Paulo Coelho",
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    published: 2000,
    audition: "Dan Brown",
  },
  {
    title: "The Picture of Dorian Gray",
    genre: "Gothic",
    published: 1890,
    audition: "Oscar Wilde",
  },
];

let includedBooks = books.filter(
  (bk) => bk.published >= 1954 && bk.genre === "Fantasy"
);
console.log(includedBooks);
