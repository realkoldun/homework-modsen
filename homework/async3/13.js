async function fetchData(url) {
    const response = await fetch(url);
    if(!response.ok) throw new Error(`Произошла ошибка при чтении данных с ${url}`);
    return await response.json();
}

function getUsersNames(users) {
    const namesArray = [];
    users.forEach(user => namesArray.push(user.name));
    return namesArray;
}



const url = "https://jsonplaceholder.typicode.com/users";
fetchData(url)
    .then(data => console.log(getUsersNames(data)))
    .catch(error => console.error(error.message));

export default fetchData;