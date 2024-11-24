const fibonacci = function fibFunc(value) {
    if(value <= 0) return 0;
    if(value < 2) return 1;
    return fibFunc(value - 1) + fibFunc(value - 2);
}

console.log(fibonacci(10));