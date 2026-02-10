// Circular doubly-linked list implementation.
// Characteristics:
// - Each node has a `value`, a `next` pointer and a `prev` pointer.
// - The list is circular: `tail.next === head` and `head.prev === tail`.
// - `head` and `tail` are tracked to allow O(1) insertions/removals at both ends.
class CLLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // previous pointer for doubly linked behaviour
    }
}

// Circular Doubly-Linked List
// - Each node links to both `next` and `prev`.
// - `tail.next === head` and `head.prev === tail` when non-empty.
// - Many operations can be O(1) because we have both directions.
class CircularDoublyLinkedList {
    constructor(iterable = []) {
        this.head = null; // first node
        this.tail = null; // last node
        this.length = 0;

        for (const item of iterable) this.append(item);
    }

    // Append to tail — O(1)
    append(value) {
        const node = new CLLNode(value);
        if (!this.head) {
            this.head = this.tail = node;
            node.next = node.prev = node;
        } else {
            node.prev = this.tail;
            node.next = this.head;
            this.tail.next = node;
            this.head.prev = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    // Prepend to head — O(1)
    prepend(value) {
        const node = new CLLNode(value);
        if (!this.head) {
            this.head = this.tail = node;
            node.next = node.prev = node;
        } else {
            node.next = this.head;
            node.prev = this.tail;
            this.head.prev = node;
            this.tail.next = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // Insert at index (0-based). If index <= 0 -> prepend, if >= length -> append.
    insertAt(index, value) {
        if (index <= 0) return this.prepend(value);
        if (index >= this.length) return this.append(value);

        let prev = this.head;
        for (let i = 1; i < index; i++) prev = prev.next;
        const node = new CLLNode(value);
        node.next = prev.next;
        node.prev = prev;
        prev.next.prev = node;
        prev.next = node;
        this.length++;
        return this;
    }

    // Remove node at index and return its value. Returns null if out of bounds.
    removeAt(index) {
        if (this.length === 0) return null;
        if (index < 0 || index >= this.length) return null;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let curr = this.head;
        for (let i = 0; i < index; i++) curr = curr.next;
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        curr.next = curr.prev = null;
        this.length--;
        return curr.value;
    }

    // Remove and return tail — O(1)
    pop() {
        if (!this.tail) return null;
        const removed = this.tail;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
            removed.prev = removed.next = null;
        }
        this.length--;
        if (this.length === 0) this.head = this.tail = null;
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
            this.head.prev = this.tail;
            this.tail.next = this.head;
            removed.next = removed.prev = null;
        }
        this.length--;
        if (this.length === 0) this.head = this.tail = null;
        return removed.value;
    }

    // Find first node where predicate(value, index) === true. Returns node or null.
    find(predicate) {
        if (!this.head) return null;
        let curr = this.head;
        let idx = 0;
        do {
            if (predicate(curr.value, idx)) return curr;
            curr = curr.next;
            idx++;
        } while (curr !== this.head);
        return null;
    }

    // Convert to array (head -> tail). If empty returns []
    toArray() {
        const out = [];
        if (!this.head) return out;
        let curr = this.head;
        do {
            out.push(curr.value);
            curr = curr.next;
        } while (curr !== this.head);
        return out;
    }

    // Convert to array in reverse (tail -> head)
    toArrayReverse() {
        const out = [];
        if (!this.tail) return out;
        let curr = this.tail;
        do {
            out.push(curr.value);
            curr = curr.prev;
        } while (curr !== this.tail);
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

    // Debug helper — prints values in order head->tail
    print() {
        console.log(this.toArray().join(' <-> ') + (this.length ? ' <-> (back to head)' : ''));
    }
}

// Demo when run directly with Node: shows usage and expected behaviour.
if (require && require.main === module) {
    const cll = new CircularDoublyLinkedList([10, 20, 30]);
    console.log('Initial circular doubly-linked list:');
    cll.print();

    console.log('\nAppend 40 and 50:');
    cll.append(40).append(50);
    cll.print();

    console.log('\nPrepend 5:');
    cll.prepend(5);
    cll.print();

    console.log('\nInsert 25 at index 3:');
    cll.insertAt(3, 25);
    cll.print();

    console.log('\nRemove at index 2 (should remove original 20):', cll.removeAt(2));
    cll.print();

    console.log('\nPop (remove tail):', cll.pop());
    cll.print();

    console.log('\nShift (remove head):', cll.shift());
    cll.print();

    console.log('\nFind value 30:', cll.find((v) => v === 30)?.value || null);
    console.log('Array view:', cll.toArray());
    console.log('Reverse array:', cll.toArrayReverse());
    console.log('Size:', cll.size);
}

module.exports = { CircularDoublyLinkedList, CLLNode };