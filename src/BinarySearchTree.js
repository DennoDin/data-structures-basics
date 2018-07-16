class BinarySearchTree {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }

  insert(value) {
    if (this.value < value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    } else if (this.value >= value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    }
    return this;
  }

  contains(value) {
    if (this.value === value) return true;
    if (this.right === null && this.left === null) return false;
    if (this.value < value) {
      return this.right.contains(value);
    }
    if (this.value >= value) {
      return this.left.contains(value);
    }
  }

  traverseDepthFirstInOrder(callback) {
    if (this.left) {
      this.left.traverseDepthFirstInOrder(callback);
    }
    callback(this);
    if (this.right) {
      this.right.traverseDepthFirstInOrder(callback);
    }
  }
}

module.exports = BinarySearchTree;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
