const arraySum = function sum(array) {
    if(array.length === 1) return array[0];
    return array.pop() + sum(array);
}

const arraySum_2 = function sum(array) {
    if(array.length === 1) return array[0];
    return array[0] + sum(array.slice(1));
}

console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum_2([1, 2, 3, 4, 5]));