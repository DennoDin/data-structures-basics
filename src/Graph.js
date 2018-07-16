class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(value) {
    this.nodes[value] = [];
  }

  addEdge(node1, node2) {
    if (!this.nodes[node1] || !this.nodes[node2]) {
      return "Invalid node value";
    }
    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
  }

  removeNode(node) {
    for (let key in this.nodes) {
      let index = this.nodes[key].indexOf(node);
      if (index !== -1) {
        this.nodes[key].splice(index, 1);
      }
    }
    delete this.nodes[node];
  }

  contains(node) {
    return Boolean(this.nodes[node]);
  }

  removeEdge(node1, node2) {
    const index1 = this.nodes[node1].indexOf(node2);
    const index2 = this.nodes[node2].indexOf(node1);
    this.nodes[node1].splice(index1, 1);
    this.nodes[node2].splice(index2, 1);
  }

  hasEdge(node1, node2) {
    return Boolean(this.nodes[node1].indexOf(node2) >= 0);
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
