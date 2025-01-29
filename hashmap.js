export default class HashMap {
  loadFactor = 0.75;
  capacity;
  bucket = [];

  constructor(capacity = 16) {
    this.capacity = capacity;
  }

  hash(key) {
    let hashCode = key.charCodeAt(0);
    let tableSize = this.capacity;
    hashCode = hashCode % tableSize;
    return hashCode;
  }

  growBucket() {
    let entries = this.entries();
    this.clear();
    this.capacity = this.capacity * 2 - 1;
    for (let entry of entries) {
      this.set(entry.key, entry.value);
    }
  }

  set(key, value) {
    let load = this.capacity * this.loadFactor;
    if (this.length() +1 > load) {
      this.growBucket();
    }
    let index = this.hash(key);
    this.bucket[index] = { key: key, value: value };
  }

  get(key) {
    let index = this.hash(key);
    if (!this.bucket[index]) {
      return null;
    }
    return this.bucket[index];
  }

  has(key) {
    let value = this.get(key);
    if (!value) {
      return false;
    }
    return true;
  }

  remove(key) {
    if (!this.has(key)) {
      return false;
    } else {
      let index = this.hash(key);
      this.bucket[index] = null;
      return true;
    }
  }

  length() {
    let length = 0;
    for (let i = 0; i < this.capacity; i++) {
      if (!this.bucket[i]) {
        continue;
      }
      length++;
    }
    return length;
  }

  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.bucket[i] = null;
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.capacity; i++) {
      if (!this.bucket[i]) {
        continue;
      }
      keys.push(this.bucket[i].key);
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.capacity; i++) {
      if (!this.bucket[i]) {
        continue;
      }
      values.push(this.bucket[i].value);
    }
    return values;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.capacity; i++) {
      if (!this.bucket[i]) {
        continue;
      }
      entries.push(this.bucket[i]);
    }
    return entries;
  }
}
