/**
 * Write an algorithm to randomize the order of elements in an array
 * (iteratively, then recursively, then in O(n) time).  
 */

function randomN(upper) {
  return Math.floor(Math.random() * (upper + 1));
}

function randomizeIteratively(arr) {
  const input = [...arr];
  const output = [];
  while (input.length) {
    output.push(input.splice(randomN(input.length - 1), 1)[0]);
  }
  return output;
}

function randomizeRecursively(arr) {
  // base case
  if (arr.length === 1) return arr;

  const input = [...arr];
  const index = randomN(arr.length - 1);
  const value = input.splice(index, 1);
  return value.concat(randomizeRecursively(input));
}

const arr1 = [1, 2, 3, 4];
// console.log(randomN(4));

const t1a = performance.now();
console.log(randomizeIteratively(arr1));
const t1b = performance.now();

const t2a = performance.now();
console.log(randomizeRecursively(arr1));
const t2b = performance.now();

console.log("Time 1 --> ", t1b - t1a);
console.log("Time 2 --> ", t2b - t2a);
