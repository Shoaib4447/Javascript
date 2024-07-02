/**
** Promise: 
    An object representing the eventual completion or failure of an asynchronous operation.

    => States: Pending, Fulfilled, Rejected.
    => Methods: then for handling fulfillment, catch for
    handling rejection.

    => Chaining: Allows for a sequence of asynchronous operations to be handled in order.

    => By using Promises, you can write cleaner and more manageable asynchronous code compared to traditional
        callback-based approaches
*/

// ----------------------------------- Creating & Consuming Promises ---------------------------------
const promise = new Promise((resolve, reject) => {
  // do some async work here
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log('Async Task Complete');
    resolve();
  }, 1000);
});
promise.then(() => {
  console.log('Promise Consumed');
});

//-------------------------------------------- Example 2 -----------------------------------------
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 2000);
}).then(() => {
    console.log("Promise 2 Consumed");
});

// --------------------------- Example 3 passing data through resolve-----------------------------------
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 3");
    resolve({ username: "bhatti", email: "bhatti@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//------------------------------ Example 4 Chaining and avoiding callback hell ----------------------
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    // If have error while web request, network request or while accessing file
    let error = true;
    if (!error) {
      resolve({ username: "bhatti", email: "bhatti@example.com" });
    } else {
      reject("Error: Something Went wrong Error Occured");
    }
  }, 1000);
});
// Chaining and avoiding callback hell
promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally the promise is either resolved or rejected");
  });

// Example 5
// -------------------------- Example 5 Handling Promise with async await ------------------------------

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    // If have error while web request, network request or while accessing file
    let error = false;
    if (!error) {
      resolve({ username: "Js Developer ", email: "js@example.com" });
    } else {
      reject("Error: Js Something Went wrong");
    }
  }, 1000);
});

// Handling Promise with async await
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// } // Output : Error not handled

// To catch error we need to wrap with try catch
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

// Network Request with async await
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();


//-------------------------------- Handling Network Request with promise -----------------------------
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((response)=> console.log(response))
.catch(()=>console.log(`Error: Something went wrong ${error}`))  