// ---------------------
// Define a function max() that takes two numbers as
// arguments and returns the largest of them. Use the
// if-then-else construct available in JavaScript.
// ---------------------
function max(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

console.log(max(2, 3))
console.log(max(23, 24))
console.log(max(-23, 12))

// ---------------------
// Define a function maxOfThree() that takes three
// numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
  return Math.max(a, b, c)
}

console.log(maxOfThree(2, 56, 3))
console.log(maxOfThree(12, 3, 4))
console.log(maxOfThree(-12, 4, -5))

// ---------------------
// Write a function isVowel() that takes a character (i.e. a
// string of length 1) and returns true if it is a
// vowel, false otherwise.
// ---------------------
function isVowel(a) {
  if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u" || a == "E") {
    return true
  } else {
    return false
  }
}

console.log(isVowel(0))
console.log(isVowel("B"))
console.log(isVowel("b"))
console.log(isVowel("a"))
console.log(isVowel("E"))
console.log(isVowel("2"))

// ---------------------
// Write a function rovarspraket() that will translate
// a text into "Rovarspraket". That is, double every
// consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return
// the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket() {}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

// ---------------------
// Define a function reverse() that computes the reversal
// of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
// ---------------------
function reverse(a) {
  let reversed = ""
  for (let i = a.length - 1; i >= 0; i--) {
    reversed += a[i]
  }
  return reversed
}
console.log(reverse("books"))
console.log(reverse("we don't want no trouble"))
