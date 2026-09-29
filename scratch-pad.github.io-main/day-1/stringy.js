// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */


function length(string) {
  // YOUR CODE HERE //
  return string.length;
}

console.log(length("Hello"))


/**
 * Given an input String, return a new String forced to lowercase.
 */

function toLowerCase(string) {
  // YOUR CODE HERE //
  return string.toLowerCase()
}

console.log(toLowerCase('HELLO'))

/**
 * Given an input String, return a new String forced to uppercase.
 */

function toUpperCase(string) {
  // YOUR CODE HERE //
  return string.toUpperCase()
}

console.log(toUpperCase('hello'))

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: Solve this problem using a combination of split and join.
 *
 */
function toDashCase(string) {
  // YOUR CODE HERE //
 var elements = string.split(" ")
 var elementsJoined = elements.join("-")
  return elementsJoined.toLowerCase()
  
}

console.log(toDashCase('Hello World'))

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 *
 */

function beginsWith(string, char) {
  // YOUR CODE HERE //
  if (string[0] === char.toLowerCase()) {
    return true
  } else if (string[0] === char.toUpperCase()) {
    return true
  } else {
    return false
  }
}

console.log(beginsWith('Max', 'm'))
/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
  // YOUR CODE HERE //
  if (string[string.length - 1] === char.toUpperCase()) {
    return true
  } else if (string[string.length - 1] === char.toLowerCase()) {
    return true
  } else {
    return false
  }
}

console.log(endsWith("Max", "X"))

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
  // YOUR CODE HERE //
  return stringOne + stringTwo
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
  // YOUR CODE HERE //

  var args = Array.from(arguments);
    
    return args.join("")
}

console.log(join("my", "name", "is"))

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
  // YOUR CODE HERE //
  if (stringOne.length > stringTwo.length) {
    return stringOne
  } else {
    return stringTwo
  }
}

console.log(longest("ben", "maggie"))

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE HERE //
  
  if (stringOne < stringTwo) {
    return 1
  } else if (stringOne > stringTwo) {
    return -1
  } else {
    return 0
  } 
}

console.log("ben", "maggie")

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE HERE //
  if (stringOne > stringTwo) {
    return 1
  } else if (stringOne < stringTwo) {
    return -1
  } else {
    return 0
  } 
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}

