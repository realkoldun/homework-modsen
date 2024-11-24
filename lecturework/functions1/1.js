"use strict"
function counter() {
    let count = 0;
    return {
        getCount() {
            return count;
        },
        increase() {
            count++;
        },
        increaseAndGet() {
            this.increase();
            return this.getCount();
        }
    }
}
function makeCount() {
    let count = 0;
    return function () {
        return ++count;
    }
}

const counterObj = counter();
counterObj.increase();
counterObj.increase();
console.log(counterObj.getCount());
console.log(counterObj.increaseAndGet());
const counterObj_2 = makeCount();
console.log(counterObj_2())
console.log(counterObj_2())


