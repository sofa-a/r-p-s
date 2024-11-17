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

function playGame() {
    humanScore = 0;
    computerScore = 0;

    const rock = document.querySelector("#rock");
    /*const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");*/


    rock.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        console.log(playRound("rock", computerSelection));
    });
    /*paper.addEventListener("click", playRound("paper", computerSelection));
    scissors.addEventListener("click", playRound("scissors", computerSelection));

    if (outcome == "win") {
        humanScore += 1;
    }
    else if (outcome == "lose") {
        computerScore += 1;
    }
    console.log(outcome);

    /*if (humanScore > computerScore) {
        console.log("you win");
    }
    else if (computerScore > humanScore) {
        console.log("you lose");
    }
    else {
        console.log("you drew");
    }*/
}

playGame();
