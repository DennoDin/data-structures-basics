const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
    return this;
  }

  insert(key, value) {
    // O(n)
    const index = simpleHash(key, this.limit); // O(n)
    this.storage.set(index, value); // O(1)
  }

  retrieve(key) {
    // O(n)
    const index = simpleHash(key, this.limit);
    return this.storage.get(index);
  }

  remove(key) {
    // O(n)
    const index = simpleHash(key, this.limit);
    this.storage.set(index, null);
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
