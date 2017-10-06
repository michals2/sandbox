const missing4 = [5, 3, 1, 2];

function findMissingNum(arr) {
  let expected = 0;
  for (let i = 1; i <= missing4.length + 1; i++) {
    expected += i;
  }
  const actual = arr.reduce((a, c) => a + c, 0);
  return expected - actual;
}
function findMissingNum2(arr) {
  const n = arr.length + 1;
  let expected = n * (n + 1) / 2;
  const actual = arr.reduce((a, c) => a + c, 0);
  return expected - actual;
}

console.log(findMissingNum2(missing4));
