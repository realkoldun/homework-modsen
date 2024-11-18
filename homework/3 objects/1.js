function countNumericNumber(obj) {
    const objValues = Object.values(obj);
    const result = objValues.filter(values => typeof values === "number");
    return result.length;
}

const obj = {
    obj_key_1: 1,
    obj_key_2: "error",
    obj_key_3: 3
};

console.log(countNumericNumber(obj));