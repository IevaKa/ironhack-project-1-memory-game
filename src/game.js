class Game {
    constructor() {
        this.chosenCards = [];
        this.pairsCopy = [];
        this.pairs = 3;
        this.reset();
    }

    reset() {
        this.chosenCards = [];
        this.pairsCopy = [];
        pairs.forEach(e => this.pairsCopy.push(e));
        for(let i = 0; i < this.pairs; i++) {
            let randomIndex = Math.floor(Math.random() * this.pairsCopy.length);
            let randomPair = this.pairsCopy[randomIndex];
            this.chosenCards.push(randomPair);
            this.pairsCopy.splice(randomIndex,1);
        }
    }
}