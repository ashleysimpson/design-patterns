// The visitor design pattern is one that allows you to add new functionality to existing classes without changing the original class
// You simply have to provide an accept function that accepts the visitor object that provides the new functionality
// Then in the visitor provide a visitor function that the original class can call to execute new functionality
// This pattern allows you to conform to the open/closed principle

// Consider a bunch of zoo animals that have a bunch of actions
// First you create your animal and animalVisitor interfaces

interface Animal {
    accept(animalVisitor: AnimalVisitor): void;
}

interface AnimalVisitor {
    visit(animal: Animal): void;
}

// Now we create the concrete classes that implement the accept function
// We also make sure to call the visit function of the animal visitor that is passed in

class Monkey implements Animal {
    accept(monkeyVisitor: AnimalVisitor) {
        monkeyVisitor.visit(this);
    }
}

class Lion implements Animal {
    accept(lionVisitor: AnimalVisitor) {
        lionVisitor.visit(this);
    }
}

// Now the magic happens, we implement the visit function on the visitor with whatever functionality we want, for instance add a jump function

class MonkeyJump implements AnimalVisitor {
    visit(monkey: Animal) {
        console.log('Monkey jump!');
    }
}

class LionJump implements AnimalVisitor {
    visit(lion: Animal) {
        console.log('Lion pounce!');
    }
}

// What makes this pattern useful is that we can continue to add new functions by creating new visitors, now a speak function

class MonkeySpeak implements AnimalVisitor {
    visit(monkey: Animal) {
        console.log('Oo oo ah ah!');
    }
}

class LionSpeak implements AnimalVisitor {
    visit(lion: Animal) {
        console.log('Rooooaarrr!');
    }
}

// Now we simply create our concrete classes and then provide the visitors to the accept function

const monkey = new Monkey();
const lion = new Lion();

const monkeyJump = new MonkeyJump();
const monkeySpeak = new MonkeySpeak();
const lionJump = new LionJump();
const lionSpeak = new LionSpeak();

monkey.accept(monkeyJump);
monkey.accept(monkeySpeak);

lion.accept(lionJump);
lion.accept(lionSpeak);

// Our monkeys and lions can jump and speak without making any changes to the original classes
