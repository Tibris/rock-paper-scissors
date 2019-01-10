let userScore = 0;
let computerScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result = document.getElementById("result");

function getComputerChoice() {
    let choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === 'r') {
        return "ROCK";
    }
    if(letter === 'p') {
        return "PAPER";
    }
        return "SCISSORS";
}

function win(userChoice, computerChoice) {
    userScore++;
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + " vs " + convertToWord(computerChoice) + ". Player wins!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + " vs " + convertToWord(computerChoice) + ". Computer wins!";
}

function draw(userChoice, computerChoice) {
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(userChoice) + " vs " + convertToWord(computerChoice) + ". Draw!";
}

function endGame(userChoice, computerChoice) {
    playerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if(userScore > 14) {
        alert("Game over! Player wins!");
        userScore = 0;
        computerScore = 0;
    }else if(computerScore > 14) {
        alert("Game over! Computer wins!");
        userScore = 0;
        computerScore = 0;
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    endGame(userChoice, computerChoice);
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        }
}

function main() {
    rock.addEventListener("click", () => game("r"));
    paper.addEventListener("click", () => game("p"));
    scissors.addEventListener("click", () => game("s"));
}

main();
