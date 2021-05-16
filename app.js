const user = document.getElementById("user");
const computer = document.getElementById("computer");
const message = document.querySelector(".message");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let userScore = 0;
let compScore = 0;

function compChoice() {
  const compArray = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return compArray[randomChoice];
}

function userChoice(choice) {
  const compChoices = compChoice();
  if (choice === compChoices) {
    message.textContent = `${choice} - TIE - ${compChoices}`;
  } else if (choice === "Rock" && compChoices === "Paper") {
    message.textContent = `${choice} - COMPUTER WINS! - ${compChoices}`;
    compScore++;
  } else if (choice === "Rock" && compChoices === "Scissors") {
    message.textContent = `${choice} - USER WINS! - ${compChoices}`;
    userScore++;
  } else if (choice === "Paper" && compChoices === "Rock") {
    message.textContent = `${choice} - USER WINS! - ${compChoices}`;
    userScore++;
  } else if (choice === "Paper" && compChoices === "Scissors") {
    message.textContent = `${choice} - COMPUTER WINS! - ${compChoices}`;
    compScore++;
  } else if (choice === "Scissors" && compChoices === "Rock") {
    message.textContent = `${choice} - COMPUTER WINS! - ${compChoices}`;
    compScore++;
  } else if (choice === "Scissors" && compChoices === "Paper") {
    message.textContent = `${choice} - USER WINS! - ${compChoices}`;
    userScore++;
  }
  user.textContent = userScore;
  computer.textContent = compScore;
}

rock.addEventListener("click", function () {
  userChoice("Rock");
});
paper.addEventListener("click", function () {
  userChoice("Paper");
});
scissors.addEventListener("click", function () {
  userChoice("Scissors");
});
