let cards = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "ömer",
  chips: 150
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips; 

function getRandomCart() {
  let randomNumber = Math.floor((Math.random() * 13) + 1);
  if(randomNumber === 1) {
    randomNumber = 11;
  } else if(randomNumber >= 11 && randomNumber <= 13) {
    randomNumber = 10;
  }
  return randomNumber;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCart();
  let secondCard = getRandomCart();
  cards = [firstCard , secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame(){
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if(sum <= 20) {
    message= "Do you want to draw a new card";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCart();
    sum += card;
    renderGame;
    cards.push(card);
    cardsEl.textContent += card + " ";
    renderGame();
  }
}

