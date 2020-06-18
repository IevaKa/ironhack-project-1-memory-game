let game = new Game();
let level = 6;
game.reset(level);
let levels = document.querySelectorAll('#levels li');
let timerDom = document.querySelector('#timer span');
let scoreDom = document.querySelector('#scores span');
let openedCards = [];
let interval;
let seconds = 60;
let score = 0;

play();
timerDom.innerText = toTimeString(seconds);

levels.forEach(lev => lev.addEventListener('click', e => {
    levels.forEach(level => level.classList.remove('active'));
    e.currentTarget.classList.add('active');
    level = e.currentTarget.value;
    resetSeconds(level);
    game.stopInterval();
    game.reset(level);
    play();
}));

function play() {
    document.getElementById('all-cards').addEventListener("click", game.playInterval, {once: true});
    openCard();
    for(let i = 0; i < game.cardElements.length; i++) {
        game.cardElements[i].onclick = function () {
            openCard();
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
            score += 1;
            scoreDom.innerText = score;
            if(score == level) {
                setTimeout(function(){ 
                    alert("You win!"); 
                    game.stopInterval();
                }, 1000);            
            }
        } else {
            setTimeout(function() { 
                game.cardElements.forEach(e => e.classList.remove('opened'));
                openedCards = [];
            }, 2000);
        }
   }
}

function toTimeString() {
    return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0].substring(3);
}

function resetSeconds(level) {
    if(level == 6) {
        seconds = 60;
    } else if(level == 8) {
        seconds = 120;
    } else {
        seconds = 300;
    }
    timerDom.innerText = toTimeString(seconds);
    score = 0;
    scoreDom.innerText = 0;
}

