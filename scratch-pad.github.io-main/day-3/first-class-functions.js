// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */

function createGreaterThanFilter(base) {
  return function(value) {
    return value > base;
  };
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */

function createLessThanFilter(base) {
  return function(value) {
    return value < base;
  };
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */

function createStartsWithFilter(startsWith) {
  return function(string) {
    return string.charAt(0).toUpperCase() === startsWith.charAt(0).toUpperCase();
  };
}

/*
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */

function createEndsWithFilter(endsWith) {
  return function(string) {
    return string.charAt(string.length - 1).toUpperCase() === endsWith.charAt(endsWith.length - 1).toUpperCase();
  };
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 *
 * examples:
 *
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 *
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 *
 */
function modifyStrings(strings, modify) {
  const result = [];

  for (let i = 0; i < strings.length; i++) {
    result.push(modify(strings[i]));
  }

  return result;
}

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 *
 * examples:
 *
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 *
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 */

function allStringsPass(strings, test) {
  for (let i = 0; i < strings.length; i++) {
    if (!test(strings[i])) {
      return false;
    }
  }

  return true;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}