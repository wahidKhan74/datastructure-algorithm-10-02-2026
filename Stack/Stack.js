// Stack : Implementation of a stack data structure with array-based storage order LIFO / FILO
// This stack supports basic operations like push, pop, peek, isEmpty, size, and clear.

class Stack {

    // initialize stack
    constructor() {
        this.itmes = [];
    }

    // Add element - Push
    push(element) {
        this.itmes.push(element);
        console.log(element + " pushed into stack");
    }

    // Remove top element - Pop
    pop() {
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.itmes.pop();
    }

    // Check stack empty
    isEmpty() {
        return this.itmes.length === 0;
    }

    // View top element - Peek
    peek() {
         if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.itmes[this.itmes.length-1];
    }

    // Size of the stack
    size() {
        return this.itmes.length;
    }

    // Print stack
    print() {
        console.log(this.itmes.join(" -> "));
    }
}

const stack = new Stack();

// add elements
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log("------------------");
// print stack
stack.print();
console.log("------------------");
console.log("Top element : "+stack.peek()); // 50

console.log("Remove Top element : "+stack.pop()); // 50
console.log("------------------");
stack.print();
stack.push(90);
console.log("------------------");
// print stack
stack.print();



