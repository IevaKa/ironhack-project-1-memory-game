let game = new Game();
let cardElements = document.querySelectorAll('.card');
let levels = document.querySelectorAll('#levels li');
let openedCards = [];

openCard();

// for(let i = 0; i < levels.length; i++) {
//     levels[i].onclick = function () {
//         setLevel();
//         game = new Game(level);
//     }
// }

// function setLevel() {
//     levels.forEach(level => level.addEventListener('click', e => {
//         levels.forEach(level => level.classList.remove('active'));
//         e.currentTarget.classList.add('active')
//         level = e.currentTarget.value;
//     }));
// }


for(let i = 0; i < cardElements.length; i++) {
    cardElements[i].onclick = function () {
        openCard();
        game.cards[i].state = 1;
        let openWords = openedCards.map(e => e.word);
        if(!openWords.includes(game.cards[i].word)) openedCards.push(game.cards[i]);
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
            document.querySelectorAll('.opened').forEach(e => e.classList.add('matched')); 
            openedCards = [];
        } else {
            setTimeout(function() { 
                cardElements.forEach(e => e.classList.remove('opened'));
                openedCards = [];
            }, 3000);
        }
   }
}
