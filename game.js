function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.round(Math.random() * (maxFloored - minCeiled) + minCeiled)
}


function getComputerChoice(){
    let choice = getRandomInt(1, 3);

    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"
    }
}


function getHumanChoice(){
    let instructions = `Please select a valid choice (1-3):
    
    1. Rock
    2. Paper
    3. Scissors
    `
    let choice = +(prompt(instructions))

    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"
    }
}


function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "rock":
            switch(computerChoice){
                case "rock":
                    console.log("Draw");
                    return;
                case "paper":
                    console.log("You lose! Paper beats Rock");
                    //computerScore++;
                    return 0;
                case "scissors":
                    console.log("You win! Rock beats Scissors");
                    //humanScore++;
                    return 1;
            }
        case "paper":
            switch(computerChoice){
                case "rock":
                    console.log("You win! Paper beats Rock");
                    //humanScore++;
                    return 1;
                case "paper":
                    console.log("Draw");
                    return;
                case "scissors":
                    console.log("You lose! Scissors beats Paper");
                    //computerScore++;
                    return 0;
            }
        case "scissors":
            switch(computerChoice){
                case "rock":
                    console.log("You lose! Rock beats Scissors");
                    //computerScore++;
                    return 0;
                case "paper":
                    console.log("You win! Scissors beats Paper");
                    //humanScore++;
                    return 1;
                case "scissors":
                    console.log("Draw");
                    return;
            }
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

    console.log("Game End")

    if (humanScore === computerScore){console.log("The game was a Draw");}
    else if (humanScore > computerScore){console.log("You won the game!!");}
    else {console.log("You lost the game!!");}
}


// Run script
playGame();
