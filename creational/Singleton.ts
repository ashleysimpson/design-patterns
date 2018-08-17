// The singleton is a basic design pattern that focuses on the creation of objects
// Specifically the pattern is used when you want only one instance of an object created by a class

class MasterComputer {
    private computerId: number;
    private static instance: MasterComputer;

    private static MasterComputer() {

    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new MasterComputer();
            this.instance.computerId = 1;
        }

        return this.instance;
    }

    public getComputerId() {
        return this.computerId;
    }
}

// Now when we get an instance of MasterComputer we are sure to get the same instance each time

const masterComputer1 = MasterComputer.getInstance();
const masterComputer2 = MasterComputer.getInstance();

if (masterComputer1.getComputerId() === masterComputer2.getComputerId()) {
    console.log('They are the same instance!!');
}

// One thing to be cautious of is not overusing this pattern
// Overuse can lead to dependencies on state within your code and this leads to some nasty bugs
