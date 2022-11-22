// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareAB (a,b) {
//     let result = a * b;
//     return result
// }
// let x = squareAB(10,20);
// console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCircle (r) {
//     return 3.14 * r**2;
// }
//
// let x = squareCircle(10);
// console.log(x);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function squareCylinder (r,h) {
//     return 2 * 3.14 * r * h;
// }
//
// let x = squareCylinder(20,5);
// console.log(x);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//
// function userFilter (users) {
//     for (const user of users) {
//         console.log(user)
//     }
// }
// userFilter(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph (text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list (text) {
//   document.write(`
// <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>    
// `);
// }
// list('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list (text, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// list('Hello', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [10, 'hello', true];
//
// function list (arr) {
//     document.write(`<ul>`);
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {id: 1, name: 'Lisa Simpson', age: 11},
//     {id: 2, name: 'Homer Simpson', age: 41},
//     {id: 3, name: 'Bart Simpson', age: 12},
// ]
//
// function object (array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
//     }
// }
// object(arr)

// - створити функцію яка повертає найменьше число з масиву
// let arr = [17, -2, -3, 5, 17];
// function minvalue (array) {
//
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
//
// }
//
// console.log(minvalue(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [10,20,30,40,50];
// function someThing (array) {
//     let sum = 0
//     for (const item of array) {
//          sum = sum + item;
//     }
//     return sum;
// }
//
// console.log(someThing(arr));


// function calc (a,b) {
//   let c = a + b;
//   console.log(c);
// }
//
// calc(10,20);

// function calc (a,b) {
//   return c = a + b;
// }
// console.log(calc(10,20))


// function print (text) {
//   console.log(`${text}`)
// }
// print('Hello')

// function print (text) {
//   return `${text}`;
// }
//
// console.log(print('Hello'))