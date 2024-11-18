
function removeKeys(obj, ...args) {
    const keys = args;
    keys.forEach(key => {
        delete obj[key];
    });
    return obj;
}

const obj = {
    a: "a",
    b: "b",
    c: "c",
    d: "d"
}
console.log(obj);
removeKeys(obj,"a", "b");
console.log(obj);