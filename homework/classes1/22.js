function Pet(name, age) {
    this.name = name;
    this.age = age;
    this.describe = function () {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
    this.isOld = function () {
        return this.age > 10;
    }
}
//Dog
function Dog(name, age, breed) {
    Pet.call(this, name, age);
    this.breed = breed;
}
Object.setPrototypeOf(Dog, Pet);
Dog.prototype.constructor = Dog;
Dog.prototype.describe = function () {
    console.log(`Имя: ${this.name}, Возраст: ${this.age}, Порода: ${this.breed}`);
};
Dog.prototype.bark = function () {
    console.log(`${this.name} лает!`);
}
Dog.prototype.fetch = function (item) {
    console.log(`${this.name} приносит ${item}`);
}
//Dog example
console.log("Dog Example");

const dog = new Dog("Бобик", 4, "шпиц");
console.log(dog.isOld());
dog.fetch("мяч");
dog.describe();
dog.bark();
console.log();

//Guard Dog
function GuardDog(name, age, breed, trainingLevel) {
    Dog.call(this, name, age, breed);
    this.trainingLevel = trainingLevel;
}
Object.setPrototypeOf(GuardDog, Dog);
GuardDog.prototype.constructor = GuardDog;
GuardDog.prototype.guard = function () {console.log(`${this.name} охраняет территорию на уровне ${this.trainingLevel}`)}
GuardDog.prototype.bark = function () {
    if(this.trainingLevel > 5) console.log(`${this.name} лает громко`)
    else console.log(`${this.name} лает!`)
}
//Guard Dog example
console.log("Guard Dog example:");
const guardDog = new GuardDog("Шарик", 11, "дворняга", 7);
console.log(guardDog.isOld());
guardDog.bark();
guardDog.guard();
guardDog.describe(); //метод describe должен вызываться у Dog.prototype,
                     // но вызывается у Pet.prototype из-за того
                     // что я переопределил этот метод вне конструктора
console.log();

//Compare
Pet.compareAges = function (pet1, pet2) {
    if(pet1.age > pet2.age) return pet1;
    else return pet2;
}
//Compare example
console.log("Pet compare example");
console.log(Pet.compareAges(dog, guardDog).name)


