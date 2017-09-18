// ex:
const sentences1 = [
  "how it was done",
  "are you how",
  "it goes to",
  "goes done are it"
];
const queries1 = ["done it", "it"];
const expectedOutput1 = [[0, 3], [0, 2, 3]];

const sentences2 = ["it will go away", "go do art", "what to will east"];
const queries2 = ["it will", "go east will", "will"];
const expectedOutput2 = [[0], [-1], [0, 2]];

function checkStrings(sentences, queries) {
  return queries.map(q => {
    const indices = sentences.reduce((a, c, i) => {
      if (q.split(" ").every(str => c.includes(str))) a.push(i);
      return a;
    }, []);
    if (!indices.length) indices.push(-1);
    return indices;
  });
}

console.log(checkStrings(sentences1, queries1));
console.log(checkStrings(sentences2, queries2));
console.log(checkStrings(sentences2, []));
