function createMultiplier(factor) {
    return function (value) {
        return value * factor;
    }
}

const multiplier = createMultiplier(2);
console.log(multiplier(3));
console.log(createMultiplier(4)(5));