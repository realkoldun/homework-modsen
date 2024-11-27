function MathHelper () {}

MathHelper.add = function (a, b) { return a + b };
MathHelper.subtract = function (a, b) {return a - b};
MathHelper.multiply = function (a, b) {return a * b};

console.log(MathHelper.add(1 , 2));
console.log(MathHelper.subtract(1 , 2));
console.log(MathHelper.multiply(2 , 2));


class MathHelper_2 {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathHelper_2.add(1, 2));
console.log(MathHelper_2.subtract(1, 2));
console.log(MathHelper_2.multiply(2, 2));