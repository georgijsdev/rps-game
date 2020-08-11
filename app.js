// DOM Variables
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Score Variables
let userScore = 0;
let computerScore = 0;

// Random computer choice
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Convert choice to display word
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// WIN
function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(user)} <span style=\"color:#8DF06F;\">beats</span> ${convertToWord(computer)}. You <span style=\"color:#8DF06F;\">win</span>!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300);
}

// LOSS
function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computer)} <span style=\"color:#FF3B28;\">beats</span> ${convertToWord(user)}. You <span style=\"color:#FF3B28;\">lost</span>!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300);
}

//DRAW
function draw(user, computer) {
    result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}. It's a <span style=\"color:#909090;\">draw</span>!`;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(() => document.getElementById(user).classList.remove('grey-glow'), 300);
}

// Get the user choice
function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}


// GAME 
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// Call the function that get's the user choice
main();