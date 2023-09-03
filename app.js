let arr = ["Rock", "Scissors", "Paper"];
function getComputerChoice(arr) {
    const randomElement = getRandomFloat(0, 2);
    return arr[randomElement]; 
}

function getRandomFloat(min , max){
    return Math.round(Math.random() * (max - min) + min);
}

// const computerSelection = getComputerChoice(arr);
// console.log('computerSelection',computerSelection)
let pointPlayer = 0;
let pointComputer = 0;
let playerSelection;


let buttons = document.querySelectorAll('.gameBtn');
let scoreDisplay = document.querySelector('.score');
let winnerDisplay = document.querySelector('.winner');
buttons.forEach(buttons => {
    buttons.addEventListener('click', (event) => {
        event.target.classList.add('active'); 
        playerSelection = event.target.getAttribute('name');
        const computerSelection = getComputerChoice(arr);
        playRound(playerSelection, computerSelection);
        scoreDisplay.textContent = `${pointPlayer} : ${pointComputer}`;
        winnerDetermination();
    });
});


// one round game
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

// console.log('playRound:',playRound(playerSelection, computerSelection))



function showPoint(pointPlayer, pointComputer){
    console.log(`${pointPlayer}:${pointComputer}`);
}

let promo = document.querySelector('.winner');

showPoint(pointPlayer, pointComputer);

function winnerDetermination(){
    if (pointPlayer > pointComputer){
        promo.textContent = "YOU WIN!";
    } else if (pointPlayer === pointComputer){
        promo.textContent = "DRAW";
    } else promo.textContent = "YOU LOSE!"; 
}

