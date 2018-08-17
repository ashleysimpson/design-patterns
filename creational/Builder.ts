// The builder pattern is used when you are starting to require lots of arguments in your constructor
// The problem is know as the telescoping constructor problem

interface IComputer {
    cpu: string;
    ram: number;
    hdd: number;
    ssd: number;
    screenType: string;
}

// Here is an example of this, the construtor would just get bigger the more features we add

class TelescopingConstructorComputer implements IComputer {
    public cpu: string;
    public ram: number;
    public hdd: number;
    public ssd: number;
    public screenType: string;

    constructor(cpu: string, ram: number, hdd: number, ssd: number, screenType: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.hdd = hdd;
        this.ssd = ssd;
        this.screenType = screenType;
    }
}

new TelescopingConstructorComputer('3.4 Ghz i7', 16, 2000, 500, 'HD');

// In place of this we now create computer build object that can take each of these parameters

class ComputerBuilder implements IComputer {
    public cpu: string;
    public ram: number;
    public hdd: number;
    public ssd: number;
    public screenType: string;

    setCpu(cpu: string) {
        this.cpu = cpu;
        return this;
    }

    setRam(ram: number) {
        this.ram = ram;
        return this;
    }

    setHdd(hdd: number) {
        this.hdd = hdd;
        return this;
    }

    setSsd(ssd: number) {
        this.ssd = ssd;
        return this;
    }

    setScreenType(screenType: string) {
        this.screenType = screenType;
        return this;
    }
}

// This object will be extended when we want to add more options to the computer class

// We then create the computer class that takes a computer builder in the constructor

class Computer implements IComputer {
    public cpu: string;
    public ram: number;
    public hdd: number;
    public ssd: number;
    public screenType: string;

    constructor(builder: ComputerBuilder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.hdd = builder.hdd;
        this.ssd = builder.ssd;
        this.screenType = builder.screenType
    }
}

// With this we have now dealt with the telescoping constructor

// All we have to do us create the build and set the options and then build the computer with the computer builder

const computerBuilder = new ComputerBuilder();

computerBuilder
    .setCpu('3.4 Ghz i7')
    .setRam(16)
    .setHdd(2000)
    .setSsd(500)
    .setScreenType('HD');

const computer = new Computer(computerBuilder);

console.log(`
    My new computer has the following specs:
    
    CPU:            ${computer.cpu}
    RAM:            ${computer.ram}
    HDD:            ${computer.hdd}
    SSD:            ${computer.ssd}
    SCREEN TYPE:    ${computer.screenType}
`);
