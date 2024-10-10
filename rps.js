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



function playRound(humanChoice, computerChoice, output_log){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "scissors"){
        if (computerChoice == "rock"){
            // console.log("you lost, rock beats paper ")
            output_log.textContent = "you lost, rock beats paper ";
            computerScore++;
        }
        else if (computerChoice == "paper"){
            output_log.textContent = "you lost, rock beats paper ";

            // console.log("you win, scissors beats paper ")
            humanScore++;
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            output_log.textContent = "you lost, rock beats paper ";

            // console.log("you win, paper beats rock ")
            humanScore++;
        }
        else if (computerChoice == "scissors"){
            output_log.textContent = "you lost, rock beats paper ";

            // console.log("you lose, scissors beats paper ")
            computerScore++;
        }
    }
    else{
        if (computerChoice == "paper"){
            output_log.textContent = "you lost, rock beats paper ";

            // console.log("you lose, paper beats rock ")
            computerScore++;
        }
        else if (computerChoice == "scissors"){
            output_log.textContent = "you lost, rock beats paper ";

            // console.log("you win, rock beats scissors")
            humanScore++;
        }
    }

}



var humanScore = 0;
var computerScore = 0;

const button_refs = document.querySelectorAll("button");

const new_div = document.createElement("div");
const human_score = document.createElement("div");
const computer_score = document.createElement("div");
const output_log = document.createElement("div");


human_score.textContent = "humanScore : " + humanScore;
computer_score.textContent = "computerScore : " + computerScore;


new_div.appendChild(human_score);
new_div.appendChild(computer_score);

const div_query = document.querySelector("div");
div_query.appendChild(new_div);

button_refs.forEach((button) => {
    button.addEventListener("click", () => {
        let humanSelection = button.innerText;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, output_log);

        new_div.appendChild(output_log);

        human_score.textContent = "humanScore : " + humanScore;
        computer_score.textContent = "computerScore : " + computerScore;

    });
});
// button_refs.addEventListener("click", () => {
//     var humanSelection = button_ref.value;
//     console.log(humanSelection);

// });









// var humanSelection = getHumanChoice();


// playRound(humanSelection, computerSelection);
// console.log("human score: " + humanScore);
// console.log("computer score: " + computerScore);










