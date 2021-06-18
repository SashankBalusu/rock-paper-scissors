let winNum = 0;
let compWin = 0;
function computerPlay (){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection == "rock"){
        return "Tie game!";
    }
    else if (playerSelection === "rock" && computerSelection == "paper"){
        compWin++;
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "rock" && computerSelection == "scissors"){
        winNum++;
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection == "rock"){
        winNum++;
        return "You win! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection == "paper"){
        return "Tie game!";
    }
    else if (playerSelection === "paper" && computerSelection == "scissors"){
        compWin++;
        return "You lose! Scissor beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection == "rock"){
        compWin++;
        return "You lose! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection == "paper"){
        winNum++;
        return "You win! Scissors beats Paper";
    }
    else{
        return "Tie game!";
    }

}

const btn = document.querySelector("#rock");
const btn2 = document.querySelector("#paper");
const btn3 = document.querySelector("#scissors");
const pCon = document.querySelector("#gameWin");
const curScore = document.querySelector("#curScore");
const winner = document.querySelector("#winner");



btn.addEventListener('click', function(){
    pCon.textContent = playRound("rock", computerPlay());
    curScore.textContent = "User " + winNum + " - " + " Computer " + compWin;
    if (winNum + compWin >= 5){
        if (winNum >=3){
            winner.textContent = "User wins!" 
        }
        else {
            winner.textContent = "Computer wins!" 
        }
        compWin = 0;
        winNum = 0;
    }
    else{
        winner.textContent = "Winner: " 
    }
} );
btn2.addEventListener('click', function(){
    pCon.textContent = playRound("paper", computerPlay());
    curScore.textContent = "User " + winNum + " - " + " Computer " + compWin;
    if (winNum + compWin >= 5){
        if (winNum >=3){
            winner.textContent = "User wins!" 
        }
        else {
            winner.textContent = "Computer wins!" 
        }
        compWin = 0;
        winNum = 0;
    }
    else{
        winner.textContent = "Winner: " 
    }

} );
btn3.addEventListener('click', function(){
    pCon.textContent = playRound("scissors", computerPlay());
    curScore.textContent = "User " + winNum + " - " + " Computer " + compWin;
    if (winNum + compWin >= 5){
        if (winNum >=3){
            winner.textContent = "User wins!" 
        }
        else {
            winner.textContent = "Computer wins!" 
        }
        
        compWin = 0;
        winNum = 0;
    }
    else{
        winner.textContent = "Winner: " 
    }

} );