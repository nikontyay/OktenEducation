// --створити масив з:
//
// - з 5 числових значень
// let arr = [1,2,3,4,5];
// console.log(arr);
//
// - з 5 стічкових значень
// let arr = [];
// arr[0] = 'hello';
// arr[1] = 'world';
// arr[2] = 'my';
// arr[3] = 'name';
// arr[4] = 'is';
// console.log(arr);
//
// - з 5 значень стрічкового, числового та булевого типу
// let arr = [1,2,3,4,5,'hello','world','my','name','is',true,false];
// console.log(arr);
// // - та вивести його в консоль

// 
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0] = 'str';
// arr[1] = 7;
// arr[2] = true;
// console.log(arr);

// 1. перебрати його циклом while
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     document.write(`<div>${arr[i]}</div>`);
//     i++;
// }

// 2. перебрати його циклом for
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     document.write(`<div>${num}</div>`)
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i<arr.length) {
//     if (arr[i] % 2 === 1){
//         document.write(`<div>${arr[i]}</div>`)
//     }
//     i++;
// }



// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num %2 === 1) {
//         document.write(`<div>${arr[i]}</div>`)
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i<arr.length) {
//     if (arr[i] % 2 === 0){
//         document.write(`<div>${arr[i]}</div>`)
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num %2 === 0) {
//         document.write(`<div>${arr[i]}</div>`)
//     }
// }
//

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr = [1,2,3,4,5,6];
// let doneArr = arr.map((item) => {
//     if (item %3 === 0) {
//         return 'okten'
//     }
//     return item
// });
// console.log(doneArr);

// 8. вивести масив в зворотньому порядку.
// let arr = [1,2,3,4,5,6];
// let arrDone = arr.reverse();
// console.log(arrDone);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (item of arr) {
//     console.log(`${item}`)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['hello','world','my','name','is'];
// for(item of arr) {
//     console.log(`${item}`)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [10,20,30,'hello','world',true,false];
// for (const item of arr) {
//     console.log(`${item}`)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [10,20,30,'hello','world',true,false];
// for (const item of arr) {
//     if(typeof item === 'boolean') {
//         console.log(`${item}`)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [10,20,30,'hello','world',true,false];
// for (const item of arr) {
//     if(typeof item === 'number') {
//         console.log(`${item}`)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [10,20,30,'hello','world',true,false];
// for (const item of arr) {
//     if(typeof item === 'string') {
//         console.log(`${item}`)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'string';
// arr[1] = 1;
// arr[2] = true;
// for (const item of arr) {
//     console.log(`${item}`)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<10; i++) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i++) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i+=2) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i<100; i+=2) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i<100; i+=2) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
// }

///NOT DONE/ стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let arr = [
//     {
//         name: 'Hobbit',
//         pages: 300,
//         author: 'Tolkin',
//         genre: 'fantastic'
//     },
//     {
//         name: 'Lord of ring',
//         pages: 400,
//         author: ['Tolkin', 'Someauthor'],
//         genre: ['fantastic','fantasy'] 
//     }
// ]
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор