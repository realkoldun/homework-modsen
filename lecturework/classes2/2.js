class Counter {
    static count = 0;
    constructor() {
        Counter.count++;
    }
    static getCount() {
        return Counter.count;
    }
}

const counter_1 = new Counter();
const counter_2 = new Counter();
const counter_3 = new Counter();
console.log(Counter.getCount());