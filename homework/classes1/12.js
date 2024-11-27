function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`)
    }
}

const person1 = new Person("Лиза", 22);
const person2 = new Person("Ксюша", 20);
person1.greet();
person2.greet();