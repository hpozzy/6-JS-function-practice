///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// READ FIRST
// The assertions are there only to help you make sure
// your functions are written correctly. There is no need
// to change them. If you write your function correctly,
// the assertions will do nothing. If you write your function
// incorrectly or not at all, your assertions will fail
// in your console.

// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(a, b) {
  return a + b
}
console.log(sum(2, 4))
console.log(sum(45, 23))
console.log(sum(-2, -57))

// console.assert(sum(2, 4) === 6)
// console.assert(sum(45, 23) === 68)
// console.assert(sum(-2, -57) === -59)

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg(a, b, c) {
  return (a + b + c) / 3
}
console.log(avg(2, 3, 4))

console.assert(avg(2, 3, 4) === 3)
console.log(avg(234, 63, 234))
console.log(avg(123, 234, 345))

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
function getLength(string) {
  return string.length
}

console.log(getLength("Michael"))
console.log(getLength("Javascript"))
console.log(getLength("supercalifragilisticexpialidocious"))

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the first
// parameter is greater than the second. Otherwise
// the function should return `false`.

function greaterThan(a, b) {
  if (a > b) {
    return true
  } else {
    return false
  }
}

console.log(greaterThan(2, 1))
console.log(greaterThan(23, 23))
console.log(greaterThan(-234, 1))

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(Name) {
  return "Hello, " + Name + "!"
}

console.log(greet("Michael"))
console.log(greet("R2D2"))
console.log(greet("Iron Man"))

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
function madLib(a, b, c, d) {
  return "The " + a + " brown " + b + " " + c + " over " + "the " + d + "."
}
console.log(madLib("quick", "fox", "jumps", "fence"))

console.log(madLib("fat", "rabbit", "hops", "wall"))
