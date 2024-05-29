// Strings are useful for holding data that can be represented in text form.
const name = "shoaib"
const repoCount = 11

/*
 ? Some String Method
 * => '' + ''
 * => string Interpolation
 * => string Declaration
 * => lenght
 * => subString()
 * => toUpperCase()
 * => charAt() 
 * => indexOf() 
 * => __proto__ 
 * => slice() 
 * => replace() 
 * => includes() 
 * => split() 
 * => bold() 
 */

// Concatination
// console.log(name + repoCount)

// String Interpolation
// You can directly inject the variable in placeholders
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

// String declaration 
const gameName = new String('Bhatti');
// console.log(gameName.__proto__)
// console.log(gameName instanceof String)
// console.log(gameName.toUpperCase()) // uppercase the string
// console.log(gameName.charAt(3))     //Check character position
// console.log(gameName.indexOf('t'))


const newString = gameName.substring(0,4) // 
// console.log(newString)

//The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string. 
const anotherString = gameName.slice(-4,-1) 
// console.log(anotherString)


//  The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string
const newStringOne = "  Bhatti you added lot of extra spaces   "
// console.log(newStringOne)
// console.log(newStringOne.trim())


// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement
const url = 'https://hitesh.com/%20'
// console.log(url.replace('%20','-')) 

//The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
// console.log(url.includes('ht'))


// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
console.log(url.split('//'))
