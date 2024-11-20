function filterEvens() {
    return Array.from(arguments).filter(e => e % 2 === 0);
}

console.log(filterEvens(1, 2, 3, 4))