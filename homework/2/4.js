const human = {
    name: "Anton",
    age: 20,
    address: {
        city: "Vitebsk",
        street: "Chakolova",
        houseNumber: 7
    },
    hobbies: [
        "Proggramming",
        "Football"
    ]
}

const newHuman = Object.create(human);
newHuman.work = "prog";
newHuman.isEmployed = true;
console.log(newHuman);
for(key in newHuman)
    console.log(newHuman.hasOwnProperty(key) ? newHuman[key]: "")