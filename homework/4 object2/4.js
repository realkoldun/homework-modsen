function greet(element_1, element_2) {
    return `Hello, ${this.name}. Array is ${element_1}, ${element_2}`;
}
const person = { name: 'Alice' };



const bindFunc = greet.bind(person, 1, 2)
console.log(bindFunc())
const callFunc = greet.call(person, [1, 2], 2)
console.log(callFunc)
const applyFunc = greet.apply(person, [1, 2, 3])
console.log(applyFunc)

