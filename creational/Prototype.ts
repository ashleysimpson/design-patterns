// The prototype design pattern is a simple one
// You essentially expose a clone method on the object that you want to make a prototype

interface Animal {
    dna: string;
    clone(): Animal;
}

class Sheep implements Animal {
    dna: string;

    constructor(dna: string) {
        this.dna = dna;
    }

    clone(): Animal {
        // Here you would implement the specific type of clone you want to make
        // This will only create a new instance and not a clone so you may want to make a deep copy in a real implementation
        return new Sheep(this.dna);
    }
}

// Then with this clone method you can instantiate a sheep with the method

const dolly = new Sheep('ATCGATCG');

const polly = dolly.clone();

if (dolly.dna === polly.dna) {
    console.log('The clone worked');
}

// You can even create a factory to perform the cloning for you

class CloneFactory {
    static makeClone(animal: Animal): Animal {
        return animal.clone();
    }
}

const jolly = CloneFactory.makeClone(polly);

if (dolly.dna === jolly.dna) {
    console.log('The clone worked again');
}
