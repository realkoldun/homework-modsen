function sum() {
    return Array.from(arguments).reduce((sum, e) => {
        return sum + e
    }, 0);
}

function sum_spread(...args) {
    return args.reduce((sum, e) => {
        return sum + e
    }, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum_spread(1, 2, 3));