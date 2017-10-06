var a = 1,
  b = 2,
  c;

(function() {
  const a = 200;
  b = 400;
  let d = 10;
  var c = 5;
})();

console.log(a); // 1
console.log(b); // 400
console.log(c); // undefined
console.log(d); // d is not defined
