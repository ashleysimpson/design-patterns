// The observer pattern is essentially a publish and subscribe pattern for objects
// You have an observer class that will be subscribed to some observable class and any changes in the observable class will be published to all registered observers

// Firstly we create the interface for the Observer and Observable types

interface Observer {
    notify(message: string): void;
}

interface Observable {
    subscribe(observer: Observer): void;
    publish(message: string): void
}

// Now we can create the concrete implementation
// The example will be of users that subscribe to a weather service that will notify them with weather updates

class User implements Observer {
    notify(message: string) {
        console.log(message);
    }
}

class WeatherService implements Observable {
    subscribers: Observer[] = [];

    subscribe(observer: Observer) {
        this.subscribers.push(observer);
    }

    publish(message: string) {
        this.subscribers.forEach((subscriber) => {
            subscriber.notify(message);
        });
    }
}

// With this we can now create a weather service and subscribe users to it
// Any message the weather service publishes will be sent to all subscribers of the service

const weatherService = new WeatherService();

const ashley = new User();
const erin = new User();

weatherService.subscribe(ashley);
weatherService.subscribe(erin);

weatherService.publish('It\'s going to rain today, make sure to bring your umbrellas!');
