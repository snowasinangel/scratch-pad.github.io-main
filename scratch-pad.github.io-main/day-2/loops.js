// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE HERE //
  //loop forward through array
  //positive iteration of index
  for (let i = 0; i <= array.length - 1; i++) {
    //use console.log() to pring the values of the array
    console.log(array[i])
  }
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE HERE //
  //loop backwards = iterate index backwards using --
  for (let i = array.length - 1; i >= 0; i--) {
    //print the resulting values
    console.log(array[i])
  }
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE HERE //
  //input is Object
  //RETURN an array
  //array contains the object keys ---
  //how do i translate object keys into an array??
  //Object.keys()
  return Object.keys(object)
}

console.log(getObjectKeys(object))


/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE HERE //
  //input object established
  //loop over the object
  //print keys using console.log()
  for (let key of Object.keys(object)) 
    //why and how do i know it's supposed to look like this? 
  console.log(key)

}

console.log(printObjectKeys(object))
/**
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE HERE //
  return Object.values(object)
}

console.log(getObjectValues(object))

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE HERE //
  for (let value of Object.values(object))
  console.log(value)
}

console.log(printObjectValues(object))
/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE HERE //
  return Object.entries(object).length
}

console.log(getObjectLength(object))

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE HERE //
  //input object established
  //loop over the object in reverse
    //need to convert the object into an array
    Object.values(object).reverse().forEach(value => {
      console.log(value)
    })
  //print the values in reverse using console.log()
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
