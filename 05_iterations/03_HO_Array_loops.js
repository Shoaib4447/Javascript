/*
Higher Order Array specific Loops
=> for of (objects)

=> for in (arrays)
=> forEach (arrays) // explicitly need to return value
=> filter (arrays)
=> map (arrays) 
=> reduce (arrays)

=> Maps datatype
*/

["", "", "", ""][({}, {}, {}, {})];

// for of
let colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// for of on string
let greeting = "hello world!";
for (const greet of greeting) {
  if (greet == " ") {
    continue;
  }
  console.log(greet);
}

// for in on object
let person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(key + ": " + person[key]);
}
/* 
Maps => Maps are a type of data structure that stores data in key-value pairs. A map is an
object that allows you to store data with a unique key. Maps are similar to objects, but they have some key differences.
Maps are iterable, meaning you can loop over them using a for...of loop.
Maps have a size property, which returns the number of key-value pairs in the map.
Maps have a clear() method, which removes all key-value pairs from the map.
Maps have a delete() method, which removes a specific key-value pair from the map.
*/
[
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
];
let map = new Map();
map.set("Pk", "Pakistan");
map.set("LR", "Lahore");
map.set("CHBJI", "Chabuarji");


map.clear()
map.delete('CHBJI') 
console.log(map.size);
console.log(map.has('LR'));
console.log(map.get('LR'));


for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}


console.log(map);
