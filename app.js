let arr = ["Rock", "Scissors", "Paper"]
function getComputerChoice(arr) {
    const randomElement = getRandomFloat(0, 2);
    return arr[randomElement]; 
}

function getRandomFloat(min , max){
    return Math.round(Math.random() * (max - min) + min);
}
// getRandomFloat(0, 2);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        return `Draw!`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return "Draw!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return`You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return "Draw!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else return "noSelect";
}



function game() {
    console.log(playRound(playerSelection, computerSelection));
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice(arr);
game();

// console.log("2:",playRound(playerSelection, computerSelection));
