// let enterSelect = prompt("Make your choice!");


let arr = ["Rock", "Scissors", "Paper"]
function getComputerChoice(arr) {
    const randomElement = getRandomFloat(0, 2);
    return arr[randomElement]; 
}

function getRandomFloat(min , max){
    return Math.round(Math.random() * (max - min) + min);
}

let pointPlayer = 0;
let pointComputer = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        ++pointPlayer;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        return `Draw!`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        ++pointComputer;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        ++pointPlayer;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        return `Draw!`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        ++pointComputer;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        ++pointPlayer;
        return`You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        return `Draw!`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        ++pointComputer;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else return `noSelect`;
}



function game() {
    for (let i = 1; i <= 5; i++) {
        let enterSelect = prompt("Make your choice! (Rock, Scissors, or Paper)").trim();
        const playerSelection = enterSelect.charAt(0).toUpperCase() + enterSelect.slice(1).toLowerCase();
        const computerSelection = getComputerChoice(arr);
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();


function showPoint(pointPlayer, pointComputer){
    console.log(`${pointPlayer}:${pointComputer}`);
}

showPoint(pointPlayer, pointComputer);



