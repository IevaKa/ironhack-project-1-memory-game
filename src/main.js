let game = new Game();
let cardElements = document.querySelectorAll('.card');
let openedCards = [];

openCard();

for(let i = 0; i < cardElements.length; i++) {
    cardElements[i].onclick = function () {
        openCard();
        game.cards[i].state = 1;
        openedCards.push(game.cards[i]);
        ifMatched();
    }
}

function openCard() {
    cardElements.forEach(card => card.addEventListener('click', e => {
        if(openedCards.length < 2) e.currentTarget.classList.add('opened')
    }));
}

function ifMatched() {
    if (openedCards.length === 2) {
        if(openedCards[0].pairNo === openedCards[1].pairNo) {
            openedCards[0].scored = true;
            openedCards[1].scored = true;
            document.querySelectorAll('.opened').forEach(e => e.classList.add('matched')); 
            openedCards = [];
        }
        setTimeout(function() { 
            cardElements.forEach(e => e.classList.remove('opened'));
            openedCards = [];
        }, 5000);
   }
}



