// The command design pattern is a way of encapsulating actions in objects
// The idea is that the command object contains all details about what needs to be executed
// There is also a client (that issues the command), the invoker that takes the command, and the receiver that performs the command
// The main idea behind the pattern is to completely decouple the client and receiver

// Take the following example of a restaurant
// We have the chef (receiver), waiter (invoker), order (command), and the customer (client)

class Chef {
    private makeEggs() {
        console.log('some delicious eggs');
    }

    private makeBacon() {
        console.log('some delicious bacon');
    }

    private makeToast() {
        console.log('some delicious toast');
    }

    makeSimpleBreakfast() {
        this.makeToast();
    }

    makeBreakfast() {
        this.makeToast();
        this.makeEggs();
        this.makeBacon();
    }
}

interface Command {
    execute()
}

class OrderSimpleBreakfast implements Command {
    chef: Chef;

    constructor(chef: Chef) {
        this.chef = chef;
    }

    execute() {
        this.chef.makeSimpleBreakfast();
    }
}

class OrderBreakfast implements Command {
    chef: Chef;

    constructor(chef: Chef) {
        this.chef = chef;
    }

    execute() {
        this.chef.makeBreakfast();
    }
}

class Waiter {
    submit(command: Command) {
        command.execute();
    }
}

class Customer {
    waiter: Waiter;

    constructor(waiter: Waiter) {
        this.waiter = waiter;
    }

    placeOrder(command: Command) {
        this.waiter.submit(command);
    }
}

// Note: The customer is not necessary but I added it to complete the example, you could simply submit commands directly with the waiter

// However with this example you would now issue commands to the chef in the following manner

const chef = new Chef();

const orderSimpleBreakfast = new OrderSimpleBreakfast(chef);
const orderBreakfast = new OrderBreakfast(chef);

const waiter = new Waiter();

const customer = new Customer(waiter);

customer.placeOrder(orderSimpleBreakfast);
customer.placeOrder(orderBreakfast);

// You can now see that the client has no clue about how the receiver operates, it just passes the commands to the invoker and then the magic happens
