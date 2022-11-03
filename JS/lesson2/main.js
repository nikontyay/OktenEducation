// 1- - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let container = [];
container[0] = 'hello';
container[1] = 'okten';
container[2] = 'owu';
container[3] = 0;
container[4] = true;
container[5] = false;
container[6] = 2022;
container[7] = 'something';
container[8] = 'bye';
container[9] = 'why';
console.log (container[0]);
console.log (container[1]);
console.log (container[2]);
console.log (container[3]);
console.log (container[4]);
console.log (container[5]);
console.log (container[6]);
console.log (container[7]);
console.log (container[8]);
console.log (container[9]);

// 2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let object1 = {
    title: 'Harry Potter',
    pageCount: 431,
    genre: 'Fantasy'
}
console.log(object1);

let object2 = {
    title: 'Hobbit',
    pageCount: 750,
    genre: 'Fantasy'
}
console.log(object2);

let object3 = {
    title: 'Witcher',
    pageCount: 275,
    genre: 'Fantasy'
}
console.log(object3);

// 3 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age 

object1.author = [
    {name: 'John Doe', age: 31}
];
console.log(object1);

object2.author = [
    {name: 'John Doe', age: 33}
];
console.log(object2);

object3.author = [
    {name: 'John Doe', age: 35}
];
console.log(object3);



// 4 - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    { name: 'John Doe', username: 'login', password: 'qwerty'},
    { name: 'John Doe', username: 'login', password: 'qwertyiefd'},
    { name: 'John Doe', username: 'login', password: 'qwertydsfsd'},
    { name: 'John Doe', username: 'login', password: 'qsdfasdfy'},
    { name: 'John Doe', username: 'login', password: 'qsfy'},
    { name: 'John Doe', username: 'login', password: 'sfdasy'},
    { name: 'John Doe', username: 'login', password: 'vcdfg'},
    { name: 'John Doe', username: 'login', password: 'aseddway'},
    { name: 'John Doe', username: 'login', password: 'wewefsdfsdf'},
    { name: 'John Doe', username: 'login', password: 'sfsdfsdfsf'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);