/*Rock, Paper, Scissors game*/



function playRound() {
    let playerSelection = prompt('Make your selection')
    let computerChoices = ['Rock', 'Paper', 'Scissors']
    let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (playerSelection == computerSelection){
    console.log('Tie game')
    }else if ((playerSelection === 'Rock' && computerSelection === "Scissors") || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    }else{
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
}

playRound()