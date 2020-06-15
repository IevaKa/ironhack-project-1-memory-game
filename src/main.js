let game = new Game();
let cardElements = document.querySelectorAll('.card');
let openedCards = [];

// Open the card on the click if there are no more than 2 cards already open
cardElements.forEach(card => card.addEventListener('click', e => {
    if(openedCards.length < 2) e.currentTarget.classList.add('opened')
}));

// On click:
// 1. If there are no more than 2 cards open, note that the card has been opened by
// setting state = 1;
// 2. Update the array of opened cards
// 3. Matched(): If the pair is discovered marked property "scored" as true
// 4. Close cards after 5secs if "scored" is false
for(let i = 0; i < cardElements.length; i++) {
    cardElements[i].onclick = function () {
        if(openedCards.length < 2) {
            game.cards[i].state = 1;
            openedCards.push(game.cards[i]);
            matched();
        }
        closeCards();
    }
}

function closeCards() {
    //openedCards.filter(card => card.scored === false)

    // if(openedCards.length > 1) {
    //     setTimeout(function() { 
    //         cardElements.forEach(e => e.classList.remove('opened')) 
    //     }, 5000);
    // } 
    // openedCards = [];
}

// set discovery
// 1. Add a class "matched" to the currently "opened" classes, and remove the opened class 
function matched() {
    if(openedCards.length === 2 && openedCards[0].pairNo === openedCards[1].pairNo) {
        openedCards[0].scored = true;
        openedCards[1].scored = true;
        document.querySelectorAll('.opened').forEach(e => e.classList.add('matched')); 
        cardElements.forEach(e => e.classList.remove('opened')); 
        openedCards = [];
    } 
}



