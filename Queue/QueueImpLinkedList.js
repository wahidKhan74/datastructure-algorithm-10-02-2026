// Implementation of a queue data structure using a linked list order FIFI
// This queue supports basic operations like enqueue, dqueue, peek, isEmpty, size, and clear.
class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedQueue {

  constructor() {
    this.front = null; // start
    this.rear = null;  // end
    this.size = 0;
  }

  // Add element to rear 
  enqueue(value) {
    const newNode = new QNode(value);

    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
    console.log(`${value} added to queue`);
  }

  // Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    const removedValue = this.front.value;
    this.front = this.front.next;

    // If queue becomes empty
    if (!this.front) {
      this.rear = null;
    }

    this.size--;
    console.log(`${removedValue} removed from queue`);
    return removedValue;
  }

  // Peek front element
  peek() {
    if (this.isEmpty()) return null;
    return this.front.value;
  }

  // Check if queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get size
  getSize() {
    return this.size;
  }

  // Print queue
  print() {
    let current = this.front;
    let result = "";

    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result );
  }
}


let queue = new LinkedQueue();

// add element
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);

queue.print();
console.log("---------------");
console.log("First item : "+ queue.peek());
queue.dequeue();

console.log("---------------");
queue.print();
console.log("First item : "+ queue.peek());

console.log("Size: "+ queue.getSize());
console.log("Queue is empty : "+ queue.isEmpty());
