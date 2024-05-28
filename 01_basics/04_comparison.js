// console.log(2 > 1) //true
// console.log(2 < 1) //false
// console.log(2 >= 1) //true
// console.log(2 <= 1)
// console.log(2 != 1)
// console.log(2 == 1)
// Results are easy to guess and we know it's simple

/*
* Problem is that when don't compare same datatypes and avoid these cases or comparisons
? When we compare two datatypes make sure that datatypes are same otherwise it can give 
? unexpected results
*/

console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null != 0);
console.log(null >= 0);
/*
* "2" > 1 and "02" > 1 are true because both strings are converted to numbers 2.
* null > 0 is false because null is converted to 0, and 0 is not greater than 0.
* null == 0 is false because null is only loosely equal to undefined.
* null != 0 is true because null is not equal to 0.
* null >= 0 is true because null is converted to 0, and 0 is equal to 0.
*/

// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined >= 0)
// console.log(undefined == 0)
// console.log(undefined === 0)

// Strict Check === it also check the datatype of the both operands and don't change their
// datatype while comparisons

// console.log("2" === 1)
