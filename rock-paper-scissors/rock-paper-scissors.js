function computerPlay () {
    let rockPaperScissors = ['rock', 'paper', 'scissors']
    const randomChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    return randomChoice;
}
computerPlay()

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win!'
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win!'
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win!'
    }
    else {
        return 'You lost!'
    }
}

function game() {
    function playRound (playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'You win!'
        }
    
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return 'You win!'
        }
    
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return 'You win!'
        }
        else {
            return 'You lost!'
        }
    }
}

const playerSelection = prompt("What's your choice?").toLowerCase();
const computerSelection = computerPlay()
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));



