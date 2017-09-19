function createMatrix(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(randInt());
    }
    arr.push(row);
  }
  return arr;
}

function randInt() {
  return Math.floor(11 * Math.random());
}

const mat1 = createMatrix(3);

function addMatrix(mat) {
  return mat.reduce((a1, row) => {
    return (
      a1 +
      row.reduce((a2, val) => {
        return a2 + val;
      }, 0)
    );
  }, 0);
}

function addArrRecursion(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].constructor === Array) sum += addArrRecursion(arr[i]);
    else sum += arr[i];
  }
  return sum;
}

const addArrRecursion2 = arr =>
  arr.reduce(
    (a, c) => (c.constructor === Array ? a + addArrRecursion2(c) : a + c),
    0
  );

console.log(addMatrix(mat1));
console.log(addArrRecursion(mat1));
console.log(addArrRecursion2(mat1));
