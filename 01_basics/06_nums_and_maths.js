const score = 400
// console.log(score)

// Explicitly defining a type
const balance = new Number(599)
// console.log(typeof balance.toString())
// console.log(typeof balance)


// The toString() method of Number values returns a string representing this number value.
const num = 123
// console.log(typeof num.toString())


// The toFixed() method of Number values formats this number using fixed-point notation.
const PI = 3.14159
// console.log(PI.toFixed(7))
// console.log(PI.toFixed(2))


// The toPrecision() method of Number values returns a string representing this number to the specified precision. 
const num1 = 4123.456789
// console.log(num1.toPrecision(4)) // returns 123.4568


// The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number.
const number = 5000000
// console.log(number.toLocaleString('en-IN')) // returns 5,000,000 //Indian Format
// console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec")) //Chinese Format

console.table(Number.valueOf())
// EPSILON: 2.220446049250313e-16
// MAX_SAFE_INTEGER: 9007199254740991
// MIN_SAFE_INTEGER: -9007199254740991
// MIN_VALUE: 5e-324
// MAX_VALUE: 1.7976931348623157e+308
// NEGATIVE_INFINITY: -Infinity
// POSITIVE_INFINITY: Infinity
// NaN: NaN


/*
 *  ***************************     Maths    ****************************** 

Math { … }
​
E: 2.718281828459045
LN10: 2.302585092994046
LN2: 0.6931471805599453
LOG10E: 0.4342944819032518
LOG2E: 1.4426950408889634
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: function abs()
acos: function acos()
acosh: function acosh()
asin: function asin()
asinh: function asinh()
atan: function atan()
atan2: function atan2()
atanh: function atanh()
cbrt: function cbrt()
ceil: function ceil()
clz32: function clz32()
cos: function cos()
cosh: function cosh()
exp: function exp()
expm1: function expm1()
floor: function floor()
fround: function fround()
hypot: function hypot()
imul: function imul()
log: function log()
log10: function log10()
log1p: function log1p()
log2: function log2()
max: function max()
min: function min()
pow: function pow()
random: function random()
round: function round()
sign: function sign()
sin: function sin()
sinh: function sinh()
sqrt: function sqrt()
tan: function tan()
tanh: function tanh()
trunc: function trunc()
Symbol(Symbol.toStringTag): "Math
*/

console.log(Math.abs(-435))    // Only convert -ve value to +ve values
console.log(Math.round(44.852)) // Round OFF
console.log(Math.ceil(44.852)) // Round off but with top value
console.log(Math.floor(44.852)) // Round off but with bottom value
console.log(Math.sqrt(25)) // Round off but with bottom value
console.log(Math.pow(5,2)) // power of 
console.log(Math.min(5,2,1,3,4,5,77,1)) // Find min value in array  
console.log(Math.max(5,2,1,3,4,5,77,1)) // Find max value in array
console.log(Math.random()) // Returns a random number between 0 and 1
console.log(Math.random()*10) // Returns a random number between 0 and 10
console.log(Math.random()*10+1) // Returns a random number between 1 and 10
console.log(Math.floor(Math.random()*100) + 1) // Returns a random number between 1 and 100

const min = 10
const max = 100
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //
