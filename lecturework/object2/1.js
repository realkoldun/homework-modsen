const obj = {
    key_1: 1
}

Object.defineProperty(obj, "name", {
    value: "Anton",
    writable: false,
    enumerable: true,
    configurable: true
})
console.log(obj);
try {
    obj.name = "Dima";
} catch (error) {
    console.log(error)
}
console.log(obj);

