function wait(ms) {
    return new Promise( (resolve, rejected) => {
        setTimeout(() => {
            resolve("resolved test");
        }, ms)
    })
}

wait(1000).then((result) => console.log(result));