// Function Definition : A function is a "subprogram" that can be called by code external (or internal, in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function as parameters, and the function will return a value.

function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("O");
  console.log("A");
  console.log("I");
  console.log("B");
}

// sayMyName : Reference to function
// sayMyName() : execution of function
// sayMyName()

// We pass parameters while defining the function and arguments while executing it
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
  /* We didn't handled the type of input user will give the problem can occur
     => like user can pas string etc
     => Checking or handling these cases is necessary
    */
}

// addTwoNumbers(1,false)
// addTwoNumbers(1,null)
// addTwoNumbers(1,'bhatti')
// addTwoNumbers(typeof(1,'3'))

// We can store the function in a variable let's see what value it gives us
const result = addTwoNumbers(1, 3);
// Let's check what is in the result
console.log("Result :>> ", result); // undefined >> why undefined because function is not returning anything >> let's write same function in a right way

function addNumbers(num1, num2) {
  /* const result = num1 + num2
    return result // after returning nothing will be executed
    
    Achieving same result while optimizing the space also
    */
  return num1 + num2;
}

const result2 = addNumbers(1, 4);
console.log("Result :>> ", result2);

// When we return then we explicitly need to print the result of a function
function userLoggedIn(username) {
  // if user didn't passed anything
  if (!username) {
    console.log("Please enter a username:");
    return;
  }
  return `${username} just logged in`;
}

// Just execute and nothing will be printed because we just returned
// userLoggedIn('Bhatti')
// we have not given command to print anything yet let's print it and see results
console.log(userLoggedIn("Bhatti")); // or store it a variable and print it

/*
* ****************************  REST OPERATOR  ****************************
*=> We can use it when we don't know how many arguments user will give
? Example : CART => User can give add many items and we don't know how much arguments he can give 
*=> Let's solve this situation
*/

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(1,3,4,6,710));




/*  *************** How to pass object in function how to use it ************* */

const user = {
  username: "Shoaib Bhatti",
  price: 199,
};

function handleObject(anyObject){
    // We have to use type checking that this key exist in the object or not
    console.log(`Username is ${anyObject.user} and Price is ${anyObject.price}`);
}

// handleObject(user) // Compulsory to pass object to this function
handleObject({
    user : 'Shoaib',
    price : 299
}) // Another way to pass object


/*  *************** How to pass Array in function how to use it ************* */
const myNewArray = [200, 400, 500, 600]

function returnSecondValueofArray (anyArray){
    return anyArray[1]
}

console.log(returnSecondValueofArray(myNewArray));
// console.log(returnSecondValueofArray([200,500,700])); // Directly passing array to the function