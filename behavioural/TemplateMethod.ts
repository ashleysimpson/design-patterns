// The template method is a design pattern that allows us to define the steps of algorithm without having to specify the implementation
// This is useful when you need functions to be run in a certain order but you don't necessarily care about how the functions are implemented
// Consider a sculptor that is making humanoid statues from the ground up, legs, body, arms then head

// The base class would expose a build function (the template method) that will specify the order of function calls and the function themselves will be implemented in the child class

abstract class Sculptor {
    build() {
        this.addLegs();
        this.addBody();
        this.addArms();
        this.addHead();
    }

    abstract addLegs(): void;
    abstract addBody(): void;
    abstract addArms(): void;
    abstract addHead(): void;
}

// Now we create the actual implementations of the sculptors

class WoodSculptor extends Sculptor {
    addLegs() {
        console.log('Carve the legs from wood and add them');
    }

    addBody() {
        console.log('Carve the body from wood and add it');
    }

    addArms() {
        console.log('Carve the arms from wood and add them');
    }

    addHead() {
        console.log('Carve the head from woody and add it');
    }
}

class IceSculptor extends Sculptor {
    addLegs() {
        console.log('Carve the legs from ice and add them');
    }

    addBody() {
        console.log('Carve the body from ice and add it');
    }

    addArms() {
        console.log('Carve the arms from ice and add them');
    }

    addHead() {
        console.log('Carve the head from ice and add it');
    }
}

// With this we can simply call the build method on either implementation and be sure that the sculpture will be build in the correct way (with the correct algorithm)

const woodSculptor = new WoodSculptor();
const iceSculptor = new IceSculptor();

woodSculptor.build();
iceSculptor.build();
