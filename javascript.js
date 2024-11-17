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
    const winner = document.createElement("div");
    if (humanScore > computerScore) {
        winner.textContent = "player wins";
    } 
    else if (computerScore > humanScore) {
        winner.textContent = "computer wins";
    } 
    document.body.appendChild(winner);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    var outcome;

    let existingDiv = null;

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

            if (existingDiv) {existingDiv.remove()};
            const div = document.createElement("div");
            div.textContent = outcome;
            document.body.appendChild(div);
            existingDiv = div;

    
            // display outcome of the game
            if (humanScore === 5 || computerScore === 5) {
                buttons.forEach((button) => button.disabled = true);
                endGame(humanScore, computerScore);

            }
            
        });
    });



}

playGame();
