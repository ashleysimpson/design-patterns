// The flyweight design pattern is a type of caching pattern
// The idea is that you have some function that is expensive to run, so when you run it you want to make sure the result is kept for further requests
// For example consider the act of brewing coffee in a coffee shop, if you had to make a single cup for each customer it would be difficult to keep up with demand at a popular place
// You therefore brew lots of coffee and save it for other customers

class CoffeeCup {
    sipsLeft: number = 10;

    sipCoffee() {
        if (!this.sipsLeft) {
            console.log('All done :(');
        }

        this.sipsLeft -= 1;

        console.log('Umm delicous coffee...');
    }
}

class CoffeeMachine {
    coffeeCupsLeft: number = 5;

    pourCoffee(): CoffeeCup {
        if (!this.coffeeCupsLeft) {
            console.log('Out of coffee...');

            return null;
        }

        console.log('Pouring you some coffee!');

        return new CoffeeCup();
    }

    brewCoffee() {
        console.log('Brewing some coffee, a lot of work!');

        this.coffeeCupsLeft = 5;
    }
}

class Barista {
    coffeeMachine: CoffeeMachine;

    constructor(coffeeMachine: CoffeeMachine) {
        this.coffeeMachine = coffeeMachine;
    }

    serveClient() {
        if (!this.coffeeMachine.coffeeCupsLeft) {
            this.coffeeMachine.brewCoffee();
        }

        console.log('Here\'s your coffee miss/sir!');

        return this.coffeeMachine.pourCoffee();
    }
}

// Now when the barista serves coffees they will only need to brew more coffee if they run out, not every-time they serve a client

const coffeeMachine = new CoffeeMachine();
const barista = new Barista(coffeeMachine);

const client1 = barista.serveClient();
const client2 = barista.serveClient();

// And the clients can enjoy their delicious coffee!

client1.sipCoffee();
client2.sipCoffee();
