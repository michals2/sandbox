const fs = require("fs");
const d3 = require("d3");
console.log(d3)


function arrSum(arr) {
  return arr.reduce((a, c) => a + c, 0);
}

function createArr(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.ceil(Math.random() * 10));
  }
  return arr;
}

results = [];

function analyzePerformance(testFunc, argGenerator, limits) {
  for (let i = limits[0]; i < limits[1]; i++) {
    const t0 = process.hrtime();
    arrSum(createArr(i));
    results.push(process.hrtime(t0)[1]);
  }
}

analyzePerformance(arrSum, createArr, [0, 1000]);

json = JSON.stringify(results);
fs.writeFile("results.json", json, "utf8", err => {
  if (err) throw err;
  console.log("complete");
});
