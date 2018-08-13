interface Cycle {
    numberOfWheels: number;
    hasFender: boolean;
    hasHandlebars: boolean;
}

class Bicycle implements Cycle {
    numberOfWheels: number;
    hasFender: boolean;
    hasHandlebars: boolean;

    constructor() {
        this.numberOfWheels = 2;
        this.hasFender = true;
        this.hasHandlebars = true;
    }

    getNumberOfWheels() {
        return this.numberOfWheels;
    }

    getHasFender() {
        return this.hasFender;
    }

    getHasHandleBars() {
        return this.hasHandlebars;
    }
}

// At this point you would normally instantiate the objects as follows

const bicycleWithoutFactory = new Bicycle();

bicycleWithoutFactory.getNumberOfWheels();
bicycleWithoutFactory.getHasFender();
bicycleWithoutFactory.getHasHandleBars();

// But with simple factory you create a class that makes the cycle for you

class BicycleFactory {
    public static makeBicycle(): Bicycle {
        return new Bicycle();
    }
}

// Now we can create bicycles and unicycles through the factory without calling new on the bicycle or unicycle classes

const bicycleWithFactory = BicycleFactory.makeBicycle();

bicycleWithFactory.getNumberOfWheels();
bicycleWithFactory.getHasFender();
bicycleWithFactory.getHasHandleBars();

// This is primarily useful when the instantiation logic is complex and you want to hide that complexity in the factory
// Consider using this in your code when you have lots of setup logic duplicated throughout your code
