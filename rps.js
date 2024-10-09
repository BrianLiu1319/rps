function getComputerChoice() {
    var max = 3;
    var min = 0;
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    var ret;

    if (rand % 3 == 0){
        ret = "scissors";
    } 
    else if (rand % 3 == 1){
        ret = "paper";
    }
    else{
        ret = "rock";
    }

    return ret;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock Paper or Scissors?")
    return humanChoice
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "scissors"){
        if (computerChoice == "rock"){
            console.log("you lost, rock beats paper ")
            computerScore++;
        }
        else if (computerChoice == "paper"){
            console.log("you win, scissors beats paper ")
            humanScore++;
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("you win, paper beats rock ")
            humanScore++;
        }
        else if (computerChoice == "scissors"){
            console.log("you lose, scissors beats paper ")
            computerScore++;
        }
    }
    else{
        if (computerChoice == "paper"){
            console.log("you lose, paper beats rock ")
            computerScore++;
        }
        else if (computerChoice == "scissors"){
            console.log("you win, rock beats scissors")
            humanScore++;
        }
    }

}

var humanScore = 0;
var computerScore = 0;


for (var i = 0; i < 5 ; i ++){
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
}







