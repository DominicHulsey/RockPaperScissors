
let computerOptions = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors'
}

let playerScore = 0;
let computerScore = 0;

function ComputerChoice() {
  let output = Math.floor(Math.random() * 3) + 1;
  return output;
}

function replay() {
  document.getElementById('alert').innerHTML = '';
  document.getElementById('player').innerHTML = `<u>Player Score:</u> <br> ${playerScore}`;
  document.getElementById('computer').innerHTML = `<u>Computer Score:</u> <br> ${computerScore}`;
}


function PlayerChoice(choice) {
  let computerAnswer = computerOptions[ComputerChoice()];
  if (computerAnswer == choice) {
    let alertBox = `<div class="col-12" id="result"><div class='alert alert-info'>
    <h1>Tie!</h1><br><button class="btn btn-primary" onclick="replay()">Play Again!</button>
</div>`
    document.getElementById('alert').innerHTML = alertBox;
  }
  else if (computerAnswer == 'Rock' && choice == 'Paper') {
    let alertBox = `<div class="col-12" id="result"><div class='alert alert-success'>
    <h1>You Win! </h1><p>the computer chose ${computerAnswer} smh...</p><br> <button class="btn btn-primary" onclick="replay()">Play Again!</button>
</div >`
    document.getElementById('alert').innerHTML = alertBox;
    return playerScore++;
  } else if (computerAnswer == 'Paper' && choice == 'Scissors') {
    let alertBox = `<div class="col-12" id="result"><div class='alert alert-success'>
    <h1>You Win! </h1><p>the computer chose ${computerAnswer} smh...</p><br> <button class="btn btn-primary" onclick="replay()">Play Again!</button>
</div >`
    document.getElementById('alert').innerHTML = alertBox;
    return playerScore++;
  } else if (computerAnswer == 'Scissors' && choice == 'Rock') {
    let alertBox = `<div class="col-12" id="result"><div class='alert alert-success'>
    <h1>You Win! </h1><p>the computer chose ${computerAnswer} smh...</p><br> <button class="btn btn-primary" onclick="replay()">Play Again!</button>
</div >`
    document.getElementById('alert').innerHTML = alertBox;
    return playerScore++;
  }
  else {
    let alertBox = `<div class="col-12" id="result"><div class='alert alert-danger'>
    <h1>You lose!</h1> <p>Sorry, the computer chose ${computerAnswer}...</p><br> <button class="btn btn-primary" onclick="replay()">Play Again!</button>
</div>`
    document.getElementById('alert').innerHTML = alertBox;
    computerScore++
  }

}






