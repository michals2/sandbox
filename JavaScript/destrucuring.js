// array destructuring
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y, z);

// assignment separate from definition
let x1, y1;
[x1, y1] = [1, 2];
console.log(x1, y1);

// object destructuring
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p);
console.log(q);
