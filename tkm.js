const player = document.getElementById('player');
const playerScore = document.getElementById('playerScore');
const tasP = document.getElementById('tasP');
const kagitP = document.getElementById('kagitP');
const makasP = document.getElementById('makasP');

const computer = document.getElementById('computer');
const computerScore = document.getElementById('computerScore');
const tasC = document.getElementById('tasC');
const kagitC = document.getElementById('kagitC');
const makasC = document.getElementById('makasC');

const winnerPlayer = document.getElementById('winnerPlayer');
const reset = document.getElementById('reset');


const chocies = {
    tas: { name: 'tas', win: ['makas'] },
    kagit: { name: 'kagit', win: ['tas'] },
    makas: { name: 'makas', win: ['kagit'] }
}

const allGameIcon = document.querySelectorAll('.icon');
let computerChoice = '';

function removePlayerSelected() {
    tasP.classList.remove('selected');
    kagitP.classList.remove('selected');
    makasP.classList.remove('selected');
}

function removeComputerSelected() {
    tasC.classList.remove('selected');
    kagitC.classList.remove('selected');
    makasC.classList.remove('selected');
}

// Bilgisayarın rastgele seçimini yap
function computerRandom() {
    const randomChoice = Math.random();

    if (randomChoice < 0.3) {
        computerChoice = 'tas';
    }
    else if (randomChoice > 0.65) {
        computerChoice = 'kagit';
    }
    else {
        computerChoice = 'makas';
    }
}

// Oyuncunun seçimi
function select(playerChoice) {
    removePlayerSelected();
    switch (playerChoice) {
        case 'tas':
            tasP.classList.add('selected');
            player.textContent = (' --- Taş');
            break;
        case 'kagit':
            kagitP.classList.add('selected');
            player.textContent = (' --- Kağıt');
            break;
        case 'makas':
            makasP.classList.add('selected');
            player.textContent = (' --- Makas');
            break;
    }
    computerCheckResult(playerChoice);
}

// Bilgisayarın seçimini ekrana gösterir
function displayComputerChoice() {
    removeComputerSelected();
    switch (computerChoice) {
        case 'tas':
            tasC.classList.add('selected');
            computer.textContent = (' --- Taş');
            break;
        case 'kagit':
            kagitC.classList.add('selected');
            computer.textContent = (' --- Kağıt');
            break;
        case 'makas':
            makasC.classList.add('selected');
            computer.textContent = (' --- Makas');
            break;
    }
}
let indexPlayer =0;
let indexComputer=0;

function updateScore(playerChoice) {

    console.log(playerChoice, computerChoice);
    if (playerChoice == computerChoice) {
        winnerPlayer.textContent = 'Berabere';
    } else {
        const choice =chocies[playerChoice];
        const a=choice.win.indexOf(computerChoice);
        if(a == 0){
            indexPlayer++;
            winnerPlayer.textContent = 'Oyuncu Kazandı';
            playerScore.textContent = indexPlayer;
            
        }else{
            indexComputer++;
            winnerPlayer.textContent = 'Bilgisayar Kazandı';
            computerScore.textContent = indexComputer;

        }
    }
}

function computerCheckResult(playerChoice) {
    computerRandom();
    displayComputerChoice();
    updateScore(playerChoice);
}

function resets() {
    indexPlayer =0;
    indexComputer=0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    removeComputerSelected();
    removePlayerSelected();
}

reset.addEventListener('click' , resets);