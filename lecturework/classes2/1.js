Car.carsCount = 0;
function Car(model, speed=60) {
    Car.carsCount++;
    this.model = model;
    this.speed = speed;
    this.increaseSpeed = function (value) {
        this.speed += value;
    }
}
Car.prototype.getSpeed = function () {
    return this.speed;
};
Car.isCar = function (obj) {
    return obj instanceof Car;
}
Car.printCarsCount = function () {
    console.log(Car.carsCount);
}
const car = new Car("mazda");
const car2 = new Car("mazda");
const car3 = new Car("mazda");
car3.increaseSpeed(20);
console.log(car3.getSpeed());
console.log(Car.isCar(car));
Car.printCarsCount();


