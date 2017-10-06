const options = ["R", "P", "S"];

function rps(turns, prev = "") {
  // base case
  if (turns === 0) return console.log(prev);

  options.forEach(option => {
    rps(turns - 1, prev + option);
  });
}

rps(2);

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
