import HashSet from "./hashset.js";

const test = new HashSet();

test.set('apple')
test.set('banana')
test.set('carrot')
test.set('dog')
test.set('elephant')
test.set('frog')
test.set('grape')
test.set('hat')
test.set('ice cream')
test.set('jacket')
test.set('kite')
test.set('lion')

console.log(test.length());

test.set('moon');
test.set('night');
test.set('grass');


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


