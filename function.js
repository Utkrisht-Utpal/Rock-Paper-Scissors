let computerMove = ' ';

function cM() {
    const rN = Math.random();

    if (rN >= 0 && rN < 1 / 3) {
        computerMove = 'rock'
    }
    else if (rN >= 1 / 3 && rN < 2 / 3) {
        computerMove = 'paper'
    }
    else if (rN >= 2 / 3 && rN < 1) {
        computerMove = 'scissors';
    }
}