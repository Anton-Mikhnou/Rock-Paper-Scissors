let arr = ["Rock", "Scissors", "Paper"];
function getComputerChoice(arr) {
    const randomElement = getRandomFloat(0, 2);
    return arr[randomElement]; 
}

function getRandomFloat(min , max){
    return Math.round(Math.random() * (max - min) + min);
}

let pointPlayer = 0;
let pointComputer = 0;
let playerSelection;


const buttons = document.querySelectorAll('.gameBtn');
const scoreDisplay = document.querySelector('.score');
let winnerDisplay = document.querySelector('.winner');
buttons.forEach(buttons => {
    buttons.addEventListener('click', (event) => {
        const button = event.target
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 500);
        playerSelection = button.getAttribute('name');
        const computerSelection = getComputerChoice(arr);
        playRound(playerSelection, computerSelection);
        scoreDisplay.textContent = `${pointPlayer} : ${pointComputer}`;
        if (pointComputer === 5 || pointPlayer === 5){
            winnerDetermination() &&  buttons.setAttribute("disabled", "disabled")
        }
    });
});


// one round game
function playRound(playerSelection, computerSelection) {
    if (pointComputer === 5 || pointPlayer === 5){
        return
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
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

let promo = document.querySelector('.winner');

function winnerDetermination(){
    if (pointPlayer > pointComputer){
        promo.textContent = "YOU WIN!";
        buttons.forEach(button => {
            button.setAttribute("disabled", "disabled");
        });
    } else if (pointPlayer === pointComputer){
        promo.textContent = "DRAW";
        buttons.forEach(button => {
            button.setAttribute("disabled", "disabled");
        });
    } else 
    promo.textContent = "YOU LOSE!";
    buttons.forEach(button => {
        button.setAttribute("disabled", "disabled");
    });
}

