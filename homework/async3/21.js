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

async function task() {
    const postsUrl = " https://jsonplaceholder.typicode.com/posts";
    try {
        const posts = await fetchData(postsUrl);
        //console.log(posts);
        const evenIdPosts = posts.filter(post => post.id % 2 === 0);
        //console.log(evenIdPosts);
        const result = [];
        const promises = [];
        for (let i in evenIdPosts) {
            promises.push(new Promise(async (resolve, reject) => {
                try {
                    //console.log(evenIdPosts[i]);
                    const postComments = await getCommentsByPostId(evenIdPosts[i].id);
                    const maxLengthComment = getMaxLength(postComments);
                    result.push({
                        postId: evenIdPosts[i].id,
                        longestComment: maxLengthComment.object.body
                    });
                    resolve(`Пост ${i} успешно обработан`);
                } catch (error) {
                    reject(`Пост ${i} необработан: `, error.message);
                   // console.error(error.message);
                }
            }));
        }
        let request = "";
        await Promise.all(promises).then(() => request = JSON.stringify(result))
            .catch((error) => console.error(error));
        //console.log(request);
        if(request !== "") {
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
        return Promise.reject("Ошибка отправки данных. Request пустой");
    } catch (error) {
        console.error(error.message);
    }
}

task().then(response => console.log(response))
    .catch(error => console.error(error.message));

