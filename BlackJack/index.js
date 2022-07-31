
let mycards = [];
let sum = 0 ;
let message = "";
let isAlive = false;
let hasBlackJack = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards");

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    mycards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    
    renderGame();
}

function renderGame(){
    sumEl.textContent = "Sum: "+ sum;
    cardEl.textContent = "Cards: ";
    for (let i=0; i<mycards.length; i++) {
        cardEl.textContent += mycards[i] + " ";
    }

    if(sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
        isAlive = true;
    }
    else if(sum === 21) {
        message = "Wohoo, You've got Blackjack! 🥳 ";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game! 😭";
        isAlive = false;
    } 

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack !== true){
    let card = getRandomCard();
    sum += card;
    mycards.push(card);
    renderGame();
    }
}

function getRandomCard() {
   let randomNum = Math.floor(Math.random() * 13) + 1; 
   if (randomNum === 1) {
        return 11;
   } else if (randomNum > 10){
        return 10;
   } else {
    return randomNum;
   }
}


