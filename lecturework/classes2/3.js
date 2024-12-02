class Person {
    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    get age() {
        return this.#age;
    }
    set age(age) {
        if(age > 0 && age < 200) this.#age = age;
        else throw new Error("Invalid age");
    }
}

const person = new Person("Anton", 55);
console.log(person.age);
try {
    person.age = -1;
} catch (error) {
    console.error(error.message);
}
