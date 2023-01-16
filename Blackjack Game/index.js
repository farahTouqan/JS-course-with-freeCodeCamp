
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerName = "Farah";
let playerChips = 145;
let playerEl = document.getElementById("player-el")
playerEl.textContent = (playerName + ": $" + playerChips);

function startgame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard; 
    rendergame();
}

function getRandomCard(){
    let value = Math.floor(Math.random() * 13) + 1;
    if(value === 1){
        value = 11;
    }else if(value === 11 || value === 12 || value === 13){
        value = 10;
    }
    return value;
}

function rendergame(){
    cardsEl.textContent = "Cards: ";
    for(let i=0 ; i<cards.length ; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "sum: " + sum;
    if(sum <= 21){
    message = "Do you want to draw a new card? ";
}else if(sum === 21){
    message = "you've got BlackJack! ";
    hasBlackJack = true;
}else{
    message = "You're out of the game! ";
    isAlive = false;
}
messageEl.textContent = message;
 
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
      let card = getRandomCard();
      sum += card;
      cards.push(card);
      rendergame();  
    }
    
}