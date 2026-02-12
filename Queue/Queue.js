// Queue : Implementation of a queue data structure with array-based storage order FIFO
// This queue supports basic operations like enqueue, dqueue, peek, isEmpty, size, and clear.

class Queue{
    //initialize the queue
    constructor() {
        this.items = [];
    }

    // add element
    enqueue(item) {
        this.items.push(item);
    }

    // remove element
    dequeue() {
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    // peek : check first element
    peek() {
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    // check queue is empty
    isEmpty() {
        return this.items.length ===0;
    }

    // get queue size
    size() {
        return this.items.length;
    }

    // clear the queue
    clear(){
        this.items = [];
    }

    // Print stack
    print() {
        console.log(this.items.join(" -> "));
    }
}

// Example 
let queue = new Queue();

// add itesm to the queue
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);

queue.print();
console.log("---------------");
console.log("First item : "+ queue.peek());

queue.dequeue();

console.log("---------------");
queue.print();
console.log("---------------");
console.log("First item : "+ queue.peek());

console.log("Size: "+ queue.size());
console.log("Queue is empty : "+ queue.isEmpty());


