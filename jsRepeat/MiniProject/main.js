





let container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((request) => request.json())
    .then((value) => {
            for (const element of value) {
                let userDiv = document.createElement('div');
                userDiv.classList.add('userDiv');
                container.appendChild(userDiv);
                userDiv.innerText = `${element.id} --- ${element.name}`;
                let userBtn = document.createElement('button');
                userDiv.appendChild(userBtn);
                userBtn.classList.add('userBtn');
                userBtn.innerText = 'My page';
                userBtn.onclick = function () {
                    window.location = 'user_details.html?id=' + element.id;
                }
            }
        }
    )