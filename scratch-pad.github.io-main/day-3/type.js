// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
  // YOUR CODE HERE //
  //given the input value -- value is the current parameter
  //return true = boolean statement, false should be implied
  //how can i decipher if a value is an array?
  //would typeof work? --- i don't think so if it's asking
  //what method deciphers if a value is an array?
    //Array.isArray is a method that returns true or false if value is an array or not
    return Array.isArray(value)
  }



/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 *
 */
function isObject(value) {
  // YOUR CODE HERE //
  //the input/parameter value is established
  //return** true if the value is an Object ---
  //the Object must be intended as a collection

  //looking for a method that returns true or false boolean
  //the goal: decipher if a value is an Object
  //the catch: but NOT null, NOT an array, NOT a date
  //how do I figure out if something is an instance of the Date object?
    
  
      //return Object.isObject(value) did not work

      //found out about instanceof operator

      //return value instanceof Object did not work

  //console.log(value instanceof Object) did not work

  return Object.prototype.toString.call(value) === '[object Object]'

}

// 

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
  // YOUR CODE HERE //
  //input value is established
  //return true if VALUE is either array OR object intended as a collection
  //return false if otherwise
  //similar to isObject

  //i think i need the or operator pipes in my answer '||'

     /*if (typeof value === 'object' || 
        Object.prototype.toString.call(value) === 
        '[object Object]') {
        console.log(true)
        }
        DID NOT WORK
      */ 

      /* if (Array.isArray(value)) {
        console.log(true)
       } else if (Object.prototype.toString.call(value) === '[object Object]') {
        console.log(true)
       } else {
        console.log(false)
       }
        DID NOT WORK
      */
      /* if (Object.prototype.toString.call(value) || Array.isArray(value)) {
        return true
    }
        DID NOT WORK
      */ 

      /*  return value !== null &&
          typeof value === 'object' &&
          typeof value[Symbol.iterator] === 'function'
        DID NOT WORK
      */

      //return Object.prototype.toString.call(value) || Array.isArray(value) 

      /* if (Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]') {
        return true
      }
        DID NOT WORK
      */

        //if (Array.isArray(value) || (typeof value === 'object' && value !== null && value.constructor === Object)) {
        //return true;

        if (Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]') {
        return true;
        }
        return false;
        //i needed to return false after the if this or that statement returns true
        //it was not implicit that if not true it would return false
        //i had to tell the program to do that
}



/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
  // YOUR CODE HERE //

  //return a string
  //the string should represent the type of the value provided

  //NOT return typeof value === 'string'
  //NOT return String.prototype.toString(value)

  /* 
  NOT
  if (typeof value === 'string') {
    return String.prototype.toString.call(value)
  }
  */

  //return String.prototype.toString.call(value)

  /* NOT
  
  if (typeof value === 'string') {
    return value
  }
  */

    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date'; // Adds support for Dates
    return typeof value;

    //this code works even though i'm not sure how
    //i did notice that you need all 3 of these lines for it to work

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
