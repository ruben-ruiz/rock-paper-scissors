let gameChoices = ["rock", "paper", "scissors"];

let rockImg = document.querySelector("body > div.container > div.game > div.playerChoose > img:nth-child(2)");
let paperImg = document.querySelector("body > div.container > div.game > div.playerChoose > img:nth-child(3)");
let scissorImg = document.querySelector("body > div.container > div.game > div.playerChoose > img:nth-child(4)");
let cpuImg = document.querySelector("body > div.container > div.game > div.cpuChoice > img");
let playerImg = document.getElementById("playerImg");
let newGame = document.querySelector("body > div.container > div.scoreboard > button");

let scorePath = document.querySelector("body > div.container > div.scoreboard");
let cpuScore = document.querySelector("body > div.container > div.scoreboard > div > div.cpuScore > p");
let playerScore = document.querySelector("body > div.container > div.scoreboard > div > div.playerScore > p");

let cpuPoints = 0;
let playerPoints = 0;

function playRound(e) {
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    let playerSelection = document.querySelector(`.choose[data-key="${e.target.dataset.key}"]`).getAttribute("data-key");
    if (!playerSelection) return;

    if (document.querySelector("body > div.container > div.scoreboard > div.results")) {
        restart();
    }

    if (cpuPoints !== 5 && playerPoints !== 5) {
        
        if (computerSelection == 'rock' && playerSelection == 'scissors') {
            cpuImg.src = "images/icons8-hand-rock-50.png";
            playerImg.src = "images/icons8-hand-scissors-50.png"
            cpuPoints++;
            cpuScore.textContent = cpuPoints.toString();
    
        } else if (computerSelection == 'rock' && playerSelection == 'paper') {
            cpuImg.src = "images/icons8-hand-rock-50.png";
            playerImg.src = "images/icons8-hand-paper-50.png";
            playerPoints++;
            playerScore.textContent = playerPoints.toString();
    
        } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
            cpuImg.src = "images/icons8-hand-paper-50.png";
            playerImg.src = "images/icons8-hand-scissors-50.png"
            playerPoints++;
            playerScore.textContent = playerPoints.toString();
    
        } else if (computerSelection == 'paper' && playerSelection == 'rock') {
            cpuImg.src = "images/icons8-hand-paper-50.png";
            playerImg.src = "images/icons8-hand-rock-50.png";
            cpuPoints++;
            cpuScore.textContent = cpuPoints.toString();
    
        } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
            cpuImg.src = "images/icons8-hand-scissors-50.png";
            playerImg.src = "images/icons8-hand-rock-50.png";
            playerPoints++;
            playerScore.textContent = playerPoints.toString();
    
        } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
            cpuImg.src = "images/icons8-hand-scissors-50.png";
            playerImg.src = "images/icons8-hand-paper-50.png";
            cpuPoints++;
            cpuScore.textContent = cpuPoints.toString();
    
        } else {
            cpuImg.src = `images/icons8-hand-${computerSelection}-50.png`;
            playerImg.src = `images/icons8-hand-${playerSelection}-50.png`;
        }
    }
    
    if (cpuPoints === 5) {
            let displayResults = document.createElement("div");
            displayResults.classList.add('results')
            displayResults.innerHTML = `The CPU outsmarted you. GAME OVER`;
            scorePath.appendChild(displayResults);
            cpuPoints = 0;
            playerPoints = 0;
    } else if (playerPoints === 5) {
            let displayResults = document.createElement("div");
            displayResults.classList.add('results')
            displayResults.innerHTML = `You beat the computer!! HOW SWAY!`;
            scorePath.appendChild(displayResults);
            cpuPoints = 0;
            playerPoints = 0;
    }
}

function restart(e) {
    if (document.querySelector("body > div.container > div.scoreboard > div.results")) {
        scorePath.removeChild(document.querySelector("body > div.container > div.scoreboard > div.results"));
    }
    cpuPoints = 0;
    playerPoints = 0;
    cpuScore.textContent = cpuPoints.toString();
    playerScore.textContent = playerPoints.toString();
    cpuImg.src = "images/icons8-hacking-64.png";
    playerImg.src = "images/icons8-question-mark-64.png"
}

rockImg.addEventListener('click', playRound);
paperImg.addEventListener('click', playRound);
scissorImg.addEventListener('click', playRound);
newGame.addEventListener('click', restart);