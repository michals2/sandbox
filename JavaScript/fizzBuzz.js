function fizzBuzz(n) {
  output = [];
  for (let i = 1; i < n; i++) {
    switch (true) {
      case i % 15 === 0:
        output.push("fizzbuzz");
        break;
      case i % 3 === 0:
        output.push("fizz");
        break;
      case i % 5 === 0:
        output.push("buzz");
        break;
      default:
        output.push(i);
    }
  }
  return output;
}

console.log(fizzBuzz(9));
