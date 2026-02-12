// Tree : A tree data structure implementation in JavaScript
// This implementation includes methods for adding nodes, removing nodes, finding nodes, and traversing the tree.
// Binary search trees : A tree where each node has at most 2 children

class TreeNode {
   
    constructor(value) {
        this.value = value;
        this.children  =[];
    }

    // Adding child node
    addChild(childNode) {
        if(childNode instanceof TreeNode) {
            this.children.push(childNode);
        } else {
            throw new Error("Child must be instance of TreeNode");
        }
    }

    // Remove child node
    removeChild(childNode) {
        const index = this.children.indexOf(childNode);
        if(index > 1) {
            this.children.splice(index, 1);
        } else {
            throw new Error("Child node not found");
        }
    }

    // find node
    findChild(value) {
        for(let child of this.children) {
            if(child.value === value) {
                return child;
            }
        }
        return null;
    }

    traverse(callback){
        callback(this);
        for(let child of this.children){
            child.traverse(callback);
        }
    }

    toString() {
         return `TreeNode(value: ${this.value}, children: [${this.children.map(child => child.value).join(', ')}])`;
    }
}

class Tree {

    constructor(rootValue) {
        this.root = new TreeNode(rootValue);
    }

    // add node
    addNode(parentValue, childValue) {
        const parentNode = this.findNode(this.root, parentValue);
        if(parentNode){
            parentNode.addChild(new TreeNode(childValue));
        } else {
            throw new Error('Parent noode not found');
        }
    }

    findNode(node, value) {
        if(node.value === value) {
            return node;
        }
        for(let child of node.children) {
            const foundNode = this.findNode(child, value);
            if(foundNode){
                return foundNode;
            }
        }
        return null;
    }

    traverse(callback){
        this.root.traverse(callback);
    }

    toString() {
        return this.root.toString();
    }
}

// const family = new Tree("Root");

// // add children to root
// family.addNode("Root", "Child-01");
// family.addNode("Root", "Child-02");

// // add childrens to first child node
// family.addNode("Child-01", "Child-01-01");
// family.addNode("Child-01", "Child-01-02");

// // add childrens to second child node
// family.addNode("Child-02", "Child-02-01");
// family.addNode("Child-02", "Child-02-02");

const family = new Tree("Henry");

family.addNode("Henry", "Marry");
family.addNode("Henry", "Elizabeth");

family.addNode("Marry", "Philip");
family.addNode("Marry", "Catherine");

family.addNode("Elizabeth", "James");
family.addNode("Elizabeth", "Anne");

family.traverse(node=>{
    console.log(`Visiting node : ${node.value}`);
    console.log(node.toString());
})