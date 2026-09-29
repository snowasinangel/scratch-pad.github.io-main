// #!/usr/bin/env node

'use strict';

/**
 * Create a factory function called `makeContact` that takes in `id`, `nameFirst`, and `nameLast`.
 * This function should returns a contact object.
 *
 * ex: makeContact(0, 'Max', 'Gaudin') // => { id: 0, nameFirst: 'Max', nameLast: 'Gaudin' }
 *
 */

function makeContact(id, nameFirst, nameLast) {
  // Solve this function first

  //the function was created
  //the parameters were established
  //should return a contact object

  var contact = {}
  contact.id = id
  contact.nameFirst = nameFirst
  contact.nameLast = nameLast
  
  return contact                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}

var contacts = [
  {
    id: 1,
    nameFirst: 'Max',
    nameLast: 'Gaudin',
  },
  {
    id: 2,
    nameFirst: 'John',
    nameLast: 'Fraboni',
  },
  {
    id: 3,
    nameFirst: 'Alon',
    nameLast: 'Robinson',
  },
  {
    id: 4,
    nameFirst: 'Mykia',
    nameLast: 'Smith',
  },
  {
    id: 5,
    nameFirst: 'Alice',
    nameLast: 'Green',
  },
];

/**
 * Create a function called `findContact` that takes in an array of contact objects and a
 * fullName (ex: "Max Gaudin"). This function should return the contact object in the array
 * that matches the `fullName` input, or it should returned undefined if no object is found
 * matching.
 */

function findContact(array, fullName) {
  // YOUR CODE HERE

  //findContact function created
  //take in an array of contact objects and fullName

  //return contact object 
  //return contact objects using a for loop

  for (let i = 0; i <= array.length - 1; i++) {
  

  //match contact object to fullName input 
  //matching ===

   if (`${array.firstName} ${array.lastName}` === fullName) {
      return array[i]
   }
  }
  //or return undefined if no matching obj is found
}

/**
 * Create a function called `removeContact` that takes in an array of contact objects and a
 * contact object to remove. This function search through the array and remove the contact object
 * if found.
 * Use splice method
 */
function removeContact(array, contact) {
  // YOUR CODE HERE
}

/**
 * Create a function called `getNamesThatBeginWithLetter` that takes in an array of contact objects.
 * This function should iterate through the array and return a new array of all of the contact
 * objects whose first names begin with input letter
 */
function getNamesThatBeginWithLetter(array, letter) {
  // YOUR CODE HERE
}

/**
 * Create a function called `getAllContactNames` that takes in an array of contact objects.
 * This function should return a string of each object's full name followed by a linebreak character.
 *
 * example:
 *
 *    getAllContactNames(contacts); // => 'Max Gaudin\nJohn Fabroni\nAlon robinson\nMykia Smith\Alice Green'
 */
function getAllContactNames(array) {
  // YOUR CODE HERE
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
