function darkMode() {
    let element = document.body;
    element.className = 'dark-mode'
}
function lightMode() {
    let element = document.body;
    element.className = 'light-mode'
}

/*Rock, Paper, Scissors game*/
let playerSelection = document.querySelectorAll('button')

function playRound() {
    let playerSelection = playerChoice()
    computerChoices = ['Rock', 'Paper', 'Scissors']
    computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (playerSelection == computerSelection){
    console.log('Tie game')
    }else if ((playerSelection === 'Rock' && computerSelection === "Scissors") || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    }else{
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
}

function playerChoice() {
    for (const button of playerSelection){
        button.addEventListener('click', () => {
            if (button.textContent == 'Rock'){
                console.log('Rock')
            }else if (button.textContent == 'Paper'){
                console.log('Paper')
            }else if (button.textContent == 'Scissors'){
                console.log('Scissors')
            }
        })
    }
}

function fullGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    console.log('Game Over')
}

playerChoice()

/*function rockBtn(){
for (const button of buttons){
    button.addEventListener('click', () => {
        if (button.textContent == "Rock"){
            console.log('hello world')
}})}}*/

/*function capitlize(text) {
    firstLetter = text.charAt(0)
    newFirstLetter = firstLetter.toUpperCase()
    remainingText = text.slice(1)
    console.log(newFirstLetter + remainingText.toLowerCase())
}

capitlize('HURRY')*/