let firstCard = Math.random(2 - 11)
let secondCard = 2

let sum = firstCard + secondCard
console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("u W🙂N")
} else if (sum > 21) {
    console.log("losah😭")
} else {
    console.log("u r braking the phisics and the space and the infinite!!!")
};

let age = 22
if (age < 21) {
    console.log("You can not enter here!")
} else {
    console.log("Welcomen!")
}
if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}

let firstCaard = 10
let secondCaard = 7
let suum = firstCaard + secondCaard

if (suum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
}
else if (suum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
}
else {
    console.log("You're out of the game! 😭")
};

console.log(4 === 3)  // f
console.log(5 > 2)    // t
console.log(12 > 12)  //f
console.log(3 < 0)    //f
console.log(3 >= 3)   // t
console.log(11 <= 11) //t
console.log(3 <= 2)   //f

/*let firstCard = 10;
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
startGame(); */