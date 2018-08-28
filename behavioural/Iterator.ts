// This design pattern focuses on creating collections of containers that are iterable in some way
// The collection could be in order or simply just a list of items that are added to and then iterated over in some way

// Consider a cd changer in an old car that can accept cds
// The CD is the container and the CD player contains the iterable container collection

class CD {
    name: string;

    constructor(name) {
        this.name = name;
    }
}

class CDPlayer {
    cds: CD[];
    currentCD: number;

    insertCD(cd: CD) {
        this.cds.push(cd);

        if (this.cds.length === 1) {
            this.currentCD = 0;
        }
    }

    nextCD() {
        this.currentCD = (this.currentCD + 1) % this.cds.length;
    }

    previousCD() {
        this.currentCD--;

        if (this.currentCD === -1) {
            this.currentCD = this.cds.length - 1;
        }
    }

    getCDName() {
        if (this.cds.length === 0) {
            console.log('No cds :(');

            return;
        }

        console.log(`Current CD name: ${this.cds[this.currentCD].name}`);
    }
}

// Now we create the concrete example:

const gorillaz = new CD('Gorillaz');
const eminem = new CD('Eminem');
const glassAnimals = new CD('Glass Animals');
const ohWonder = new CD('Oh Wonder');

const cdPlayer = new CDPlayer();

cdPlayer.insertCD(gorillaz);
cdPlayer.insertCD(eminem);
cdPlayer.insertCD(glassAnimals);
cdPlayer.insertCD(ohWonder);

cdPlayer.getCDName();

cdPlayer.nextCD();
cdPlayer.nextCD();
cdPlayer.getCDName();

cdPlayer.previousCD();
cdPlayer.getCDName();

// We now simply interact with the cdPlayer which is the iterator and the underlying containers will be accessible via the iterator
// We could now build a simple search algorithm by using the iterator and not require any interaction with the container
