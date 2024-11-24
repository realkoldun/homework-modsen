const arraySum = function sum(array) {
    if(array.length === 1) return array[0];
    return array.pop() + sum(array);
}

console.log(arraySum([1, 2, 3, 4, 5]));