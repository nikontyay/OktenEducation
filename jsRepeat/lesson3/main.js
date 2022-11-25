// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('enter the number');
// if (x !== 0) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('Enter the number from 0 to 59');
// if (time >= 1 && time < 15 ) {
//     console.log('First half')
// } else if (time >= 15 && time < 30) {
//     console.log('Second half');
// } else if (time >=30 && time < 45) {
//     console.log('Third half');
// } else if (time >=45 && time <= 60) {
//     console.log('Fourth half');
// } else {
//     console.log('Update the page and try again');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt('Enter the day');
// if (day >= 1 && day < 10) {
//     console.log('First half');
// } else if (day >=10 && day < 20) {
//     console.log('Second half');
// } else if (day >= 20 && day <= 31) {
//     console.log('Third half');
// } else {
//     console.log('Try again');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let planner = +prompt('Enter the day');
// switch (planner) {
//     case 1 :
//         console.log('Monday');
//         break;
//     case 2 :
//         console.log('Tuesday');
//         break;
//     case 3 :
//         console.log('Wednesday');
//         break;
//     case 4 :
//         console.log('Thursday');
//         break;
//     case 5 :
//         console.log('Friday');
//         break;
//     case 6 :
//         console.log('Saturday');
//         break;
//     case 7 :
//         console.log('Sunday');
//         break;
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let a = +prompt('Enter a value of A');
// let b = +prompt(('Enter a value of B'));
// if (a > b) {
//     console.log('A is bigger');
// } else if (b > a) {
//     console.log('B is bigger');
// } else if (b === a) {
//     console.log('Equal');
// } else {
//     console.log('Update and enter a number');
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x = +prompt() || 'default';
// console.log(x);

// let x = +prompt();
// if (!x === true) {
//     console.log('default')
// } else {
//     console.log(x)
// }
//
// let x = +prompt();
// if (!x) {
//     console.log('default');
// } else {
//         console.log(x)
// };