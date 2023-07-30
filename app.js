// let enterSelect = prompt("Make your choice!");


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
        return `Draw!`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return`You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return `Draw!`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else return `noSelect`;
}



// function game() {
//     let i = console.log(playRound(playerSelection, computerSelection));
//     for (i = 1; i <= 5; i++){
//         return i;
//     }
//     return game();
// }


// const playerSelection =  enterSelect;
// const computerSelection = getComputerChoice(arr);
// game();



function game() {
    for (let i = 1; i <= 5; i++) {
        let enterSelect = prompt("Make your choice! (Rock, Scissors, or Paper)").trim();
        const playerSelection = enterSelect.charAt(0).toUpperCase() + enterSelect.slice(1).toLowerCase();
        const computerSelection = getComputerChoice(arr);
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();

// console.log("2:",playRound(playerSelection, computerSelection));
