// Linked List is linear dynamic size datastructure 
// It stores data in nodes

// Node class
class Node {
    constructor(data) {
        this.data = data; // value store in the node
        this.next = null; // pointer to next node
    }
}

// LinkedList class
class LinkedList {

    constructor() {
        this.head = null; // start of the list
        this.size = 0;    // size of the linked list
    }

    // Add new node in the list (added at end of list)
    add(data) {
        // create a new node with given data
        const newNode = new Node(data);
        // if list is empty , set head to new new node
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next; // traverse to the end of the list
            }
            current.next = newNode; // add new node at the end
        }
        this.size++; // increament list size by 1
    }

     // Add new node in the list (added at end of list)
    delete(data) {
        if(!this.head) return; // if list is empty, nothing to delete

        // If head node is the one to be deleted
        if(this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        } 
        
        let current = this.head;
        while(current.next && current.next.data !== data){
            current = current.next; // traverse to the end of the list
        }
        if(current.next) {
            current.next = current.next.next; // bypass the node to delete it
            this.size--;
        }
    }

    // print the linked list
    print() {
        let current = this.head;
        const element = [];
        while(current) {
            element.push(current.data); // collect data from each node
            current = current.next;  // move to the next node
        }
        console.log(element.join(' => ')); // print the linked list 
    }
}

const numberList = new LinkedList();

numberList.add(100);
numberList.add(200);
numberList.add(300);
numberList.add(400);
numberList.add(500);

numberList.print();

numberList.delete(300);
console.log("After delete:");

numberList.print();
