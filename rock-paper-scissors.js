let humanScore = 0;
let computerScore = 0;

document.querySelector("rock").addEventListener("click", rockSelect);
document.querySelector("paper").addEventListener("click", rockSelect);
document.querySelector("scissors").addEventListener("click", rockSelect);

function rockSelect(){
    document.getElementById("youPicked").innerHTML = "You picked: rock";
}

function paperSelect(){
    document.getElementById("youPicked").innerHTML = "You picked: paper";
}

function scissorsSelect(){
    document.getElementById("youPicked").innerHTML = "You picked: scissors";
}

function playerSelection(){
    /*​if playerSelection is rock
        return "rock"
    else if playerSelection is paper
        return "paper"
    else if playerSelection is scissors
        return "scissors"*/
}

function playRound(playerSelection){

    const computerSelection = randomComputer();
    showSelections(playerSelection,computerSelection);

    if (playerSelection ==='rock' && computerSelection === 'rock') {
        document.querySelector('#text').innerText = 'Tie. You both chose rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        document.querySelector('#text').innerText ='You lost!'
        computerScore++;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')) {
        document.querySelector('#text').innerText ='You won!'
        humanScore ++;
    }

    if (playerSelection ==='paper' && computerSelection === 'paper'){
        document.querySelector('#text').innerText ='Tie. You both chose paper!'
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        document.querySelector('#text').innerText ='You lost!'
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        document.querySelector('#text').innerText ='You won!'
        humanScore ++;
    }

    if (playerSelection ==='scissors' && computerSelection === 'scissors'){
        document.querySelector('#text').innerText ='Tie. You both chose scissors!'
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        document.querySelector('#text').innerText ='You lost!'
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        document.querySelector('#text').innerText ='You won!'
        humanScore ++;
    }

    updateScore(humanScore,computerScore);
}

function whoWins() {
    if (playerSelection === computerPlay)
        return "It's a tie!"
    else if (playerSelection == "rock" && computerPlay == "scissors")
        return "You win!"
    
}

function game(){
   
}