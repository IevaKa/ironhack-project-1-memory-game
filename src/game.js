class Game {
    constructor(level) {
        this.cards = [];
        this.pairsNo = level || 6;
        this.reset();
    }

    reset() {
        this.randomizePairs();
        this.selectPairs();
        this.pushCardsToDom();    
    }

    randomizePairs() {
        for(let i = 0; i < pairs.length; i++) {
            pairs[i].randomNo = Math.random();
        }
        pairs.sort((a, b) => a.randomNo - b.randomNo).slice(0, this.pairsNo);
    }
    // 1. Pick random 3 elements of the array
    // 2. Create Card objects, assign them the word, and pair number
    selectPairs() {
        this.cards = [];
        // looping over the pairs in the game
        for(let p = 0; p < this.pairsNo; p++) {
            // looping over a pair
            for(let i = 0; i < 2; i++) {
                let card = new Card();
                card.pairNo = Object.keys(pairs[p])[0];
                card.word = Object.values(pairs[p])[0].split(' ')[i];
                this.cards.push(card);
            }
        }
    } 
    // 1. Sort cards array randomly, and manipulate DOM.
    pushCardsToDom() {   
        this.cards.sort((a, b) => a.randomNo - b.randomNo); 
        let divCards = '';
        this.cards.forEach(function(card) {
            divCards += `<div class = "card">${card.word}</div>`;
        });
        document.querySelector('#all-cards').innerHTML = divCards; 
    }
}