class Animal {
    #name;
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    doSomething() {
        console.log(`Animal ${this.#name} doing something`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    doSomething() {
        console.log(`Dog ${this.name} is barking`);
    }
}

const animal = new Animal("cat");
animal.doSomething();
const dog = new Dog("Sharik");
dog.doSomething();