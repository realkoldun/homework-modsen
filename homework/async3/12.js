function divideNumbers(a, b) {
    if(typeof a !== "number" || typeof b !== "number")
        throw new Error("Ожидались числа");
    if(b === 0) throw new Error("Нельзя делить на 0");
    return a / b;
}

console.log(divideNumbers(4, 2));
try {
    console.log(divideNumbers(4, "a"));
} catch (error) {
    console.error(error.message);
}
try {
    console.log(divideNumbers(4, 0));
} catch (error) {
    console.error(error.message);
}

