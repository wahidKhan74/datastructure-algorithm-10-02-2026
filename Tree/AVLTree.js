// AVL Tree : An implementation of an AVL Tree, a self-balancing binary search tree.
// where the height of the two child subtrees of any node differs by at most one.
// This implementation includes methods for adding nodes, removing nodes, finding nodes, and traversing the tree.

class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Get height of node
    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    // Get balance factor
    getBalance(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right rotate
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        return x;
    }

    // Left rotate
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        return y;
    }

    // Insert value
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (!node) return new AVLNode(value);
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            return node; // Duplicate values not allowed
        }
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        const balance = this.getBalance(node);
        // Left Left
        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }
        // Right Right
        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }
        // Left Right
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        // Right Left
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
        return node;
    }

    // Find minimum value node
    minValueNode(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }

    // Delete value
    delete(value) {
        this.root = this._delete(this.root, value);
    }

    _delete(node, value) {
        if (!node) return node;
        if (value < node.value) {
            node.left = this._delete(node.left, value);
        } else if (value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            if (!node.left || !node.right) {
                node = node.left ? node.left : node.right;
            } else {
                const temp = this.minValueNode(node.right);
                node.value = temp.value;
                node.right = this._delete(node.right, temp.value);
            }
        }
        if (!node) return node;
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        const balance = this.getBalance(node);
        // Left Left
        if (balance > 1 && this.getBalance(node.left) >= 0) {
            return this.rightRotate(node);
        }
        // Left Right
        if (balance > 1 && this.getBalance(node.left) < 0) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        // Right Right
        if (balance < -1 && this.getBalance(node.right) <= 0) {
            return this.leftRotate(node);
        }
        // Right Left
        if (balance < -1 && this.getBalance(node.right) > 0) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
        return node;
    }

    // Find value
    find(value) {
        return this._find(this.root, value);
    }

    _find(node, value) {
        if (!node) return null;
        if (value < node.value) return this._find(node.left, value);
        if (value > node.value) return this._find(node.right, value);
        return node;
    }

    // In-order traversal
    inOrderTraversal(callback) {
        this._inOrder(this.root, callback);
    }

    _inOrder(node, callback) {
        if (node) {
            this._inOrder(node.left, callback);
            callback(node.value);
            this._inOrder(node.right, callback);
        }
    }

    // Pre-order traversal
    preOrderTraversal(callback) {
        this._preOrder(this.root, callback);
    }

    _preOrder(node, callback) {
        if (node) {
            callback(node.value);
            this._preOrder(node.left, callback);
            this._preOrder(node.right, callback);
        }
    }

    // Post-order traversal
    postOrderTraversal(callback) {
        this._postOrder(this.root, callback);
    }

    _postOrder(node, callback) {
        if (node) {
            this._postOrder(node.left, callback);
            this._postOrder(node.right, callback);
            callback(node.value);
        }
    }
}

// Example usage:
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.delete(20);
avl.inOrderTraversal(console.log);