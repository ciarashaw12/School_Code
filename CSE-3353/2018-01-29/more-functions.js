// More function goodies!

/**
 * Note how greeting is defined locally and goes out of scope when the function
 * ends. The inner function is called a "closure". Closures remember the context
 * in which they were defined, even if variables go out of scope. As we saw in
 * class, attempting to access greeting outside of the human function will result
 * in a runtime error, but calling the returned function (as seen below) works fine.
 */
function human(name) {
  const greeting = `My name is ${name}`;

  return function() {
    console.log(greeting);
  };
}

/**
 * human() returns a function, which we store in result. We can call result
 * normally, demonstrating the power of closures
 */
const result = human('Chris');
result();


/**
 * We can start making linked list nodes using a JavaScript paradigm that
 * resembles public and private data. This accepts two args: a payload (that
 * can be anything) and an optional nextNode object.
 */
function node(payload, nextNode = null) {
  /**
   * Local variables are "private", and go out of scope when the function ends.
   * Again, the returned object (and containing functions) remember the context
   * in which it's defined, so it is able to modify those local variables later
   * via setter / getter methods
   */
  let data = payload;
  let next = nextNode;

  /**
   * In this example we don't need to use the keyword "this". "this" is only
   * used in conjunction with the "new" keyword
   */
  return {
    getData() {
      return data;
    },
    setData(payload) {
      data = payload;
    },
    setNext(nextNode) {
      next = nextNode;
    },
    getNext() {
      return next;
    },

    printList() {
      console.log(data);
      let curr = next;
      while (curr !== null) {
        // Be sure to use the public getters here. Attempting to access data
        // or next directly will cause an error
        console.log(curr.getData());
        curr = curr.getNext();
      }
    },
  };
};

// Sample usage. Note that we don't have to use "new" here, because
// the node function does not use "this".
const node1 = node(10);
const node2 = node(20);
node1.setNext(node2);
console.log(node1.getNext().getData());

node1.printList();
