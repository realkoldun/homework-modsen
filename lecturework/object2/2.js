function findMax() {
    if(arguments.length === 0) return undefined;
    return Array.from(arguments).reduce((max, e) => {
        if (e > max) return e;
    })
}
console.log(findMax(1, 2, 3));
console.log(findMax())