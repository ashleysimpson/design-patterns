// The decorator pattern is simply added layers to an existing object to add new information or functionality
// The simple example is wrapping an object or decorating an object with another layer
// The basic approach is that all classes that take in a the base class are decorators that modify the original object

// The first step is to create some interface that the decorators and base class need to implement

interface Bicycle {
    price(): number;
    description(): string;
}

// Next implement the base class, this will not require the object to be passed in the constructor because it is the core

class BasicBicycle implements Bicycle {
    price() {
        return 500;
    }

    description() {
        return 'A basic bicycle';
    }
}

// Next implement all the decorators you want for your class
// They must take the base instance in the constructor so they can update the functionality

class BicycleWithFender implements Bicycle {
    bicycle: Bicycle;

    constructor(bicycle: Bicycle) {
        this.bicycle = bicycle;
    }

    price() {
        return this.bicycle.price() + 20;
    }

    description() {
        return this.bicycle.description() + ', with fender';
    }
}

class BicycleWithFrontRack implements Bicycle {
    bicycle: Bicycle;

    constructor(bicycle: Bicycle) {
        this.bicycle = bicycle;
    }

    price() {
        return this.bicycle.price() + 75;
    }

    description() {
        return this.bicycle.description() + ', with front rack';
    }
}

class BicycleWithBackRack implements Bicycle {
    bicycle: Bicycle;

    constructor(bicycle: Bicycle) {
        this.bicycle = bicycle;
    }

    price() {
        return this.bicycle.price() + 50;
    }

    description() {
        return this.bicycle.description() + ', with back rack';
    }
}

// Finally you can see the decorators in action, create the base instance and then apply the decorators however
// The interesting this is that you can apply the decorators in any order and not at all

const basicBicycle = new BasicBicycle();
basicBicycle.price();
basicBicycle.description();

const fullyLoadedBicycle = new BicycleWithFrontRack(new BicycleWithBackRack(new BicycleWithFender(new BasicBicycle())));
fullyLoadedBicycle.price();
fullyLoadedBicycle.description();
