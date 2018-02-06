
/**
 * In this patter, we use "this" and "new". It is very similar to the
 * pattern seen in more-functions.js, only here everything is public
 * and perhaps a little more understandable
 */
function Node(data, next = null) {
  // These are PUBLIC
  this.data = data;
  this.next = next;
}

/**
 * A wrapping function that is responsible for creating and managing
 * Node objects.
 */
function LinkedList() {
  this.head = null;

  /**
   * Adds a data payload onto my list. Note that we have to use this.head.
   * Unlike Java / C++, you have to explicitly use "this" to access instance
   * variables like head. Otherwise, you'll create a global "head" variable,
   * which is not what you want
   */
  this.addNode = function(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(data);
  };

  this.print = function() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.data);
      curr = curr.next;
    }
  };

  /**
   * A function that accepts a function. The passed in function should
   * accept one argument: an element in the list. The function is called
   * with each element in the list, in order.
   */
  this.forEach = function(func) {
    let curr = this.head;
    while (curr !== null) {
      func(curr.data);
      curr = curr.next;
    }
  };
}

// Some sample data.
const myList = new LinkedList();
myList.addNode(30);
myList.addNode({name: 'Chris'});
myList.addNode([]);
myList.print();
myList.forEach((element) => console.log(element));
