
let url3 = new URL(location.href);
let post = url3.searchParams.get('post');
let parse = JSON.parse(post);

let postInnerDiv = document.createElement('div');
document.body.appendChild(postInnerDiv);
postInnerDiv.classList.add('postInnerDiv');

for (const element in parse) {
    let postSecondInnerDiv = document.createElement('div');
    postInnerDiv.appendChild(postSecondInnerDiv);
    postSecondInnerDiv.classList.add('postSecondInnerDiv');
    postSecondInnerDiv.innerText = `${element}: ${parse[element]}`;
}

let apiURL = parse.id + '/comments';
fetch('https://jsonplaceholder.typicode.com/posts/' + apiURL)
    .then((request) => request.json())
    .then((value) => {
        let buttonCommentsDiv = document.createElement('div');
        document.body.appendChild(buttonCommentsDiv);
        buttonCommentsDiv.classList.add('buttonCommentsDiv');
        let commentsButton = document.createElement('button');
        buttonCommentsDiv.appendChild(commentsButton);
        commentsButton.classList.add('commentsButton');
        commentsButton.innerText = 'Comments'
        commentsButton.onclick = function () {
            let commentsDiv = document.createElement('div');
            document.body.appendChild(commentsDiv);
            commentsDiv.classList.add('commentsDiv');
            for (const item of value) {
                let commentsInnerDiv = document.createElement('div');
                commentsDiv.appendChild(commentsInnerDiv);
                commentsInnerDiv.classList.add('commentsInnerDiv');
                commentsInnerDiv.innerText = `${item.postId} --- ${item.body}`;
            }
        }
    })



