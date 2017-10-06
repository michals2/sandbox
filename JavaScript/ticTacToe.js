/*

  Question: Write function that takes two paramters,
  board and player, and returns true if player has
  won game on that board 

*/

const board1 = [[null, null, null], [null, null, null], [null, null, null]];
const board2 = [["X", "X", "X"], [null, null, null], [null, null, null]];

const winningCombos = [
  // [row, col]

  // rows
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [2, 2]],
  [[2, 0], [2, 1], [2, 2]],
  // columns
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  // diagonals
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
];

function checkWinner(board, player) {
  return winningCombos.some(combo =>
    combo.every(position => board[position[0]][position[1]] === player)
  );
}

console.log(checkWinner(board1, "X")); // false;
console.log(checkWinner(board2, "X")); // true;
