// // Видалення значень об'єктів
// const myCity = {
//     city: 'New York',
//     popular: true,
//     country: 'USA'
// }
//
// delete myCity.country;
// console.log(myCity);
//

// // Додати значення об'єкту
// myCity.some = 'hi';
// // or
// myCity['something'] = 'hello'
// console.log(myCity);
//
// // Якщо значення змінної, буду являтись ключем якойсь іншої змінної (тільки квадратні дужки, точка не підійде)
// const countryPropertyName = 'country';
// myCity[countryPropertyName] = 'USA';
// console.log(myCity);

// // Короткий формат запису
// const name = 'Danylo';
// const postsQty = 23;
//
// const userProfile = {
//     name,
//     postsQty,
//     hasSignedAgreement: false
// }
// console.log(userProfile);

//window(or 'globalThis') - глобальний об'єкт веб браузера

//метод - це властивість(ключ) об'єкта, значення якого є функція
// const myCity = {
//     city: 'New York',
//     cityGreeting: function () {
//         console.log('Greetings!!!')
//     }
// }
//
// myCity.cityGreeting() // виклик метода

//JSON (JAVASCRIPT OBJECT NOTATION) - формат обміну даними у вигляді стрічки (стрінги) 
// Формат JSON (двійні лапки замість одинарних) - {"userId":1,"id":1,"title":"Test title","status":{"completed":false}}
// let user = {
//     userId: 1,
//     id: 1,
//     title: 'Test title',
//     status: {
//         completed: false,
//     },
// }
//
// let userStringify = JSON.stringify(user);
// console.log(userStringify);
// let userParse = JSON.parse(userStringify);
// console.log(userParse);

// Мутація об'єктів - Копіювання об'єктів
// const person1 = {
//     name: 'Bob',
//     age: 25
// }
//
// const person2 = person1;
//
// person2.age = 26;
// person2.isAdult = true;
//
// console.log(person1.age) // також стало 26
// console.log(person1.isAdult); // також змінило значення person1 (copy by reference - копіювання за посиланням, тому так і відбувається)

// Мутація об'єктів - Як запобігти мутацію об'єктів
//Варіант 1 - Оригінальний об'єкт не змінюється, але якщо у цього об'єкта є властивості, значення яких є об'єкт,
// то все одно посилання на них зберігаються і значення будуть оригінального об'єкта будуть змінюватись
// const person1 = {
//     name: 'Bob',
//     age: 25
// }
//
// const person2 = Object.assign({}, person1)
// person2.age = 26;
//
// console.log(person2.age); // 26
// console.log(person1.age); // 25 (цей об'єкт не змінився)
//
//Варіант 2 - оператор spread - '...' - Оригінальний об'єкт не змінюється, але якщо у цього об'єкта є властивості, значення яких є об'єкт,
// то все одно посилання на них зберігаються і значення будуть оригінального об'єкта будуть змінюватись
// const person3 = {
//     name: 'Bob',
//     age: 25
// }
// const  person4 = {...person3};
// person4.name = 'Kokos';
// console.log(person4.name);
// console.log(person3.name);
//
//Варіант 3 - повністю запобігти мутацію (посилання на вкладенні об'єкти не зберігаються)
// const person5 = {
//     name: 'Alice',
//     age: 27,
//     status: {
//         completed: true
//     }
// }
//
// const person6 = JSON.parse(JSON.stringify(person5));
// person6.status.completed = false;
//
// console.log(person6.status.completed); // false
// console.log(person5.status.completed); // true



