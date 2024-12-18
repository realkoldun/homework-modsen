function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = {name: "Alice"}

greet.myBind = (object, greeting) => {
    return function () {
        object.greet = greet;
        object.greet(greeting);
        delete object.greet;
    }
}

const boundGreet = greet.myBind(person, "Hello");
boundGreet();
console.log(person);