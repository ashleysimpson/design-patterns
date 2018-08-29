// The mediator pattern allows objects to communicate through a common interface
// This means that the objects (colleagues) do not need to know about each others implementation, they simply use the mediator object

// The following example is of two sensors that need to communicate their statuses to each other
// First we setup the bases Mediator and Colleague interfaces

enum Status {
    RUNNING,
    STOPPED
}

interface Colleague {
    emitStatus(): void;
    setStatus(status: Status): void;
}

interface Mediator {
    broadcastStatus(name: string, status: Status): void;
}

// Then we specify the concrete classes

class Sensor implements Colleague {
    mediator: Mediator;
    status: Status = Status.STOPPED;
    name: string;

    constructor(name: string, mediator: Mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    emitStatus() {
        this.mediator.broadcastStatus(this.name, this.status);
    }

    setStatus(status: Status) {
        this.status = status;
    }
}

class SensorDock implements Mediator {
    broadcastStatus(name: string, status: Status) {
        if (status === Status.RUNNING) {
            console.log(`Sensor ${name} is RUNNING`);
        } else {
            console.log(`Sensor ${name} is STOPPED`);
        }
    }
}

// With this the sensors simply emit their status and call the broadcast method on the mediator
// We could add as many sensors as we want and the system will still work

const sensorDock = new SensorDock();

const lightSensor = new Sensor('light-sensor-1', sensorDock);
const soundSensor = new Sensor('sound-sensor-1', sensorDock);

lightSensor.setStatus(Status.RUNNING);
lightSensor.emitStatus();

soundSensor.setStatus(Status.RUNNING);
soundSensor.emitStatus();

const pressureSensor = new Sensor('pressure-sensor-1', sensorDock);

pressureSensor.emitStatus();
