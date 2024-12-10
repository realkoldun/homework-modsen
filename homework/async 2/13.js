function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Задача 1 завершена");
        }, 1000);
    })
}
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Задача 2 завершена");
        }, 2000);
    })
}
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Задача 3 завершена");
        }, 3000);
    })
}

Promise.all([task1(), task2(), task3()])
    .then((result) => console.log(result))
    .catch((error) => console.error(error))