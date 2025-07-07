let wins = 0;
let losses = 0;
let ties = 0;

function getComputerMove() {
  const rN = Math.random();

  if (rN < 1 / 3) return 'rock';
  else if (rN < 2 / 3) return 'paper';
  else return 'scissors';
}

function playGame(playerMove) {
  const computerMove = getComputerMove();
  let result = '';

  if (playerMove === computerMove) {
    result = `It's a tie!`;
    ties++;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = `You win! 🎉`;
    wins++;
  } else {
    result = `You lose! 😢`;
    losses++;
  }

  document.getElementById('result').textContent =
    `You picked ${playerMove}, Computer picked ${computerMove}. ${result}`;

  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('ties').textContent = ties;
}

window.onload = function () {
  document.getElementById('rock').onclick = function () {
    playGame('rock');
  };
  document.getElementById('paper').onclick = function () {
    playGame('paper');
  };
  document.getElementById('scissors').onclick = function () {
    playGame('scissors');
  };
};