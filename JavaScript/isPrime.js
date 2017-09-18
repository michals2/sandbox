// write a function that determines if a number is prime

function isPrime(num) {
  for (let i = Math.ceil(Math.sqrt(num)); i >= 2; i--) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(10));
