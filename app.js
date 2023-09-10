let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choice_div = document.getElementsByClassName("choice");

console.log(result_p);

function main() {
  rock_div.addEventListener("click", () =>
    game("r")
  );

  paper_div.addEventListener("click",() =>
    game("p")
  );

  scissors_div.addEventListener("click", () =>
    game("s")
  );
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomChoice = Math.floor(Math.random(choices) * 3);
  return choices[randomChoice];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  else if (letter === "p") return "Paper";
  else if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallComputerWord}. You win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => 
    userChoice_div.classList.remove("green-glow")
  , 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(
    computerChoice
  )}${smallComputerWord} beats ${convertToWord(
    userChoice
  )}${smallUserWord}. You lose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => 
    userChoice_div.classList.remove("red-glow")
  , 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} equals ${convertToWord(
    computerChoice
  )}${smallComputerWord}. Its a draw!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => 
    userChoice_div.classList.remove("grey-glow")
  , 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log("user wins", userChoice, computerChoice);
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      console.log("cpu wins", userChoice, computerChoice);
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "pp":
    case "rr":
      console.log("its a tie, try again!");
      draw(userChoice, computerChoice);
      break;
  }
}

main();
