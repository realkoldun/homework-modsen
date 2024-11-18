function deepCopy(obj) {
    if(obj !== null && typeof obj !== "object") {
        return obj;
    }
    const newObj = {};
    const keys = Object.keys(obj);
    keys.forEach(key => {
        newObj[key] = deepCopy(obj[key]);
    });
    return newObj;
}

const obj = {
    key_1: 1,
    key_2: "2",
    key_3: {
        key_31: 5,
        key_32: {
            key_321: "5",
            key_322: 100
        },
        key_33: "lo"
    }
};
const newObj = deepCopy(obj);
newObj.key_3.key_32.key_322 = 2000;

console.log(obj);
console.log(newObj);