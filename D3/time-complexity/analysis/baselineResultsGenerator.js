const fs = require("fs");

results = {};
const memoize = func => {
  cache = {};
  return n => {
    if (cache[n]) return cache[n];
    cache[n] = func(n);
    return cache[n];
  };
};

const constant = n => 1;
const logN = n => Math.log(n);
const n = n => n;
const nLogN = n => n * Math.log(n);
const n2 = n => Math.pow(n, 2);
const twoN = n => Math.pow(2, n);
const factorial = n => (n <= 2 ? n : n * factorial(n - 1));
const factorialMem = memoize(factorial);

range = [1, 10];
function logResults(name, func, resultsObj) {
  const resultsArr = [];
  for (let i = range[0]; i < range[1]; i++) {
    resultsArr.push(func(i));
  }
  resultsObj[name] = resultsArr;
}

logResults("O(1)", constant, results);
logResults("O(log(n))", logN, results);
logResults("O(n)", n, results);
logResults("O(n*log(n))", nLogN, results);
logResults("O(n^2)", n2, results);
logResults("O(2^n)", twoN, results);
logResults("O(n!)", factorialMem, results);

json = JSON.stringify(results);
fs.writeFile("baseline-results.json", json, "utf8", err => {
  if (err) throw err;
  console.log("complete");
});

/*
  O(1)
  O(log(n))
  O(n)
  O(n*log(n))
  O(n^2)
  O(2^n)
  O(n!)
            |
            |
  Operations|
            |
            |___________________________
              Elements
*/
