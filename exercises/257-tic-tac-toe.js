// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null

function ticTacToe(arr) {
  var winner = null;

  // first check for winner in each row
  arr.forEach(row => {
    return row.filter((item, i, arr) => {
      if (arr[0] === arr[1] && arr[0] === arr[2]) {
        winner = arr[0];
      }
    });
  });

  //check for diagonal & and column
  var firstRow = arr[0];
  var secondRow = arr[1];
  var thirdRow = arr[2];

  if (firstRow[0] === secondRow[0] && firstRow[0] === thirdRow[0]) {
    winner = firstRow[0];
  } else if (firstRow[1] === secondRow[1] && firstRow[1] === thirdRow[1]) {
    winner = firstRow[1];
  } else if (firstRow[2] === secondRow[2] && firstRow[2] === thirdRow[2]) {
    winner = firstRow[2];
  }

  if (firstRow[0] === secondRow[1] && firstRow[0] === thirdRow[2]) {
    winner = firstRow[0];
  } else if (firstRow[2] === secondRow[1] && firstRow[2] === thirdRow[0]) {
    winner = firstRow[2];
  }

  return winner;
}
