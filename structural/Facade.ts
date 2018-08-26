// The facade design pattern is a way of making a complex system easier to use for a client
// When you think of a car, the internals are very complex but the user interface (wheel, gas peddle, key ignition) are easy to use
// The facade pattern would be an example of this simple interface for a user

// Take the following example of an engine

class Engine {
    isElectricityRunning: boolean = false;
    isFuelRunning: boolean = false;
    isEngineRunning: boolean = false;

    primeStarter() {
        console.log('Priming starter');
        this.isElectricityRunning = true;
    }

    injectFuel() {
        console.log('Injecting fuel into engine');
        this.isFuelRunning = true;
    }

    crankEngine() {
        console.log('Spark plug firing');
        if (this.isElectricityRunning && this.isFuelRunning) {
            this.isEngineRunning = true
        }
    }

    cutOutEngine() {
        this.isElectricityRunning = false;
        this.isFuelRunning = false;
        this.isEngineRunning = false;
    }
}

// Now let's say we want to start out engine, the engine would require us to always run the following steps

const engine = new Engine();

// Start the engine
engine.primeStarter();
engine.injectFuel();
engine.crankEngine();

// Stop the engine
engine.cutOutEngine();

// If we missed a step then we wouldn't properly start our engine

// To make this simpler for the client we add the engine facade, or we could call it the car

class Car {
    engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    start() {
        this.engine.primeStarter();
        this.engine.injectFuel();
        this.engine.crankEngine();
    }

    stop() {
        this.engine.cutOutEngine();
    }
}

// With this the client can simply start and stop the car as follows and never have to worry about running the necessary methods

const car = new Car(engine);

car.start();
car.stop();
