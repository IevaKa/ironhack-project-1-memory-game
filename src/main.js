let game = new Game();
let cardElements = document.querySelectorAll('.card');
let sumOpened = 0;


cardElements.forEach(card => card.addEventListener('click', 
    (e) => e.currentTarget.classList.add('opened')
));

for(let i = 0; i < cardElements.length; i++) {
    cardElements[i].onclick = function () {
        trackState(i);
        //closeCards();
    }
}

function trackState(i) {
    game.cards[i].state = 1;
    sumOpened = game.cards.reduce((acc, val) => acc + val.state, 0);
    if(sumOpened > 2) {
        cardElements.forEach(e => e.classList.remove('opened'))
    } 
}

//cardElements.forEach(e => e.classList.remove('opened'))



