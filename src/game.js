class Game {
    constructor() {
        this.cards = [];
        this.cardElements;
    }

    reset(level) {
        this.randomizePairs();
        this.selectPairs(level);
        this.pushCardsToDom();
    }

    randomizePairs() {
        for(let i = 0; i < pairs.length; i++) {
            pairs[i].randomNo = Math.random();
        }
        pairs.sort((a, b) => a.randomNo - b.randomNo).slice(0, level);
    }

    selectPairs(level) {
        this.cards = [];
        for(let p = 0; p < level; p++) {
            for(let i = 0; i < 2; i++) {
                let card = new Card();
                card.pairNo = Object.keys(pairs[p])[0];
                card.word = Object.values(pairs[p])[0].split(' ')[i];
                this.cards.push(card);
            }
        }
    } 

    pushCardsToDom(level) {   
        this.cards.sort((a, b) => a.randomNo - b.randomNo); 
        let divCards = '';
        this.cards.forEach(function(card) {
            divCards += `<div class = ${card.classCard}>
            <div class = "card">
                <div class = "front"><img src="assets/card-cover.jpg"></div>
                <div class = "back">${card.word}</div>
            </div>
            </div>`;
        });
        document.querySelector('#all-cards').innerHTML = divCards; 
        this.cardElements = document.querySelectorAll('.card');
    }
    
    playInterval() {
        interval = setInterval(function() {
            seconds--;
            if (seconds >= 0) {
                timerDom.innerText = toTimeString(seconds);
            }
            if (seconds === 0) {
                alert.render('Game Over');
            }
        }, 1000);
    }

    stopInterval(){
        clearInterval(interval); 
    }

}