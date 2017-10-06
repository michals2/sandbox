const set1 = new Set();

set1.add(1);
set1.add(3);
set1.add(5);
set1.add(6);
set1.delete(6);

console.log(set1);
console.log(set1.size);
// console.log(set1.clear());
console.log(set1);
// console.log(set1.entries());
// console.log(set1.values());
console.log([...set1]);

const arr2 = [1, 2, 3, 2];
const set2 = new Set(arr2);
console.log(set2);

const set3 = new Set();

