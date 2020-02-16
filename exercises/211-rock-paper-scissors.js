// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//NOTES
// rock > scissors
// scissors > paper
// paper > rock

function rockPaperScissors(throw1, throw2) {
  let rock = "rock";
  let scissors = "scissors";
  let paper = "paper";

  if (throw1 === throw2) {
    return "draw";
  }

  if (
    (throw1 === rock && throw2 === scissors) ||
    (throw1 === scissors && throw2 === paper) ||
    (throw1 === paper && throw2 === rock)
  ) {
    return "player 1";
  }
  if (
    (throw2 === rock && throw1 === scissors) ||
    (throw2 === scissors && throw1 === paper) ||
    (throw2 === paper && throw1 === rock)
  ) {
    return "player 2";
  }
}
