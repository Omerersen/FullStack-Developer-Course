let hands = ["Rock" , "Paper" , "Scissors"];

function getHand() {
  let randomNumber = Math.floor(Math.random() *3) 
  return randomNumber;
}
let getHandEl = getHand();
console.log(hands[getHandEl])