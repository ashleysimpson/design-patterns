interface Cycle {
    numberOfWheels: number;
}

enum BicycleType {
    BICYCLE,
    UNICYCLE
}

class Bicycle implements Cycle {
    numberOfWheels: number;
    constructor() {
        this.numberOfWheels = 2;
    }
}

class Unicycle implements Cycle {
    numberOfWheels: number;

    constructor() {
        this.numberOfWheels = 1;
    }
}

// At this point you would normally instantiate the objects as follows

const bicycleWithoutFactory = new Bicycle();

if (bicycleWithoutFactory.numberOfWheels === 2) {
    console.log('We have a bicycle!');
}

// But with simple factory you create a class that makes the cycle for you

class CycleFactory {
    public static makeCycle(type: BicycleType): Cycle {
        if (type === BicycleType.UNICYCLE) {
            return new Unicycle();
        } else if (type === BicycleType.BICYCLE) {
            return new Bicycle();
        } else {
            // Default option
            return new Bicycle();
        }
    }
}

// Now we can create bicycles and unicycles through the factory without calling new on the bicycle or unicycle classes

const bicycleWithFactory = CycleFactory.makeCycle(BicycleType.BICYCLE);
const unicycleWithFactory = CycleFactory.makeCycle(BicycleType.UNICYCLE);

if (bicycleWithFactory.numberOfWheels === 2) {
    console.log('We have a bicycle!');
}

if (unicycleWithFactory.numberOfWheels === 1) {
    console.log('We have a unicycle');
}

// This is primarily useful when the instantiation logic is complex and you want to hide that complexity in the factory
// Consider using this in your code when you have lots of setup logic duplicated throughout your code
