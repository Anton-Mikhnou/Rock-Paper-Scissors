function getComputerChoice(arr){
    const randomElement = Math.floor(Math.random() * arr.length);
    return arr[randomElement];
}

if (playerSelection === "rock" && computerSelection ==="paper" ){
    console.log("Computer choice:" + computerSelection + "You win")
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection ==="paper" ){
        console.log("Computer choice:" + computerSelection + "You win")
    }
}

const playerSelection = "rock";

playerSelection.toLowerCase() === playerSelection.toUpperCase()

const choiceOfElements = ["Rock", "Paper", "Scissors"];

const computerSelection = getComputerChoice(choiceOfElements);


console.log(computerSelection)

computerSelection.toLowerCase === computerSelection.toLowerCase

console.log(playRound(playerSelection, computerSelection));