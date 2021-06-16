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
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "rock" && computerSelection == "scissors"){
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection == "paper"){
        return "Tie game!";
    }
    else if (playerSelection === "paper" && computerSelection == "scissors"){
        return "You lose! Scissor beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats Paper";
    }
    else{
        return "Tie game!";
    }
}
function game (){
    let winNum = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose rock, paper, or scissors");
        let findWinner = playRound(playerSelection,computerPlay());
        if (findWinner.substring(0, 8) === "You win"){
            winNum ++;
        }
        else if (findWinner === "Tie game!"){
            playRound();
            i--;
        }
        console.log(findWinner);
    }
    if (winNum >= 3){
        return "Player wins!";
    }
    else {
        return "Player Loses!";
    }

}
console.log(game());