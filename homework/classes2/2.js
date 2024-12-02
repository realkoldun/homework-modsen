class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get person_name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
}

const person = new Person("Dima", 22);
console.log(person.person_name, person.age);