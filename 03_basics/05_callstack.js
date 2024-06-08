/*
++++++++++++++++++++++++++++++ Javascript Execution Context ++++++++++++++++++++++++++++
*We have created a file how javascript will run it

1. Global Execution Context
=> It will create a {global execution context} and refer it to {this} variable
    => It will create a global object ({window object} in browser, {global object} in nodejs)
    => It will execute the code line by line

2. Functional Execution Context
=> When we call a function, it will create a new {functional execution context} and refer it to {this} variable
    => It will create a new scope chain (lexical scope)
    => It will execute the code line by line    

3. Eval Execution Context 
    => It will create a new {eval execution context} and refer it to {this} variable
    => It will execute the code line by line


*javascript is executed in a context
*javascript execution context is a environment where the code is executed

*It is created when the code is executed
*It is destroyed when the code is finished executing

*It has two phases
1. Memory Creation Phase
2. Execution Phase
 */

// Example how this code will be executed in Js
let val1 = 10;
let val2 = 20;
function add(num1, num2) {
  let total = num1 + num2;
  return total;
  console.log(total); // result1 = undefined (because add function does not return anything)
}
let result1 = add(val1, val2);
let result2 = add(40, 60);

/*
How this code will be executed in Js

1. Global Execution Context allocate to {this}
2. Memory Creation Phase 
3. Execution Phase (add function)


2. Cycle 1 => Memory Creation Phase:
    1. val1 = undefined
    2. val2 = undefined
    3. add = function definition
    4. result1 = undefined
    5. result2 = undefined

3. Cycle 2 => Execution Phase
    1. val1 = 10
    2. val2 = 20
    3. add function is called with arguments val1 and val2
    4. new Functional Execution Context is created for add function {new variable environment + Execution thread}
        4.1. Memory Creation Phase for add function
            1.val1 = undefined
            2.val2 = undefined
            3.total = undefined
        4.2. Execution Phase for add function (processing)
            1.val1 = 10
            2.val2 = 20
            3. return total (30) {Returned back to global execution context}
 
        4.3 Once Completed new Function Executional context will be deleted

    5. => result1 = 30

    6. add function is called with arguments 40 and 60
    7. new Functional Execution Context is created for add function {new variable environment + Execution thread
        7.1. Memory Creation Phase for add function
            1.val1 = undefined
            2.val2 = undefined
            3.total = undefined
        7.2. Execution Phase for add function (processing)
            1.val1 = 40
            2.val2 = 60
            3. return total (100) {Returned back to global execution context}
        7.3 Once Completed new Function Executional context will be deleted
    8. => result2 = 100

    
*/

/*
+++++++++++++++++++++++++++++++++++++++++++++++ Call Stack +++++++++++++++++++++++++++++++++++++++++++
* Call stack :
    It is a data structure that follows LIFO (Last In First Out) principle. It's
    used to store information about the active subroutines of a program. In other words, it's
    used to keep track of the function calls.
    When a function is called, it's added to the top of the call stack. When the function
    returns, it's removed from the top of the call stack.
*/

let val13 = 10;
let val22 = 20;
function add(num1, num2) {
  let total = num1 + num2;
  return total;
  console.log(total); // result1 = undefined (because add function does not return anything)
}
let result11 = add(val13, val22);
let result22 = add(40, 60);

/*
Let's create stack
1. Global Execution Context (main function)
2. add function (first call)
3. add function (second call)


|                            |
|                            |
|____________________________| ---------------> Call Stack
|       add function         |
|____________________________|
|  Global Execution Context  |
|____________________________|

*/

// # Example of Call Stack in js
function one() {
console.log("one");
two();
}
function two() {
console.log("two");
three();
}
function three() {
console.log("three");
}
one();

/*
creating stack like this if i have 3 functions 
one()
two()
three()
One() call two() , two() call three()
when We execute one() How it will behave in call stack
1. Global Execution Context (main function)
2. one function
3. two function
4. three function


|                            |
|                            |
|____________________________|
|          three()           |
|____________________________|
|           two()            |---------------> Call Stack
|____________________________|
|           one()            |
|____________________________|
|  Global Execution Context  |
|____________________________|

How they will be removed from stack
when three() function is completed it will be removed from stack
when two() function is completed it will be removed from stack
when one() function is completed it will be removed from stack


*/



/* 


* How exactly javascript execute code + call stack (Important for Interview)

JavaScript is a single-threaded, other languages like Java, C++, Python, etc. are multi-threaded. 

JavaScript uses an event-driven, non-blocking, asynchronous
programming model. This means that when a task is executed, it doesn't block
other tasks from being executed. Instead, it uses callbacks, promises, or
async/await to handle asynchronous operations.

Here's how JavaScript executes code:
1. **Parsing**: The JavaScript engine (like V8 in Chrome) parses the code
   into an Abstract Syntax Tree (AST).
2. **Lexical Analysis**: The engine breaks the code into individual tokens.
3. **Syntax Analysis**: The engine checks the syntax of the code and
   generates an AST.
4. **Optimization**: The engine optimizes the code for better performance.
5. **Execution**: The engine executes the code. This is where the magic happens!

   The engine uses a **call stack** to keep track of the currently executing
   function. When a function is called, it's added to the top of the call stack
   and when it returns, it's removed from the call stack.

6. **Event Loop**: The engine uses an **event loop** to handle asynchronous
   operations. The event loop is a queue of tasks that need to be executed.
   When a task is added to the queue, the engine executes it and then
   removes it from the queue.

7. **Garbage Collection**: The engine periodically cleans up unused memory
   using a garbage collector.

In summary, JavaScript executes code by parsing, analyzing, optimizing, and
executing it using a call stack and event loop. It's a single-threaded language
that uses asynchronous programming to handle multiple tasks efficiently.
*/

// Call Stack
function a() {
  console.log("a");
  b();
}
function b() {
  console.log("b");
  c();
}
function c() {
  console.log("c");
}
a();
// Output: a, b, c
// Call stack: a -> b -> c -> (empty)
