function tester() {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  console.log(3);
}

// tester();

console.log(1);
setTimeout(() => console.log(2), 11);
setTimeout(() => console.log(3), 10);
