let player = {
    name: "karthik",
    chips: 235
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let numberOfTimesClicked = 0;
let clickCountEl = document.getElementById("click-count");

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function openPopup() {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("myPopup").style.display = "block";
  
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("myPopup").style.display = "none";
}
function startGame() {
    openPopup();
    closePopup();
    document.getElementById("closeBtn").style.display = "none";
    document.getElementById("game").style.display = "inline-block";
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
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
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function newGame() {
    numberOfTimesClicked++;
    if (clickCountEl) {
        clickCountEl.textContent = `New Game Clicked: ${numberOfTimesClicked}`;
    }
    cards = [];
    sum = 0;
    hasBlackJack = false;
    isAlive = false;
    message = "Want to play a round?";
    messageEl.textContent = message;
    sumEl.textContent = "Sum:";
    cardsEl.textContent = "Cards:";
    document.getElementById("closeBtn").style.display = "inline-block";
    document.getElementById("game").style.display = "none";
    closePopup();
}