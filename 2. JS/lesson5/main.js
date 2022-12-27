

// function calc(a,b,action) {
//     if(action === '+') {
//         return a + b;
//     }
//     else if (action === '-') {
//         return a - b;
//     }
//     else {
//         return NaN
//     }
// }
//
// console.log(calc(10, 20, '*'));

// function asd () {
//     console.log(arguments);
// }
//
// asd(10,'string', true)

// function calc () {
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1]
//     }
//     else if (arguments.length === 3) {
//         return arguments[0] + arguments[1] + arguments[2]
//     }
// }
//
// console.log(calc(10,20,30));

// function asd (y, ...xxx) {
//     console.log(y, xxx[0]);
// }
// asd(100,200,300,400)

// let calc = (a,b) => a + b;
//
//  let calculator = (a, b) => {
//     let result = a + b;
//     console.log(result);
//     return result;
//  }

// let user = {
//     imya: 'vasya',
//     greeting: function () {
//         console.log(`hello my name is ${this.imya}`);
//     },
// }
// 'THIS' не працює зі стрілочною функцією.



//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     return a * b;
// }
// console.log(square(10,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let squareCircle = function (r) {
//     return 3.14 * r**2;
// }
// console.log(squareCircle(10));
//
// function squareCircle (r) {
//     return 3.14 * r**2;
// }
// console.log(squareCircle(10));
//
// let squareCircle = (r) => 3.14 * r**2;
// console.log(squareCircle(10));
//
// let squareCircle = (r) => {
//     let result = 3.14 * r**2;
//     console.log(result);
//     return result;
// }
// squareCircle(10);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let squareCylinder = (r, h) => 2 * 3.14 * r * h;
// console.log(squareCylinder(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrayNumbers = [2,17,13,6,22,31,45,66,100,-18];
// 
// let arrFunc = function (arr) {
//     for (const item of arr) {
//         console.log(item)
//     }
// }
//
// arrFunc(arrayNumbers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraph = function (text) {
//     document.write(`<p>${text}</p>`);
// };
// paragraph('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = function (text, numberOfLi) {
//     document.write(`<ul>`);
//     for (let i = 0; i < numberOfLi; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// };
// list('OKTEN', 100)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = function (text, numberOfLi) {
//     document.write(`<ul>`);
//     for (let i = 0; i < numberOfLi; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// };
// list('OKTEN', 100)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrayNumbers = [3,'str', true];
//
// let arrFunc = function (arr) {
//     document.write(`<ul>`);
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// arrFunc(arrayNumbers)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [
//     {id: 0, name: 'NikoN', age: 24,},
//     {id: 1, name: 'Kychmit', age: 21,},
// ];
// let arrFunc = function (arr) {
//     for (const item of arr) {
//         document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`)
//     }
// }
// arrFunc(array)

// - створити функцію яка повертає найменьше число з масиву
// let array = [17, 77, 30, 43, 12, 21];
//
// let arrMin = function (arr) {
//     let min = arr[0];
//     for (const item of arr) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min
// }
// console.log(arrMin(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 2, 10,10];
//
// let sumFunc = function (arr) {
//     let sum = 0;
//     for (const item of arr) {
//         sum = sum + item;
//     }
//     return sum;
// }
// console.log(sumFunc(array));