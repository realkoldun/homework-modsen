class Bird {
    fly() {
        console.log("Птица летит");
    }
}
class Duck extends Bird {}
class Penguin extends Bird {
    fly() {
        console.log("Пингвины не летают");
    }
}

const bird = [
    new Duck(),
    new Penguin()
]
bird.forEach(bird => bird.fly());