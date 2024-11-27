const Vehicle = {
    speed: 20,
    move: function () { console.log(`ТС движется со скоростью ${this.speed}`) }
};

const Car = {
    fuelLevel: 0,
    refuel: function (value) { this.fuelLevel += value }
};
Object.setPrototypeOf(Car, Vehicle);

const myCar = Object.create(Car);
console.log(myCar.fuelLevel);
myCar.refuel(20);
console.log(myCar.fuelLevel);
myCar.move();
