const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
    return this;
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    this.storage.set(index, value);
  }

  retrieve(key) {
    const index = simpleHash(key, this.limit);
    return this.storage.get(index);
  }

  remove(key) {
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
