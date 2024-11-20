function sum() {
    return Array.from(arguments).reduce((sum, e) => {
        return sum + e
    }, 0)
}

console.log(sum(1, 2, 3, 4));