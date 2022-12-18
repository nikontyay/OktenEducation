// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url3 = new URL(location.href);
let post = url3.searchParams.get('post');
let parse = JSON.parse(post);
console.log(parse);

let postInnerDiv = document.createElement('div');
document.body.appendChild(postInnerDiv);

for (const element in parse) {
    let postSecondInnerDiv = document.createElement('div');
    postInnerDiv.appendChild(postSecondInnerDiv);
    postSecondInnerDiv.innerText = `${element} --- ${parse[element]}`;
}

let apiURL = parse.id + '/comments';
fetch('https://jsonplaceholder.typicode.com/posts/' + apiURL)
    .then((request) => request.json())
    .then((value) => {
        console.log(value);
        let commentsButton = document.createElement('button');
        postInnerDiv.appendChild(commentsButton);
        commentsButton.innerText = 'Comments'
        commentsButton.onclick = function () {
            let commentsDiv = document.createElement('div');
            document.body.appendChild(commentsDiv)
            for (const item of value) {
                console.log(item);
                let commentsInnerDiv = document.createElement('div');
                commentsDiv.appendChild(commentsInnerDiv);
                commentsInnerDiv.innerText = `${item.postId} --- ${item.body}`;
            }
        }
    })



