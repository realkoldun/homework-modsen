const obj = {
    name: 'Object',
    getName: function () {
        return this.name;
    }
};
const getName = obj.getName.bind(obj);
console.log(getName());
