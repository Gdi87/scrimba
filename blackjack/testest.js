let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");

let checkGameStatus = () => {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
}


function startGame() {
    checkGameStatus();
    messageEl.textContent = message;

    console.log(message);
    console.log(hasBlackJack);
    console.log(isAlive);
}
startGame(); 