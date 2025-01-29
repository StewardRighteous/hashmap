import HashMap from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.length());

test.set('moon', 'silver');
test.set('night', 'black');
test.set("grass","green")


console.log(test.length());
console.log(test.capacity);

console.log(test.get('lion'));
console.log(test.has('kite'));
console.log(test.remove('kite'));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

console.log(test.clear());


