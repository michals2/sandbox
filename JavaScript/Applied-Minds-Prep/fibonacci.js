function fibRecursion(n) {
  return n < 2 ? 1 : fibRecursion(n - 2) + fibRecursion(n - 1);
}

function memoize(func) {
  cache = {};
  return function(n) {
    // check if argument has been cached
    if (cache[n]) return cache[n];
    const output = func(n);
    cache[n] = output;
    return output;
  };
}

console.log(fibRecursion(9));
const memoizedFib = memoize(fibRecursion);
console.log(memoizedFib(9));

/*
0  1            1
1  1,1          1
2  1,1,2        2
3  1,1,2,3      3
4  1,1,2,3,5    5
5  1,1,2,3,5,8  8
*/
