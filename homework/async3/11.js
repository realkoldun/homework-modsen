function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved"), ms);
    });
}

async function performAction() {
    console.log("Action started");
    await delay(2000).then(result => console.log(result));
    console.log("Action completed after delay");
}

performAction();