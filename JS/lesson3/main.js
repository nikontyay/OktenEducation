// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('Enter a number');
//
// if (x !== 0) {
//     console.log('True');
// } else {
//     console.log('False');
// }

//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time = +prompt('Enter the time');
//
// if (time >= 45 && time < 60) {
//     console.log('4th quater');
// }
// else if (time >= 30 && time <45) {
//     console.log('3rd quater');
// }
// else if (time >= 15 && time <30) {
//     console.log('2nd quater');
// }
//
// else if (time >= 0 && time <15) {
//     console.log('1st quater');
// }
// else {
//     console.log('Update the page')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

// let day = +prompt('Enter the number');
// if (day > 0 && day <=10) {
//     console.log('first')
// }
// else if (day > 10 && day <=20) {
//     console.log('second')
// }
// else if (day > 20 && day <=31) {
//     console.log('third')
// }
// else {
//     console.log('Update the page and try again')
// }



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//


// let weeklySchedule = +prompt()
// switch (weeklySchedule) {
//     case 1:
//         console.log('sunday')
//         break;
//     case 2:
//         console.log('monday')
//         break;
//     case 3:
//         console.log('tuesday')
//         break;
//     case 4:
//         console.log('wednesday')
//         break;
//     case 5:
//         console.log('thursday')
//         break;
//     case 6:
//         console.log('friday')
//         break;
//     case 7:
//         console.log('saturdat')
//         break;
//     default:
//         console.log('Enter a number')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

// let a = +prompt();
// let b = +prompt();
//
// if (a > b) {
//     console.log('a is bigger');
// }
// else if (b > a) {
//     console.log('b is bigger');
// }
// else if (a === b) {
//     console.log('equal');
// }
// else {
//     console.log(('error'))
// }
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = +prompt() || 'default';
// console.log(x)

// or

// let x = '';
// if (!x === true) {
//     console.log('default')
// }
// else {
//     console.log('hello')
// }

// or

// let x = '';
// if (x) {
//     console.log('hello')
// }
// else{
//     console.log('default')   
// }
// // If кастується до True
// // Else кастується до False
