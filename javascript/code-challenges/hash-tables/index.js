'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(1024);
  }

  hash(key) {
    let chars = key.split('');
    let charsSum = chars.reduce((sum, chars) => {
      return sum + chars.charCodeAt(0);
    }, 0);
    let hash = charsSum * 599;
    return hash % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let data = { [key]: value };
    this.buckets[index] = data;
  }

  get(key) {
    let index = this.hash(key);
    if (this.buckets[index]) {
      return this.buckets[index][key];
    }
  }

  has(key) {
    let index = this.hash(key);
    return this.buckets[index] ? true : false;
  }

  keys() {
    let result = this.buckets.reduce((keyArray, bucket) => {
      if (bucket) {
        return [...keyArray, ...Object.keys(bucket)];
      }
    }, []);
    return result;
  }
}

module.exports = HashTable;
