'use strict';

/**
 * To run this program: simply run:
 *
 * npm start
 */

/**
 * Declaring variables with const: the __reference__ cannot change.
 * Attempting to reassign hello to a new value will cause a runtime
 * error. This is an example of weak typing
 */
const hello = 'world';
console.log(hello);

/**
 * Declaring variables with let: the __reference__ can change, as
 * you see below. This is an example of weak and loose typing
 */
let x = 'Hello world';
x = 4;
console.log(x);

/**
 * Objects: Objects are declared with {}. Objects are made of key-value
 * pairs, where the key is either a number or string, and the value is
 * anything. In the example below, we initialize the object with one key
 * and value.
 */
const chris = {
  height: '5 feet 10 inches',
};

/**
 * There are a number of ways to set a value to a key. The following is
 * the dot notation
 */
chris.name = 'Chris';

/**
 * The following is the bracket with string notation
 */
chris['age'] = 26;

console.log(chris);

/**
 * The following is using a string variable
 */
const myKey = 'degree';
chris[myKey] = 'Computer Science';

/**
 * Objects can contain other objects, nested arbitrarily deep
 */
chris.address = {
  city: 'Dallas',
  state: 'TX',
};

/**
 * Objects can contain arrays, such as the following of City / Year pairs
 */
chris.cities = ['Barcelona', 2016, 'Munich', 2017];


console.log(chris);

/**
 * You can chain accesses between dot and bracket notation
 */
console.log(chris.cities[0]);

/**
 * Here's a nifty way to print an arbitrarily deep object with nice
 * formatting. Keep this handy.
 */
const objectAsNicelyFormattedString = JSON.stringify(chris, null, 2);
console.log('The following will be nicely formatted');
console.log(objectAsNicelyFormattedString);
