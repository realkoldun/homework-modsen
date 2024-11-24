const user = {
    name: "Dima",
    sayHi() {
        console.log(`${this.name}`);
    }
};
const admin = {
    name: "Denis"
};

user.sayHi.call(admin);

