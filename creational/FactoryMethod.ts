// Firstly we have some vehicle that has a drive function

abstract class Vehicle {
    numberOfWheels: number;

    public abstract drive(): void;
}

// And we have the following two implementations of the vehicle

class Motorcycle extends Vehicle {
    constructor() {
        super();

        this.numberOfWheels = 2;
    }

    drive() {
        console.log(`Blasting off with ${this.numberOfWheels} wheels`);
    }
}

class Car extends Vehicle {
    constructor() {
        super();

        this.numberOfWheels = 4;
    }

    drive() {
        console.log(`Limping off with ${this.numberOfWheels} wheels`);
    }
}

// We then want to be able to have a factory to create vehicles
// But we want each factory type to be able to decide how it is implemented

abstract class VehicleFactory {
    public abstract makeVehicle(): Vehicle;

    someMakingVehicleFunction() {
        const vehicle = this.makeVehicle();
        vehicle.drive();
    }
}

// Here you see that we have two different implementations

class MotorcycleFactory extends VehicleFactory {
    public makeVehicle(): Vehicle {
        // Complex motorcycle building logic

        return new Motorcycle();
    }
}

class CarFactory extends VehicleFactory {
    public makeVehicle(): Vehicle {
        // Complex car building logic

        return new Car();
    }
}

// The different implementations use the same underlying functionality but have different ways to build vehicles

// We can then select the factory build at runtime or through some parameters

let vehicleRequired = 'Motorcycle';
let factory: VehicleFactory;


if (vehicleRequired === 'Motorcycle') {
    factory = new MotorcycleFactory();
} else {
    factory = new CarFactory();
}

const vehicle = factory.makeVehicle();
vehicle.drive();

factory.someMakingVehicleFunction();

// This is useful when you have want to make objects in different ways and want to delegate this decision to a child class
// It is also useful when you are not sure what type of object you require until runtime
