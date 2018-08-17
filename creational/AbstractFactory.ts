// Abstract factory takes it one level further and can now create factories that build objects that are related

// Firstly we have a vehicle interface

interface Vehicle {
    isBroken: boolean;

    breakDown(): void;
    fix(specialKnowledge: string): void;
}

// We implement the type different types of Vehicles, Cars and Motorcycles
// These vehicle implementations can only be fixed by clients that have the special knowledge (or a mechanic that has it)

class Car implements Vehicle {
    isBroken = false;

    breakDown() {
        this.isBroken = true;
    }

    fix(specialKnowledge: string) {
        if (specialKnowledge === 'can fix cars') {
            this.isBroken = false;
        }
    }
}

class Motorcycle implements Vehicle {
    isBroken = false;

    breakDown() {
        this.isBroken = true;
    }

    fix(specialKnowledge: string) {
        if (specialKnowledge === 'can fix motorcycles') {
            this.isBroken = false;
        }
    }
}

// We then have a mechanic that can fix vehicles and return them

interface Mechanic {
    specialKnowledge: String;
    fixVehicle(vehicle: Vehicle): void;
}

// With this we implement Car mechanics and Motorcycle mechanics that we can use to fix the Vehicles

class CarMechanic implements Mechanic {
    specialKnowledge = 'can fix cars';

    fixVehicle(vehicle: Vehicle) {
        vehicle.fix(this.specialKnowledge);
    }
}

class MotorcycleMechanic implements Mechanic {
    specialKnowledge = 'can fix motorcycles';

    fixVehicle(vehicle: Vehicle) {
        vehicle.fix(this.specialKnowledge);
    }
}

// This is where the abstract factory comes in
// We do not want a car mechanic to fix a car and vice versa so we use the abstract factory pattern

// Firstly we create a vehicle factory that create both Vehicles and Mechanics

interface VehicleFactory {
    makeVehicle(): Vehicle;
    makeMechanic(): Mechanic;
}

// Then we create the specialized factories that will create the specific takes of vehicles and mechanics

class CarFactory implements VehicleFactory {
    makeVehicle(): Vehicle {
        return new Car();
    }

    makeMechanic(): Mechanic {
        return new CarMechanic();
    }
}

class MotorcycleFactory implements VehicleFactory {
    makeVehicle(): Vehicle {
        return new Motorcycle();
    }

    makeMechanic(): Mechanic {
        return new MotorcycleMechanic();
    }
}

// After all this we can use the abstract factory pattern to be sure we always create the objects that are related

const choiceOfVehicleFactory = 'Motorcycle';
let vehicleFactory;

if (choiceOfVehicleFactory === 'Motorcycle') {
    vehicleFactory = new MotorcycleFactory();
} else {
    vehicleFactory = new CarFactory();
}

const vehicle = vehicleFactory.makeVehicle();
vehicle.breakDown();

const mechanic = vehicleFactory.makeMechanic();
mechanic.fixVehicle(vehicle);

// You would use this when you want to be sure that you factory can build different objects that are related
// You also can decide how the objects are created like in the factory method
// Finally you can decide at runtime which type of factory you require
