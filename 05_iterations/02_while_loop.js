// While & do While Loop

// While Loop
let index = 0;
while (index <= 10) {
  console.log(`Value of Index is ${index}`);
  index = index + 2;
}

// While loop on array
let myArray = ["flash", "batman", "superman"];
let i = 0;

while (i < myArray.length) {
  console.log(`${myArray[i]} and value of i is ${i}`);
  i = i + 1;
}

// do while loop
let j = 0;
do {
  console.log(`Value of j is ${j}`);
  j = j + 1;
} while (j <= 5);

let score = 10;
do {
  console.log(`Your score is ${score}`);
  score = score - 1;
} while (score > 0);
