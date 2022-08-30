class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
    }
    
    showStats() {
        console.log("name: " + this.name);
        console.log("resilience: " + this.resilience);
        console.log("power: " + this.power);
    }
}

class Effect extends Card {
    constructor(name, cost, text, magnitude, stat) {
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }

    play(target) {

        if (target instanceof Unit) {
            if (this.stat === "resilience") {
                target.resilience += this.magnitude;
            } else if (this.stat === "power") {
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Select a valid unit")
        }
    }
}

// --- Deck ---
// Units
// const redBeltNinja = new Unit("Red Belt Ninja", cost=3, power=3, resilience=4);
// const blackBeltNinja = new Unit("Black Belt Ninja", cost=4, power=5, resilience=4);

// Effect
// const hardAlgo = new Effect(name="Hard Algorithm", cost=2, text="Increase target's resilience by 3", stat="resilience", magnitude=3);
// const unhandledPromiseRejection = new Effect(name="Unhandled Promise Rejection", cost=1, text="Reduce target's resilience by 2", stat="resilience", magnitude=-2);
// const pairProgramming = new Effect(name="Pair Progrraming", cost=3, text="Increase target's power by 2", stat="power", magnitude=2);

// Scenario
const redBeltNinja = new Unit("Red Belt Ninja", cost=3, power=3, resilience=4);
// redBeltNinja.showStats();

const hardAlgo = new Effect(name="Hard Algorithm", cost=2, text="Increase target's resilience by 3", magnitude=3, stat="resilience");

hardAlgo.play(redBeltNinja);

redBeltNinja.showStats();

const blackBeltNinja = new Unit("Black Belt Ninja", cost=4, power=5, resilience=4);
const unhandledPromiseRejection = new Effect(name="Unhandled Promise Rejection", cost=1, text="Reduce target's resilience by 2", magnitude=-2,  stat="resilience");

unhandledPromiseRejection.play(redBeltNinja);
redBeltNinja.showStats();

const pairProgramming = new Effect(name="Pair Programming", cost=3, text="Increase target's power by 2", magnitude=2, stat="power");
pairProgramming.play(redBeltNinja)
redBeltNinja.showStats();

redBeltNinja.attack(blackBeltNinja);

blackBeltNinja.showStats();


