class Game {
    constructor() {
        this.cards = [];
        this.cardElements;
    }

    reset(level) {
        this.randomizePairs();
        this.selectPairs(level);
        this.pushCardsToDom();
        this.setTime(level);    
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

    pushCardsToDom() {   
        this.cards.sort((a, b) => a.randomNo - b.randomNo); 
        let divCards = '';
        this.cards.forEach(function(card) {
            divCards += `<div class = "card-container">
            <div class = "card">
                <div class = "front"><img src="assets/card-cover.jpg"></div>
                <div class = "back">${card.word}</div>
            </div>
            </div>`;
        });
        document.querySelector('#all-cards').innerHTML = divCards; 
        this.cardElements = document.querySelectorAll('.card');
    }

    setTime(level) {
        let timer = document.querySelector('#timer span');
        let seconds;
        if(level == 6) {
            seconds = 60;
        } else if(level == 8) {
            seconds = 120;
        } else {
            seconds = 300;
        }
        let toTimeString = function(seconds) {
            return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0].substring(3);
            }
        timer.innerText = toTimeString(seconds);
        let setTimer = function() {
            setInterval(function() {
                seconds--;
                if (seconds >= 0) {
                    timer.innerText = toTimeString(seconds);
                }
                if (seconds === 0) {
                    alert('Game Over');
                    clearInterval(seconds);
                }
            }, 1000)
        }
        document.getElementById('all-cards').addEventListener('click', setTimer, {once: true});
    }
}