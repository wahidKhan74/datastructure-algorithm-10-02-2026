// Doubly linked list node
// - `value`: stored payload
// - `next`: pointer to the next node (towards tail)
// - `prev`: pointer to the previous node (towards head)
class DLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// DoublyLinkedList
// - Maintains `head` and `tail` pointers for O(1) insertion/removal
// - `length` tracks number of nodes
// - Accepts an optional iterable to initialize the list
class DoublyLinkedList {
    constructor(iterable = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        // Initialize from iterable (preserves order)
        for (const item of iterable) this.append(item);
    }

    // Append to tail — O(1)
    append(value) {
        const node = new DLLNode(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this; // allow chaining
    }


    // Prepend to head — O(1)
    prepend(value) {
        const node = new DLLNode(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // Insert at given index. If index is out of bounds, falls back
    insertAt(index, value) {

        // to prepend/append. Runs in O(min(index, n-index)) if you
        // optimize; here it traverses from head for simplicity.
        if (index <= 0) return this.prepend(value);
        if (index >= this.length) return this.append(value);

        let current = this.head;
        for (let i = 0; i < index; i++) current = current.next;

        const node = new DLLNode(value);
        node.prev = current.prev;
        node.next = current;
        current.prev.next = node;
        current.prev = node;
        this.length++;
        return this;
    }

    // Remove node at index and return its value. Performs bounds
    removeAt(index) {
        // checks and delegates to `shift`/`pop` for head/tail removals.
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let current = this.head;
        for (let i = 0; i < index; i++) current = current.next;

        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = current.prev = null; // detach
        this.length--;
        return current.value;
    }

    // Remove and return tail — O(1)
    pop() {
        if (!this.tail) return null;
        const removed = this.tail;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed.value;
    }


    // Remove and return head — O(1)
    shift() {
        if (!this.head) return null;
        const removed = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }
        this.length--;
        return removed.value;
    }


    // Find first node where predicate(value, index) === true
    find(predicate) {
        let curr = this.head;
        let idx = 0;
        while (curr) {
            if (predicate(curr.value, idx)) return curr;
            curr = curr.next;
            idx++;
        }
        return null;
    }


    // Convert list to array, head->tail
    toArray() {
        const out = [];
        let curr = this.head;
        while (curr) {
            out.push(curr.value);
            curr = curr.next;
        }
        return out;
    }


    // Convert list to array, tail->head
    toArrayReverse() {
        const out = [];
        let curr = this.tail;
        while (curr) {
            out.push(curr.value);
            curr = curr.prev;
        }
        return out;
    }

    clear() {
        this.head = this.tail = null;
        this.length = 0;
    }

    get size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    // small helper for debugging
    print() {
        console.log(this.toArray().join(' <-> '));
    }
}

// Example usage / demo
if (require && require.main === module) {
    const dll = new DoublyLinkedList([1, 2, 3]);
    console.log('Initial list:');
    dll.print();

    console.log('\nAppend 4 and 5:');
    dll.append(4).append(5);
    dll.print();

    console.log('\nPrepend 0:');
    dll.prepend(0);
    dll.print();

    console.log('\nInsert 99 at index 3:');
    dll.insertAt(3, 99);
    dll.print();

    console.log('\nRemove at index 2 (should remove 2):', dll.removeAt(2));
    dll.print();

    console.log('\nPop:', dll.pop());
    dll.print();

    console.log('\nShift:', dll.shift());
    dll.print();

    console.log('\nForward array:', dll.toArray());
    console.log('Reverse array:', dll.toArrayReverse());
    console.log('Size:', dll.size);
}

module.exports = { DoublyLinkedList, DLLNode };