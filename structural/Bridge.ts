// The bridge structural design pattern is useful when you have some class that you want to have different variations of
// Without the pattern if you had the following it could get quite cumbersome

interface BakingProduct {
    texture: string;
}

class Bread implements BakingProduct {
    texture: string;

    constructor() {
        this.texture = 'bready';
    }
}

class Cake implements BakingProduct {
    texture: string;

    constructor() {
        this.texture = 'cakey';
    }
}

// Now consider that you want to make chocolate and vanilla versions of these classes
// You would do the following:

class ChocolateBread extends Bread {
    getFlavour() {
        console.log(`${this.texture} and chocolatey`);
    }
}

class ChocolateCake extends Cake {
    getFlavour() {
        console.log(`${this.texture} and chocolatey`);
    }
}

class VanillaBread extends Bread {
    getFlavour() {
        console.log(`${this.texture} and vanillary`);
    }
}

class VanillaCake extends Bread {
    getFlavour() {
        console.log(`${this.texture} and vanillary`);
    }
}

const chocolateBread = new ChocolateBread();
const chocolateCake = new ChocolateCake();
const vanillaBread = new VanillaBread();
const vanillaCake = new VanillaCake();

chocolateBread.getFlavour();
chocolateCake.getFlavour();
vanillaBread.getFlavour();
vanillaCake.getFlavour();

// You can see that this is repetitive and will not scale well over time (there are lots of baking products and types)

// The bridge is the pattern that allows you to create types and themes to make this more extendable
// You would organize everything like so to conform to the bridge pattern

interface Theme {
    getFlavour(): string;
}

class ChocolateTheme implements Theme {
    getFlavour() {
        return 'chocolatey';
    }
}

class VanillaTheme implements Theme {
    getFlavour() {
        return 'vanillary';
    }
}

class Pastry implements BakingProduct {
    texture: string;
    flavour: string;

    constructor(theme: Theme) {
        this.texture = 'bready';
        this.flavour = theme.getFlavour();
    }

    getFlavour() {
        console.log(`${this.texture} and ${this.flavour}`);
    }
}

class Pie implements BakingProduct {
    texture: string;
    flavour: string;

    constructor(theme: Theme) {
        this.texture = 'cakey';
        this.flavour = theme.getFlavour();
    }

    getFlavour() {
        console.log(`${this.texture} and ${this.flavour}`);
    }
}

// Now you can easily add more themes and more baking products and not require lots of duplication

const chocolatePastry = new Pastry(new ChocolateTheme());
const chocolatePie = new Pastry(new ChocolateTheme());
const vanillaPastry = new Pie(new VanillaTheme());
const vanillaPie = new Pie(new VanillaTheme());

chocolatePastry.getFlavour();
chocolatePie.getFlavour();
vanillaPastry.getFlavour();
vanillaPie.getFlavour();
