class GuessingGame {
    constructor() {}



    setRange(min, max) {
        this.l = min;
        this.r = max;
        this.c = Math.round((this.l + this.r) / 2);
    }

    guess() {            
        return this.c; 
    }

    lower() {        
        this.r = this.c;
        this.c = Math.round((this.l + this.r) / 2);
    }

    greater() {        
        this.l = this.c;
        this.c = Math.round((this.l + this.r) / 2);
    }
}

module.exports = GuessingGame;
