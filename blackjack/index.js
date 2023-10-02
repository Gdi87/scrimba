let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")

let cardEl = document.getElementById("card-el")

let sumEl = document.querySelector("#suma-el")


function startGame() {
    sumEl.textContent = "Trotal: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    console.log(message);
    console.log(hasBlackJack);
    console.log(isAlive);
}