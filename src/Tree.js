class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    // O(1)
    const newChild = new Tree(value);
    this.children.push(newChild);
  }

  contains(value) {
    // O(n)
    let contains = false;
    const recursion = (node) => {
      if (node.value === value) contains = true;
      for (let child of node.children) {
        recursion(child);
      }
    };
    recursion(this);
    return contains;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

module.exports = Tree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
