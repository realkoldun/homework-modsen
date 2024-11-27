
const Vehicle = {
    type: "Автомобиль",
    move: function () {console.log(`${this.type} двигается`) },
}

const Car = Object.create(Vehicle);
Car.type = "Машина";
Car.move();