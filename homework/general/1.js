async function fetchWithRetry(url, retryCount) {
    if (typeof retryCount !== "number" || retryCount <= 0)
        return Promise.reject("Неверное число повторов");

    for (let i = 0; i < retryCount; i++) {
        const result = await fetch(url);
        if (!result.ok) {
            console.log(`Произошла ошибка: ${result.status}. Попытка номер ${i + 1}`);
            continue;
        }
        return result.json();
    }
    return Promise.reject("Невозможно обработать запрос");
}

fetchWithRetry("https://jsonplaceholder.typicode.com/userss", 10)
    .then(console.log)
    .catch(error => console.error(error));