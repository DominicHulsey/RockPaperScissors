
let computerOptions = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors'
}

function ComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

var computerAnswer = computerOptions[ComputerChoice()];
console.log(computerAnswer);
var playerScore = 0;
var computerScore = 0;
function winner() {
  let alertBox = `<div class="col-12" id="result"><div class='alert alert-success'>
    <h1>You Win! </h1><p>the computer chose ${computerAnswer} smh...</p><br> <button class="btn btn-primary" onclick="replay()">Play Again!</button>
</div >`
  document.getElementById('alert').innerHTML = alertBox;
  return playerScore++;
}
function loser() {
  let alertBox = `<div class="col-12" id="result"><div class='alert alert-danger'>
    <h1>You lose!</h1> <p>Sorry, the computer chose ${computerAnswer}...</p><br> <button class="btn btn-primary" onclick="replay()">Play Again!</button>
</div>`
  document.getElementById('alert').innerHTML = alertBox;
  computerScore++
}
function tie() {
  let alertBox = `<div class="col-12" id="result"><div class='alert alert-info'>
    <h1>Tie!</h1><br><button class="btn btn-primary" onclick="replay()">Play Again!</button>
</div>`
  document.getElementById('alert').innerHTML = alertBox;
}

function PlayerChoice(choice) {
  if (computerAnswer == choice) {
    tie();
  }
  else if (computerAnswer == 'Rock' && choice == 'Paper') {
    winner();
  } else if (computerAnswer == 'Paper' && choice == 'Scissors') {
    winner();
  } else if (computerAnswer == 'Scissors' && choice == 'Rock') {
    winner();
  }
  else { loser(); }
}

function replay() {
  document.getElementById('alert').innerHTML = '';
  ComputerChoice();
  document.getElementById('player').innerHTML = `<u>Player Score:</u> <br> ${playerScore}`;
  document.getElementById('computer').innerHTML = `<u>Computer Score:</u> <br> ${computerScore}`;
}



