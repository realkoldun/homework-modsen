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

    const result = Promise.all([userPromise, postsPromise, commentsPromise]);
    /**/
    return Promise.race([ result, new Promise((resolve, reject) => {
        setTimeout(() => reject("Timeout"), 5000)
    })]);
}


const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
fetchData(usersUrl, postsUrl, commentsUrl)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
