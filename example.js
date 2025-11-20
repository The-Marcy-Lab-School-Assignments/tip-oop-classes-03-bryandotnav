//coding an example of polymorphism by building classes
//you must use at least 30 lines of code
class Ball {
    constructor(sport){
        this.sport = sport;
    }
    Played(){
        return `this ball is usually used for ${this.sport}`
    }
}
class Baseball extends Ball {
    constructor(sport, ball, player){
        super(sport);
        this.ball = ball;
        this.player = player;
    }
    played(){
        return `${this.ball} is usually thrown by a ${this.player} in ${this.sport}`
    }
}
class Football extends Ball {
    constructor(sport, ball){
        super(sport);
        this.ball = ball;
    }
    played(){
        return `${this.ball} is usually used for ${this.sport}`
    }
}
class Futbol extends Ball {
    constructor(sport, ball){
        super(sport);
        this.ball = ball;
    }
    played(){
        return `this ${this.ball} is usually kicked for ${this.sport}`
    }
}
const bb1 = new Baseball("baseball", "baseball", "pitcher");
const fb1 = new Football("football", "football");
const sc1 = new Futbol("futbol, kicker")
console.log(bb1.played())
console.log(fb1.played())
console.log(sc1.played())