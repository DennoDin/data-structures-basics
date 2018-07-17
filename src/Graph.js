class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(key) {
    // O(1)
    this.nodes[key] = [];
  }

  addEdge(node1, node2) {
    // O(1)
    if (!this.nodes[node1] || !this.nodes[node2]) {
      return "Invalid node value";
    }
    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
  }

  removeNode(node) {
    // O(n^2)
    for (let key in this.nodes) {
      // O(n)
      let index = this.nodes[key].indexOf(node); // O(n)
      if (index !== -1) {
        this.nodes[key].splice(index, 1); // O(1)
      }
    }
    delete this.nodes[node];
  }

  contains(node) {
    // O(1)
    return Boolean(this.nodes[node]);
  }

  removeEdge(node1, node2) {
    // O(n)
    const index1 = this.nodes[node1].indexOf(node2);
    const index2 = this.nodes[node2].indexOf(node1);
    this.nodes[node1].splice(index1, 1);
    this.nodes[node2].splice(index2, 1);
  }

  hasEdge(node1, node2) {
    // O(n)
    return Boolean(this.nodes[node1].indexOf(node2) >= 0);
  }

  forEach(callback) {
    // O(n)
    const nodeList = Object.keys(this.nodes); // O(n)
    for (let key in this.nodes) {
      callback(key, this.nodes[key], nodeList); // O(n)
    }
  }

  traverseDepthFirst(startNode, callback) {
    let memo = {};
    const recursion = (currentNode) => {
      callback(currentNode);
      memo[currentNode] = 1;
      let edges = this.nodes[currentNode];
      for (let i = 0; i < edges.length; i++) {
        if (!memo[edges[i]]) {
          recursion(edges[i]);
        }
      }
    };
    recursion(startNode);
  }

  traverseBreadthFirst(startNode, callback) {
    let memo = {};
    callback(startNode);
    memo[startNode] = 1;
    const recursion = (currentNode) => {
      let edges = this.nodes[currentNode];
      for (let i = 0; i < edges.length; i++) {
        if (!memo[edges[i]]) {
          callback(edges[i]);
        }
      }
      for (let i = 0; i < edges.length; i++) {
        if (!memo[edges[i]]) {
          memo[edges[i]] = 1;
          recursion(edges[i]);
        }
      }
    };
    recursion(startNode);
  }
}

module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
