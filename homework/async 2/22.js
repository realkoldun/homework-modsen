function fetchData(usersUrl, postsUrl, commentsUrl) {
    const userPromise = new Promise((resolve, reject) => {
        fetch(usersUrl).then(response => {
            if(!response.ok) reject(`Ответ сервера для user отрицательный`)
            resolve(response.json());
        })
            .catch((error) => reject("Ошибка в получении данных для users: ", error));
    });
    const postsPromise = new Promise((resolve, reject) => {
        fetch(postsUrl).then(response => {
            if(!response.ok) reject(`Ответ сервера для posts отрицательный`)
            resolve(response.json());
        })
            .catch((error) => reject("Ошибка в получении данных для posts: ", error));
    });
    const commentsPromise = new Promise((resolve, reject) => {
        fetch(commentsUrl).then(response => {
            if(!response.ok) reject(`Ответ сервера для comments отрицательный`)
            resolve(response.json());
        })
            .catch((error) => reject("Ошибка в получении данных для comments: ", error));
    });
    const result = Promise.race([userPromise, postsPromise, commentsPromise]);
    /*setTimeout(() => {
        return Promise.reject();
    }, 5000);*/
    return result;
}


const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
fetchData(usersUrl, postsUrl, commentsUrl)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
