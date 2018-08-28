// The chain of responsibility design pattern is a simple one where you create a hierarchy of handlers for request
// The idea is that you go through this chain until you find the handler that can satisfy the request

// Consider the following case where you have multiple shipping providers
// To get the best rate you want to go with the provider that gives you the best rate, and let's say the rates depend on the weight
// You would then create the following class:

class ShippingProvider {
    successor: ShippingProvider;
    maxWeight: number;
    name: string;

    constructor(maxWeight: number, name: string) {
        this.maxWeight = maxWeight;
        this.name = name;
    }

    setNext(successor: ShippingProvider) {
        this.successor = successor;
    }

    ship(weight: number) {
        if (this.canShip(weight)) {
            console.log(`Shipping with ${this.name}`);
        } else if (this.successor) {
            this.successor.ship(weight);
        } else {
            console.log('Cannot ship...');
        }
    }

    canShip(weight: number) {
        return weight < this.maxWeight;
    }
}

// This object conforms to the chain of responsibility design pattern
// Now we can setup an instance hierarchy like so:

const canadaPost = new ShippingProvider(100, 'Canada Post');
const purolator = new ShippingProvider(250, 'Purolator');
const fedex = new ShippingProvider(500, 'Fedex');

canadaPost.setNext(purolator);
purolator.setNext(fedex);

// And we can simply call ship on the canadaPost shipping provider and the actual shipping provider will be used based on the weight

canadaPost.ship(50); // --> Canada Post
canadaPost.ship(200); // --> Purolator
canadaPost.ship(400); // --> Fedex
canadaPost.ship(999); // --> No one :(
