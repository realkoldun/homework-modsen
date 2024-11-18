function combineKeysAndValues(keys, values) {
    if(keys.length !== values.length) return {};
    const obj = {}
    for(let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    return obj;

}

const objKeys = ["key_1", "key_2", "key_3"];
const objValues = ["example", 1234, {
    key: 2,
    key_3: "a"
}];

console.log(combineKeysAndValues(objKeys, objValues));