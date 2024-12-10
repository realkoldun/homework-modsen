function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Шаг 1 выполнен");
        }, 1000);
    })
}
function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Шаг 2 выполнен");
        }, 2000);
    })
}

step1()
    .then((result) => console.log(result))
    .then(() => step2())
    .then((result) => console.log(result))
    .catch((error) => console.error(error))