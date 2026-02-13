// Graph : A graph data structure implementation in JavaScript
// This implementation includes methods for adding vertices, adding edges, removing vertices, removing edges, and

class Grpah{

    // constrcutor to initialize an empty adjancy list
    constructor() {
        this.adjacencyList = {}; // This stores vertices , and thier neighbors
    }

    // Add a vertex or node in the graph
    addVertex(vertex) {
        // check if the vertex already exists
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge (unidirected by default)
    addEdge(v1, v2) {
         if(!this.adjacencyList[v1]) this.addVertex(v1);
         if(!this.adjacencyList[v2]) this.addVertex(v2);
         this.adjacencyList[v1].push(v2);
         this.adjacencyList[v2].push(v1);
    }

    // remove an edge
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1]?.filter(v => v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2]?.filter(v => v!==v1);
    }

    // remove a vertex
    removeVertex(vertex){
        // if vertex doesnt exist
        if(!this.adjacencyList[vertex]) return;

        // remove all edges connected to this vertex
        while(this.adjacencyList[vertex].length >0 ) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);  // remove edge before the vertex
        }
        // finally delete vertex
        delete this.adjacencyList[vertex];
    }

    // Breadth-First Search (BFS)
    // Starts from a given vertex and explores all its neighbors before moving to the next level
    // Uses a queue to keep track of vertices to visit

    bfs(start){
        const queue = [start];
        const visted = new Set();
        visted.add(start);

        while(queue.length) {
            const vertex = queue.shift();
            console.log(vertex, "=>");
            // traverse in neighbr
            for(let neighbor of this.adjacencyList[vertex]) {
                if(!visted.has(neighbor)) {
                    visted.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }


    // Depth-First Search (DFS) - Iterative
    dfs(start) {
        const stack = [start];
        const visited = new Set();
        visited.add(start);

        while (stack.length) {
            const vertex = stack.pop();
            console.log(vertex, "=>");
            // traverse in neighbr
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
    }
}

const grap = new Grpah();
grap.addEdge("A", "B");
grap.addEdge("A", "C");
grap.addEdge("B", "D");
grap.addEdge("C", "E");
grap.addEdge("D", "E");
grap.addEdge("D", "F");
grap.addEdge("E", "F");

console.log(grap);

console.log("-----------");
console.log(grap.adjacencyList);
console.log("-----------");


grap.bfs("A");
console.log("-----------");
grap.dfs("A");
// grap.removeVertex("D");
// console.log(grap.adjacencyList);
// console.log("-----------");

