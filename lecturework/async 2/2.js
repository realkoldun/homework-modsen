function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if(number > 10) resolve("Число больше 10");
        else reject("Число меньше или равно 10");
    });
}

const checkNumber_2 = (number) => {
    return new Promise((resolve, reject) => {
        if(number > 10) resolve("Число больше 10");
        else reject("Число меньше или равно 10");
    });
}

checkNumber(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));

checkNumber_2(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));