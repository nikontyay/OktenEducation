
let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then((request) => request.json())
    .then((value) => {
        let container = document.createElement('div');
        document.body.appendChild(container);
        container.classList.add('container');
        for (const element in value) {
            let userDiv = document.createElement('div');
            container.appendChild(userDiv);
            userDiv.classList.add('userDiv');
            if (typeof value[element] !== 'object') {
                userDiv.innerText = `${element} - ${value[element]}`;
            } else {
                userDiv.innerText = `${element}:`
                for (const item in value[element]) {
                    let userInnerDiv = document.createElement('div');
                    userDiv.appendChild(userInnerDiv);
                    if (typeof value[element][item] !== 'object') {
                        userInnerDiv.innerText = `${item} - ${value[element][item]}`
                    } else {
                        userInnerDiv.innerText = `${item}:`
                        for (const key in value[element][item]) {
                            let userHtmlDiv = document.createElement('div');
                            userInnerDiv.appendChild(userHtmlDiv);
                            if (typeof value[element][item][key] !== 'object') {
                                userHtmlDiv.innerText = `${key}: ${value[element][item][key]}`
                            }
                        }
                    }
                }
            }
        }
        let url2 = new URL(location.href);
        let id2 = url2.searchParams.get('id') + '/posts';
        fetch('https://jsonplaceholder.typicode.com/users/' + id2)
            .then((request) => request.json())
            .then((data) => {
                let buttonDiv = document.createElement('div');
                document.body.appendChild(buttonDiv);
                buttonDiv.classList.add('buttonDiv');
                let button = document.createElement('button');
                buttonDiv.appendChild(button);
                button.classList.add('userPostsButton');
                button.innerText = 'Posts of current user';
                button.onclick = function () {
                    let containerDiv = document.createElement('div');
                    document.body.appendChild(containerDiv);
                    containerDiv.classList.add('containerDiv');
                    for (const item of data) {
                        let postDiv = document.createElement('div');
                        containerDiv.appendChild(postDiv);
                        postDiv.classList.add('postDiv');
                        postDiv.innerText = `${item.id} --- ${item.title}`
                        let postBtn = document.createElement('button');
                        containerDiv.appendChild(postBtn);
                        postBtn.classList.add('postBtn');
                        postBtn.innerText = 'Post details';
                        postBtn.onclick = function () {
                            window.location = 'post_details.html?post=' + JSON.stringify(item);
                        }
                    }
                }
            })
    })




