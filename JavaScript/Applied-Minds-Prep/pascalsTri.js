const util = require("util");

function pascals(n, prev = []) {
  if (!prev.length) return [[1], pascals(n - 1, [1])];
  const curr = [1];
  for (let i = 0; i < prev.length - 1; i++) {
    curr.push(prev[i] + prev[i + 1]);
  }
  curr.push(1);
  if (n > 1) return [curr, pascals(n - 1, curr)];
  else return curr;
}

const pasc5 = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

console.log(util.inspect(pascals(5), false, null));
