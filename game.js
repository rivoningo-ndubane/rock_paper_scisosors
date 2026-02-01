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


function playRound(humanChoice, computerChoice){
    // Create object to obtain winning matches
    const winningMatch = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper",
    }

    if (humanChoice === computerChoice){}
    else if (winningMatch[humanChoice] === computerChoice){return 1;}
    else {return -1;}
}


// Run script
// Keep track of scores
let humanScore = 0;
let computerScore = 0;

// get a nodeList of buttons
const buttons = document.querySelectorAll("button");

// add event listeners for the buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Acquire choices
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        // Play a round
        const result = playRound(humanChoice, computerChoice);

        // Acquire node that will display results
        const results = document.querySelector("#results");
        let display = '';

        // Update scores
        if (result === 1){
            humanScore++;
            display = `\nYou win! ${humanChoice} beats ${computerChoice}`;
        }
        else if (result === -1){
            computerScore++;
            display = `\nYou lose! ${humanChoice} losses to ${computerChoice}`;
        }
        else {
            display = "\nDraw";
        }

        // Change display contents to include scores
        display += `
        \nHuman Score: ${humanScore}
        Computer Score: ${computerScore}
        `

        // End game logic
        if (humanScore === 5 || computerScore === 5){
            if (humanScore === computerScore){display += "\nThe game was a Draw";}
            else if (humanScore > computerScore){display += "\nYou won the game!!";}
            else {display += "\nYou lost the game!!";}

        }

        // Display to screen
        results.innerText = display;

        // reset
        if (humanScore === 5 || computerScore === 5){
            humanScore=0;
            computerScore=0;
        }
    })
});
