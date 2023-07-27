let arr = ["Rock", "Sciccors", "Paper"]
function getComputerChoice(arr) {
    const randomElement = Math.floor(Math.random() * arr.length);
    return arr[randomElement]; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log("You win!", playerSelection, "beats", computerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        console.log("Draw!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        console.log("You lose!", computerSelection, "beats", playerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log("You win!", playerSelection, "beats", computerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        console.log("Draw!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log("You lose!", computerSelection, "beats", playerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You win!", playerSelection, "beats", computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        console.log("Draw!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log("You lose!", computerSelection, "beats", playerSelection);
    } else console.log("noSelect");
}
// game 5 round
function game(){
    console.log(
        playRound()
    )
}


const playerSelection = "Rock";
playerSelection.toLowerCase === playerSelection.toUpperCase
const computerSelection = getComputerChoice(arr);
console.log(playRound(playerSelection, computerSelection));