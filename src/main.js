let game = new Game();
let level = 6;
game.reset(level);
let levels = document.querySelectorAll('#levels li');
let openedCards = [];

play()

levels.forEach(level => level.addEventListener('click', e => {
    levels.forEach(level => level.classList.remove('active'));
    e.currentTarget.classList.add('active')
    level = e.currentTarget.value;
    game.reset(level);
    play();
}));


function play() {
    openCard();
    for(let i = 0; i < game.cardElements.length; i++) {
        game.cardElements[i].onclick = function () {
            openCard();
            game.cards[i].state = 1;
            let openWords = openedCards.map(e => e.word);
            if(!openWords.includes(game.cards[i].word)) openedCards.push(game.cards[i]);
            ifMatched();
        }
    }
}


function openCard() {
    game.cardElements.forEach(card => card.addEventListener('click', e => {
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
                game.cardElements.forEach(e => e.classList.remove('opened'));
                openedCards = [];
            }, 2000);
        }
   }
}
