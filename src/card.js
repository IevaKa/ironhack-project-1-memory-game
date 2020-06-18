class Card {
    constructor(level) {
        this.word;
        this.pairNo;
        this.randomNo = Math.random();   
        this.classCard; 
        this.setClass();
    }
    setClass() {
        if(level == 6) {
            this.classCard = "card-container-1";
        } else if(level == 8) {
            this.classCard = "card-container-2";
        } else {
            this.classCard = "card-container-3";
        }
    }
}