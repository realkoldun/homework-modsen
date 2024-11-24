"use strict"
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 22 }
];

const filterAge = (people, age) => people.filter(person => person.age >= age);
console.log(filterAge(users, 18));