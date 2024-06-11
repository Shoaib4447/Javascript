// ForEach loop
// It is used to iterate over an array or an object.
// It does not return anything, it just performs an action on each item in the array or object
// It is not chainable, meaning it does not return the array or object it is called on
// It is not suitable for situations where you need to break out of the loop early
// It is not suitable for situations where you need to skip certain items in the array or object

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  //   console.log(number * 2);
});
// Output: 2, 4, 6, 8, 10

// function printMe(item){
//     console.log(item);
// }
// numbers.forEach(printMe)





numbers.forEach((num, index, arr) => {
//   console.log(`Index: ${index}, Value: ${num}, Array: ${arr}`);
});

// forEach on array of objects
let students = [
  { name: "John", age: 20 },
  { name: "Jane", age: 22 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 18 },
];

students.forEach((student)=>{
    // console.log(student);
    console.log(`Name: ${student.name}, Age: ${student.age}`)
})






