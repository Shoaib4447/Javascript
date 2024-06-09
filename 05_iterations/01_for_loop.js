// for loop

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 6) {
    console.log("Best Number = 6");
  }
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer Loop value : ${i}`);
  for (let j = 1; j < 11; j++) {
    console.log(`Inner Loop value : ${j} outer loop value ${i}`);
    console.log(`${i} * ${j} = ${i * j}`) // printing tables
  }
}

// Array
let myArray = ["Batman", "Superman", "Flash"];
console.log("lenght of the array: ", myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of i is ${i}`);
}


for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 Continued`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
