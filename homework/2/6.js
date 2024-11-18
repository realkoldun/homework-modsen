const original = {
    name: "Alice",
    age: 20,
    address: {
        city: "New York",
        zip: 10001
    }
}

const copy = {...original};
copy.name = "Ann"
copy.address.city = "Los Angeles";
console.log(copy);
console.log(original);

const copy_2 = JSON.stringify(original);
console.log(copy_2);
const copy_3 = structuredClone(original)
console.log(copy_3);
Object.freeze(original);
Object.seal(copy);
Object.preventExtensions(copy_2);