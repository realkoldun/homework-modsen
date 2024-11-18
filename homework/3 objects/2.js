const car =  {
    mark: "Lada",
    isTrue: true
};

Object.defineProperty(car, "price", {
    enumerable: false
});
car.price = 20000;
console.log(car);