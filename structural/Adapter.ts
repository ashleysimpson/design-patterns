// The adapter pattern is useful when you have some existing class interactions but want to add a new class and not change the existing ones
// For example you have the following two classes where the outlet powers an appliance

enum OutletType {
    AMERICAN,
    BRITISH
}

class AmericanAppliance {
    outletType: OutletType;

    constructor() {
        this.outletType = OutletType.AMERICAN
    }

    pluginTwoProngedPlug(): void {
        console.log('plugin in the american plug');
    }
}

class Outlet {
    static power(americanPlug: AmericanAppliance): void {
        americanPlug.pluginTwoProngedPlug();
    }
}

const toaster = new AmericanAppliance();
Outlet.power(toaster);

// Now we have the following class and we want to be able to plugin to our existing outlet
// But if we do this there will be an incompatibility

class BritishAppliance {
    outletType: OutletType;

    constructor() {
        this.outletType = OutletType.BRITISH;
    }

    pluginThreeProngedPlug(): void {
        console.log('plugin the british plug');
    }
}

/*
Won't work

const sconeMaker = new BritishAppliance();
Outlet.power(sconeMaker);
*/

// So then we use the adapter pattern to create an adapter for our british appliances

class BritishApplianceAdapter extends AmericanAppliance {
    britishAppliance: BritishAppliance;

    constructor(britishAppliance: BritishAppliance) {
        super();
        this.outletType = OutletType.BRITISH;
        this.britishAppliance = britishAppliance;
    }

    pluginTwoProngedPlug(): void {
        this.britishAppliance.pluginThreeProngedPlug();
    }
}

// Now we can simply add an adapter to out appliance and use the outlet to power it

const sconeMaker = new BritishApplianceAdapter(new BritishAppliance());
Outlet.power(sconeMaker);

// This is very useful for when you want to add new classes with modified functionality but do not want to change the old system
