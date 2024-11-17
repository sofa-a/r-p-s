 function getComputerChoice() {
      let number = Math.floor(Math.random() * 3);
      if (number === 0) {
          return "scissors";
      }
      else if (number === 1) {
          return "rock";
      }
      else if (number === 2) {
          return "paper";
      }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "scissors" && computerChoice == "paper" ||
        humanChoice == "paper" && computerChoice == "rock")
    {
        return "win";
    }
    else if (humanChoice === computerChoice) {
        return "draw";
    }
    else {
        return "lose";
    }

}

function endGame(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("player wins");
    } 
    else if (computerScore > humanScore) {
        console.log("computer wins");
    } 
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    var outcome;

    const container = document.querySelector("body");

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            let choice = e.target.getAttribute("id");
            const computerSelection = getComputerChoice();
            outcome = playRound(choice, computerSelection);            

            // display outcome of the round
            if (outcome == "win") {
                humanScore += 1;
            }
            else if (outcome == "lose") {
                computerScore += 1;
            }

    
            // display outcome of the game
            if (humanScore === 5 || computerScore === 5) {
                buttons.forEach((button) => button.disabled = true);
                endGame(humanScore, computerScore);
            }
            
        });
    });



}

playGame();
