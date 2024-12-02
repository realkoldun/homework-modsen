class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
        return this.#name;
    }
}

class Student extends Person {
    #grade;
    constructor(name, grade) {
        super(name);
        this.#grade = grade;
    }
    get grade() {
        return this.#grade;
    }
    set grade(grade) {
        if(typeof grade === "number" && grade > 0 && grade <= 10)
            this.#grade = grade;
        else throw new Error("Invalid grade");
    }
}

const person = new Person("Ann");
console.log(person.name);
console.log(person.name = "Dmitry");

const student = new Student("Anton", 4);
console.log(student.grade);
student.grade = 5;
console.log(student.grade);
try {
    student.grade = -1;
} catch (error) {
    console.error(error.message);
}

