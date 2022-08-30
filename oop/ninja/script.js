class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        this.sayName();
        console.log(this.health);
        console.log(this.strength);
        console.log(this.speed);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom, health=200, speed=10, strength=10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }

    speakWisdom() {
        this.drinkSake();
        console.log("yo");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();


// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();