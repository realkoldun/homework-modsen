class Shape {
    #name;
    static #count = 0;
    constructor(name) {
        this.#name = name;
        Shape.#count++;
    };
    getArea() {
        console.log(`Area of ${this.#name}:`);
    };
    static get count() {
        return this.#count;
    }
}

class Rectangle extends Shape {
    rec_length;
    rec_width;
    constructor(name, rec_length, rec_width) {
        super(name);
        this.rec_length = rec_length;
        this.rec_width = rec_width;
    };
    getArea() {
        super.getArea();
        console.log(this.rec_length * this.rec_width);
    }
}
class Circle extends Shape {
    radius;
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    getArea() {
        super.getArea();
        console.log(Math.PI * this.radius**2);
    }
}

const rectangle = new Rectangle("rectangle", 2, 3);
const circle = new Circle("circle", 5);
rectangle.getArea();
circle.getArea();
console.log(Shape.count);
