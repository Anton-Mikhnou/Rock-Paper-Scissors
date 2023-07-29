let arr = ["Rock", "Sciccors", "Paper"]
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
function game(playRound){
    console.log("1:",playRound(playerSelection, computerSelection));
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice(arr);
console.log("2:",playRound(playerSelection, computerSelection));