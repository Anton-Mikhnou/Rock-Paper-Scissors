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

// document.getElementById('gameBtn').addEventListener('click', playRound);
// let button = document.getElementById('gameBtn').addEventListener('click', playerChoiceFn)
let buttons = document.querySelectorAll('.gameBtn');
buttons.forEach(buttons => {
    buttons.addEventListener('click', (event) => {
        event.target.classList.add('active');
        return buttons.textContent;
    });
});


function playerChoiceFn(){
    const buttonContent = document.getElementById('gameBtn'); 
    const playerSelection = buttonContent.getAttribute('name');
    console.log(playerSelection)
}



// one round game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        ++pointPlayer;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        pointComputer
        pointPlayer
        return `Draw!`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        ++pointComputer;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        ++pointPlayer;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors"){
        pointComputer
        pointPlayer
        return `Draw!`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        ++pointComputer;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        ++pointPlayer;
        return`You win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        pointComputer
        pointPlayer
        return `Draw!`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        ++pointComputer;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else return `noSelect`;
}


// // 5 round game
// function game() {
//     for (let i = 1; i <= 5; i++) {
//         let enterSelect = prompt("Make your choice! (Rock, Scissors, or Paper)").trim();
//         const playerSelection = enterSelect.charAt(0).toUpperCase() + enterSelect.slice(1).toLowerCase();
//         const computerSelection = getComputerChoice(arr);
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }
// game();
const computerSelection = getComputerChoice(arr);



// function playerChoice(){
//     let enterSelect = prompt("Make your choice! (Rock, Scissors, or Paper)").trim();
//         const playerSelection = enterSelect.charAt(0).toUpperCase() + enterSelect.slice(1).toLowerCase();
//         return playerSelection;
// }



function showPoint(pointPlayer, pointComputer){
    console.log(`${pointPlayer}:${pointComputer}`);
}

showPoint(pointPlayer, pointComputer);

function winnerDetermination(){
    if (pointPlayer > pointComputer){
        console.log("TOU WIN!");
    } else if (pointPlayer = pointComputer){
        console.log("DRAW");
    } else console.log("YOU LOSE!"); 
}

winnerDetermination();