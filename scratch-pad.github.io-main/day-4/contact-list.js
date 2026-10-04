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

  //return contact object in the array
  //matches fullname input
  //return contact objects using a for loop

  for (let i = 0; i <= array.length - 1; i++) {
  
   if (fullName === array[i].nameFirst + ' ' + array[i].nameLast) {
    return array[i]
   } 
 }
  return undefined
  }
  //or return undefined if no matching obj is found

console.log(findContact(contacts, 'Max Gaudin'))



/**
 * Create a function called `removeContact` that 
 * takes in an array of contact objects and a
 * contact object to remove. This function search 
 * through the array and remove the contact object
 * if found.
 * Use splice method
 */
function removeContact(array, contact) {
  // YOUR CODE HERE
  /*for as long as the index is less than the length of the
    array - 1, iterate through the array
  */
  for (let i = 0; i < array.length; i++) {

    /*until you reach the name of the contact object parameter
      if you reach an index of the array that matches
      the contact object, splice it
    */ 
    if (array[i].id === contact.id) {
      array.splice(i, 1)
    }
  }
  // and return the new array
  return array
}

/**
 * Create a function called `getNamesThatBeginWithLetter` 
 * that takes in an array of contact objects.
 * This function should iterate through the 
 * array and return a new array of all of the contact
 * objects whose first names begin with input letter
 */
function getNamesThatBeginWithLetter(array, letter) {
  // YOUR CODE HERE
  //iterate through the array
  //each index IS a contact object

  //return a new array

  var letterMatch = []

  for (let i = 0; i < array.length; i++) {

    //all the contact objects whose first names
    //begin with input letter
  
    if (array[i].nameFirst[0] === letter) {
      //push the property of the contact object into the new array
      letterMatch.push(array[i])
    }
    
}
return letterMatch
}

/**
 * Create a function called `getAllContactNames` 
 * that takes in an array of contact objects.
 * This function should return a string of each 
 * object's full name followed by a linebreak 
 * character.
 *
 * example:
 *
 *    getAllContactNames(contacts); // => 
 *    'Max Gaudin\nJohn Fabroni\nAlon robinson\nMykia 
 *      Smith\Alice Green'
 */
function getAllContactNames(array) {
  // YOUR CODE HERE
//return a string
//string of each object's full name followed by a linebreak

//return a string
var result = ``

//starting at zero while you can iterate through 
// the objects in the array
for (let i = 0; i < array.length; i++) {
  const nameFull = array[i].nameFirst + ' ' + array[i].nameLast

  //make variable for the full names
  //array index nameFirst, space, array index name last, 
  // ending with the line break character

  //give me back a string with that object's fullname
  result += nameFull

  if (i < array.length - 1) {
    result += '\n'
  }
}
return result

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
