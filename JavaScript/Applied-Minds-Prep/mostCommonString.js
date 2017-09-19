const arr1 = ["abc", "xyz", "abc", "lgm", "xyz", "xyz"];

function mostCommonString(arr) {
  const occurences = arr.reduce((a, c) => {
    if (!a[c]) a[c] = 1;
    else a[c] = a[c] + 1;
    return a;
  }, {});
  console.log(occurences);
  let maxOccurences = -Infinity;
  let maxString;
  for (string in occurences) {
    if (occurences[string] > maxOccurences) {
      maxOccurences = occurences[string];
      maxString = string;
    }
  }
  return maxString;
}

console.log(mostCommonString(arr1));
