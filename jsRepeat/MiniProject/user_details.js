// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then((request) => request.json())
    .then((value) => {
        console.log(value);
        let container = document.createElement('div');
        document.body.appendChild(container);
        for (const element in value) {
            let userDiv = document.createElement('div');
            container.appendChild(userDiv);
            userDiv.innerText = `${element}: ${value[element]}`;
        }
    })