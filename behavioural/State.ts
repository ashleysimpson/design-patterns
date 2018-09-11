// The state design pattern allows you to add state to you objects
// The state you add is determined by the state object that is specified as some interface and then extended to provide the different functionality you require
// Consider a laser cannon that can be in three possible states, off, on and charging

// Firstly we create the interface for the laser state

interface LaserState {
    fire(): void;
}

// The we create the three different states of the laser and implement the fire methods

class OffLaserState implements LaserState {
    fire() {
        console.log('System is off and cannot fire');
    }
}

class ChargingLaserState implements LaserState {
    fire() {
        console.log('System is priming, please wait');
    }
}

class OnLaserState implements LaserState {
    fire() {
        console.log('FIREEEEE!!!!!');
    }
}

// Now we create the laser cannon and add the laser state object to it so when fire is called it will call the fire method of the state

class LaserCannon {
    laserState: LaserState;

    constructor() {
        this.laserState = new OffLaserState();
    }

    changeState(laserState: LaserState) {
        this.laserState = laserState;
    }

    fire() {
        this.laserState.fire();
    }
}

// Now we simply call fire on our laser cannon and the state will be determined by the state of the object instance

const chargingLaserState = new ChargingLaserState();
const onLaserState = new OnLaserState();

const laserCannon = new LaserCannon();

laserCannon.fire();

laserCannon.changeState(chargingLaserState);

laserCannon.fire();

laserCannon.changeState(onLaserState);

laserCannon.fire();

// You could take this one step further and allow the laser cannon to control the state internally depending on some criteria
