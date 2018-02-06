'use strict';

/**
 * Strings: examples of the three different kinds of declaring strings.
 * Single quotes and double quotes are nearly identical.
 * Backticks (the key above the tab key) let you interpolated
 * other variables into the string in a nice way. Note that the
 * other variables don't have to be strings themselves.
 */
const singleQuotes = 'I can do a string with " in it';
const doubleQuotes = "I can do a string with ' in it";
const backticks = `Here are the other strings: ${singleQuotes} ${doubleQuotes}`;

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks);

/**
 * Arrays: You can add elements to any index in an array and the
 * runtime will allow it. There's no real concept of an "OutOfBoundsException"
 * or "Segmentation Fault", but it's on the developer to make sure that
 * you're accessing valid data.
 */
const x = [];
x[0] = 3;
x[1] = 4;
x[2] = 5;
x[5] = 100;

/**
 * You can use push to push onto the end of the array. Note that since
 * we have an item at index 5, this will put the element at index 6
 * and result with a length of 7.
 */
x.push(50);
console.log('Length is', x.length);

/**
 * If you attempt to access an element that hasn't been defined in an
 * array, it will return undefined.
 */
if (x[3] === undefined) {
  console.log('That element is undefined');
}

/**
 * Note that the above if statement uses a triple equal sign. There are
 * two equality operators: double and triple equals. Double equals will
 * attempt to coerce the second argument to match the first, THEN compare
 * the results. Triple equal will not. Triple equal is preferred. Read
 * more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 */
if ('2' == 2) {
  console.log("The number 2 is coerced to a string '2'");
}

if (2 !== '2') {
  console.log('You can also use != and !== for inequality');
  console.log('You should prefer to use === and !== instead of == and !=');
}

/**
 * Functions: There are three main ways to declare a function:
 * named functions, anonymous functions, and fat arrow functions.
 * Declaring them is different, but calling them is all the same.
 */
function named(name) {
  console.log(`My name is ${name}`);
}

const anonymous = function(name) {
  named(name);
};

const arrow = (name) => {
  anonymous(name);
};

arrow('Chris');

/**
 * Recall that object values can be functions. You can either
 * use anonymous or fat arrow functions.
 */
const obj = {
  sing: function(song) {
    console.log(song);
  },
  dance: () => {
    console.log('Do a dance!');
  },
};

obj.sing('Fa la la la la');

/**
 * Passing functions to other functions. The Array forEach function
 * accepts one argument: a function. That function should accept
 * one argument: a particular item in the array. That function can
 * do whatever it wants with that element, which in this case we
 * add 5 and log.
 */
const logger = (num) => {
  const y = num + 5;
  console.log(y);
};

x.forEach(logger);
