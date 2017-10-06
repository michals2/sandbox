const options = ["R", "P", "S"];

function rps(turns, prev = "") {
  // base case
  if (!turns) return console.log(prev);

  options.forEach(option => {
    rps(turns - 1, prev + option);
  });
}
// rps(2);

rps(2);

/**********************************************/

const options = ["R", "P", "S"];

function RPSRecur(depth, output, prev = []) {
  //base case
  if (depth === 0) return output.push(prev);
  options.forEach(o => {
    RPSRecur(depth - 1, output, [...prev, o]);
  });
}

function RPS(depth) {
  const output = [];
  RPSRecur(depth, output);
  return output;
}

console.log(RPS(2));

/*

   R     P     S
  /|\   /|\   /|\
  RPS   RPS   RPS

*/

/*
  RR
  RP
  RS

  PR
  PP
  PS

  SR
  SP
  SS
*/
