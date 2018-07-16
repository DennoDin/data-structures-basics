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

  remove(value) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        this.children.splice(i, 1);
      }
      if (this.children[i]) {
        this.children[i].remove(value);
      }
    }
    return value;
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

// let index = this.children.indexOf(value);
// if (index > -1) {
//   this.children.splice(index, 1);
// } else if (this.children.length > 0) {
//   this.children.forEach((kid) => {
//     kid.remove(value);
//   });
// }
// return value;
