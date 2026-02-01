function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.round(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


function getComputerChoice(){
    let choice = getRandomInt(1, 3);

    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


// DEPRECATED
function getHumanChoice(){
    let instructions = `Please select a valid choice (1-3):
    
    1. Rock
    2. Paper
    3. Scissors
    `;
    let choice = +(prompt(instructions));

    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


function playRound(humanChoice, computerChoice){
    const winningMatch = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper",
    }

    if (humanChoice === computerChoice){
        console.log("Draw");
    }

    else if (winningMatch[humanChoice] === computerChoice){
        console.log("You win! Rock beats Scissors");
    }

    else {
        console.log("You lose! Paper beats Rock");
    }
}


function playGame(){
    // Main Variables
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i<5; i++){
        let result = playRound(getHumanChoice(), getComputerChoice());
        
        if (result === 1){humanScore++;}
        else if (result === 0){computerScore++;}
    }

    console.log("Game End");

    if (humanScore === computerScore){console.log("The game was a Draw");}
    else if (humanScore > computerScore){console.log("You won the game!!");}
    else {console.log("You lost the game!!");}
}


// Run script
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
    })
});
