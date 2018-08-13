interface Cycle {
    numberOfWheels: number;
    fender: boolean;
    handlebars: boolean;
}

class Bicycle implements Cycle {
    private numberOfWheels: number;
    private fender: boolean;
    private handlebars: boolean;

    constructor() {
        this.numberOfWheels = 4;
        this.fender = true;
        this.handlebars = true;
    }
}
