class HashMap {
  loadFactor = 0.75;
  capacity = 16;
  bucket = [];

  constructor(capacity) {
    this.capacity = capacity;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % this.capacity;
  }

  set(key, value) {
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
      keys.push(this.bucket[i].value);
    }
    return values;
  }
}
