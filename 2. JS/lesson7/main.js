// Якщо з'являється помилка, її можна обгорнути в Try - Catch - Finally;
// Try - містить дію з помилкою; Catch - хватає цю помилку і виводить текст цієї помилки (console.error - помилка буде 
// червоного кольору; console.log - помилка буде звичайного кольору); Finally - блок, який виконує додаткову дію,
// незалежно сталася помилка, чи ні.
// function foo(obj) {
//         try {
//             console.log(obj.name);
//         } catch (asdasdadas) {
//             console.error(asdasdadas);
//         } finally {
//             console.log('something') 
//         }
//         console.log('end');
//     }
//
//     foo();

// Throw new Error - створюємо помилку
//     function divider(a, b) {
//         if (b === 0) {
//             throw new Error('ouououou B is - Zero');
//         }
//         console.log(a / b);
//     }
//
//     try {
//         divider(10, 0);
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log('asfdhasfdh');
//     }
    
// Використовуємо символ "?", в тому випадку, якщо очікуємо що це значення може видавати помилку (якщо помилки не буде -
// дія всеодно виконається) - Цей символ ще називають "Однооким Елвісом"
//     let user = {
//         name: 'asdasd'
//     }
//     console.log(user?.name);
//     console.log(user?.wife?.age);

//  Коли характеристика об'єкта бере своє значення від змінної, яка називається так само як і характеристика об'єкта, то
// запис можна скоротити
//     let name = 'vasya';
//     let age = 31;
//
//     let user = {
//         name,
//         age
//     }

// Вампіри - звертаюсь до user у якого є ключ name та name, та оголошую нову змінну name та age ( з user беремо 
// властивості та оголошуємо нові змінні).
//     let user = {
//         name: 'kokos',
//         age: 31,
//         wife: {
//             name: 'olya',
//             age: 32
//         }
//     };
//
// let {name, age, wife} = user;
// console.log(name);
// // console.log(age);
// // console.log(wife);

// Якщо змінна вже оголошена (в нашому випадку name та age), то при оголошенні ще раз, потрібно звернутися до цієї 
// змінної, поставити ":" та придумати їй іншу назву (властивості нової змінної будуть однакові з попередньой змінной).
// let name = 'somebody';
// let age = 29;
//
// let user = {
//         name: 'kokos',
//         age: 31,
//         wife: {
//             name: 'olya',
//             age: 32
//         }
//     };
//
// let {name:userName, age:userAge, wife:{name:wifeName}} = user;
// console.log(userName);
// console.log(userAge);
// console.log(wifeName);

// Не вказуємо змінну, щоб проігнорувати другий сегмент
// let [a, , c] = [11,22,33];
// console.log(a, c);

// Звертаємось за індексом
// let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
//
// let [user1,user2] = users;
// console.log(user1);
// console.log(user2);
// let {name} = user1;
// console.log(name);
// let {name:user2Name} = user2;
// console.log(user2Name);
// let [, , {name:user3Name}] = users
// console.log(user3Name);

// Shallow Copy, "..." (Spread operator) - робить копію об'єкта без типу посилання (якщо будемо змінювати характеристики об'єктів в userCopy, то ці ж
// самі характеристики не зміняться в змінній user)
// let user = {
//     name: 'kokos',
//     age: 31,
//     wife: {name: 'anna', age: 32},
//     skills: ['html', 'js']
//     };
//
// let userCopy = {...user};// {name:user.name,age:user.age}
// console.log(userCopy);
//
// let nums = [11,22,33];
// let numsCopy = [...nums];
// console.log(numsCopy);
// console.log(numsCopy === nums);
// 
// Це неповна копія, тому 
// console.log(userCopy === user); //false
// console.log(userCopy.skills === user.skills); //true

// Deep copy via JSON - робить повну копію, але видаляє функції
// let user = {name: 'kokos', age: 31, wife: {name: 'anna', age: 32}, skills: ['html', 'js']};
//
//
// let s = JSON.stringify(user);
// console.log(s);
// let userClone = JSON.parse(s);
// console.log(userClone);
// console.log(user);
// console.log(user === userClone); //false
// console.log(user.skills === userClone.skills); //false
//
//     function copyCentr(obj) {
//         return JSON.parse(JSON.stringify(obj));
//     }
//
//const copy = (obj) => JSON.parse(JSON.stringify(obj));





// 
//     // let users = [
//     //     {name: 'vasya', age: 31, status: false},
//     //     {name: 'petya', age: 30, status: true},
//     //     {name: 'kolya', age: 29, status: true},
//     //     {name: 'olya', age: 28, status: false},
//     //     {name: 'max', age: 30, status: true},
//     //     {name: 'anya', age: 31, status: false},
//     //     {name: 'oleg', age: 28, status: false},
//     //     {name: 'andrey', age: 29, status: true},
//     //     {name: 'masha', age: 30, status: true},
//     //     {name: 'olya', age: 31, status: false},
//     //     {name: 'max', age: 31, status: true}
//     // ];
//     //
//     // users.map((value, index) => ({
//     //         name: value.name,
//     //         age: value.age,
//     //         status: value.status,
//     //         id: index + 1,
//     //     }
//     // ));
//     //
//     // console.log(users.map((value, index) => ({...value, id: index + 1})));

// let user = {
//     name : 'kokos',
//     age: 31
// }
// user.age = 'dog';
// console.log(user);

// 
// 
//     function userBuilder(name, age) {
//         let user = {name, age};
// 
//         return {
//             setAge: function (age) {
//                 if (typeof age === 'string') {
//                     throw new Error('newAge must be a number type')
//                 } else {
//                     user.age = age;
//                 }
//             },
//             userInfo: function () {
//                 return {...user}
//             },
//             getAge: function () {
//                 return user.age;
//             },
//         };
// 
//     }
// 
//     console.log();
//     let builder = userBuilder('asd', 123);
//     builder.setAge(100);
//     console.log(builder.userInfo());