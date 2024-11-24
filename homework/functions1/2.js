function* arrayGenerator(array) {
    for (let index in array)
        yield array[index];
}

const gen = arrayGenerator(['apple', 'banana', 'cherry']);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());