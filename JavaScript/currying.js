/*
https://www.youtube.com/watch?v=iZLP4qOwY8I
*/

// uncurried function
const dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breaths ${element}!`;
console.log(dragon("fluffykins", "tiny", "lightning"));

// curried function
const dragon2 = name => size => element =>
  `${name} is a ${size} dragon that breaths ${element}!`;

console.log(dragon2("fluffykins")("tiny")("lightning"));

const x = 7 + 6;
