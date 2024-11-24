function changeArray(array, condition) {
    return array.map(condition);
}

const array = [1, 2, 3, 4, 5];
const condition = element => element * 2;

console.log(changeArray(array, condition));
console.log(array);