// Implementation of a stack data structure using a linked list order LIFO
// This stack supports basic operations like push, pop, peek, isEmpty, size, and clear.

// Node class for lnked list node
class SNode {
    constructor(data) {
        this.data = data;
        this.next = null; // pointer to the next node
    }
}

class LinkedStack {

    // initialize the stack
    constructor() {
        this.top = null; // top of the stack
        this.size = 0;
    }

    // Push item on the top of the stack
    push(item) {
        const newNode = new SNode(item); // create new node
        newNode.next = this.top; // link the new node next ref as top
        this.top = newNode; // update the top to new node
        this.size++; // increament stack size.
    }

    // Remove top element of the stack
    pop() {
         if(this.isEmpty()){
            return "Stack is empty"
        }
        const popItem = this.top.data;// get thetop element data
        this.top = this.top.next ; // update  the top with next node
        this.size--;
        return popItem; // return removed item
    }

    // Check top element
    peek() {
         if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.top.data; // return top data
    }

    // Check if stack is empty
    isEmpty() {
        return this.size === 0; // check stak size
    }

    // Get size
    getSize() {
        return this.size;
    }

    // print stack
    print() {
        let current =this.top;
        const items = [];
        while(current) {
            items.push(current.data);
            current = current.next;
        }
        console.log(items.reverse().join(" -> "));
    }
}


let stack = new LinkedStack();

// add element 
stack.push(25);
stack.push(35);
stack.push(45);
stack.push(55);
stack.push(65);

stack.print();
console.log("-----------------------");
console.log("Top element : "+stack.peek());

console.log("-----------------------");
console.log("Remove Top element : "+stack.pop());

stack.print();

console.log("-----------------------");
console.log("Stack size : "+stack.getSize());
console.log("Stack empty : "+stack.isEmpty());
