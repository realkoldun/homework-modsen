async function fetchData(url) {
    const response = await fetch(url);
    if(!response.ok) throw new Error(`Произошла ошибка при чтении данных с ${url}`);
    return await response.json();
}

async function getCommentsByPostId(postId) {
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    return await fetchData(commentsUrl);
}
function getMaxLength(comments) {
    return comments.reduce((result, comment) => {
        if(comment.body.length > result.length)
            return  {object: comment, length: comment.body.length}
        else return result;
    }, {object: null, length: 0});
}

async function sendRequest(url, request) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: request
    });
    if(!response.ok) return Promise.reject("Ошибка отправки данных на сервер");
    return await response.json();
}


async function task() {
    const postsUrl = " https://jsonplaceholder.typicode.com/posts";
    try {
        const posts = await fetchData(postsUrl);
        const evenIdPosts = posts.filter(post => post.id % 2 === 0);
        const result = [];
        const promises = evenIdPosts.map(post => {
            return new Promise(async (resolve, reject) => {
                try {
                    const postComments = await getCommentsByPostId(post.id);
                    const maxLengthComment = getMaxLength(postComments);
                    result.push({
                        postId: post.id,
                        longestComment: maxLengthComment.object.body
                    });
                    resolve(`Пост ${post.id} успешно обработан`);
                } catch (error) {
                    reject(`Пост ${post.id} не обработан: `, error.message);
                }
        })
        });
        let request = null;
        await Promise.all(promises)
            .then(() => request = JSON.stringify(result))
            .catch((error) => console.error(error));
        if(request !== null) return sendRequest(postsUrl, request);
        return Promise.reject("Ошибка отправки данных. Request пустой");
    } catch (error) {
        console.error(error.message);
    }
}

task().then(response => console.log(response))
    .catch(error => console.error(error.message));

