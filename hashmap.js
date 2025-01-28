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

  set(key, value){
    let index = hash(key);
    this.bucket[index] = value;
  }
}
