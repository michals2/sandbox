// const missing4 = [3, 3, 1, 2];

function findRepeatedNum(arr) {
  const n = arr.length - 1;
  let expected = n * (n + 1) / 2;
  const actual = arr.reduce((a, c) => a + c, 0);
  return actual - expected;
}
function findRepeatedNum2(arr) {
  const n = arr.length - 1;
  const cache = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(cache[arr[i]]);
    if (!cache[arr[i]]) cache[arr[i]] = 1;
    else return arr[i];
  }
}

console.log(findRepeatedNum2(missing4));
