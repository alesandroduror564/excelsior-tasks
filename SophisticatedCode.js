/* 
Filename: SophisticatedCode.js
Description: This code demonstrates a complex and sophisticated algorithm for finding the shortest path in a graph using Dijkstra's algorithm.
*/

class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = new Map();
  }

  addNode(node) {
    this.nodes.add(node);
    this.edges.set(node, new Map());
  }

  addEdge(fromNode, toNode, weight) {
    if (!this.nodes.has(fromNode) || !this.nodes.has(toNode)) {
      throw new Error('Invalid Node');
    }
    this.edges.get(fromNode).set(toNode, weight);
    this.edges.get(toNode).set(fromNode, weight);
  }

  dijkstra(startNode) {
    const distances = new Map();
    const previousNodes = new Map();
    const queue = new PriorityQueue();

    for (const node of this.nodes) {
      distances.set(node, Infinity);
      previousNodes.set(node, null);
    }

    distances.set(startNode, 0);
    queue.enqueue(startNode, 0);

    while (!queue.isEmpty()) {
      const { element: currentNode, priority: currentDistance } = queue.dequeue();

      for (const [nextNode, edgeWeight] of this.edges.get(currentNode)) {
        const distance = currentDistance + edgeWeight;

        if (distance < distances.get(nextNode)) {
          distances.set(nextNode, distance);
          previousNodes.set(nextNode, currentNode);
          queue.enqueue(nextNode, distance);
        }
      }
    }

    return { distances, previousNodes };
  }
}

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    const item = { element, priority };
    let added = false;

    for (let i = 0; i < this.elements.length; i++) {
      if (item.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.elements.push(item);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Priority Queue is empty');
    }
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

// Usage example
const graph = new Graph();

// Add nodes
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

// Add edges
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'F', 3);
graph.addEdge('E', 'F', 4);

// Compute shortest path
const { distances, previousNodes } = graph.dijkstra('A');

console.log('Shortest distances:', distances);
console.log('Previous nodes:', previousNodes);