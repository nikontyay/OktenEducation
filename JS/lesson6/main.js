// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
//
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
// console.log(str.length);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// console.log(str.split(' '))
// let string = 'Ревуть воли як ясла повні';
// function stringToarray (str) {
//     return str.split(' ');
// }
// //
// console.log(stringToarray(string));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let nums = [10,8,-7,55,987,-1011,0,1050,0];
// // let str = nums.map(value => value.toString());
// // let str = nums.map(value => String(value));
// // let str = nums.map(value => value + '')
// console.log(str);   


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//
// let sortNums1 = nums.sort((a,b) =>{
//     return a - b;
// })
// console.log(sortNums1);
//
// let sortNums2 = nums.sort ((a,b) => {
//     return b - a;
// })
// console.log(sortNums2)

// let nums = [11,21,3];
//
// const sortNums = (direction, arr) => {
//     if (direction === 'ascending') {
//         arr.sort ((a,b) => a - b);
//     }
//     else if (direction === 'descending') {
//         arr.sort ((a,b) => b -a );
//     }
//     return arr;
// }
// console.log(sortNums('descending',nums));




//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
//
// let sorted = coursesAndDurationArray.sort((a,b) => {
//    return  b.monthDuration - a.monthDuration;
// })
// console.log(sorted);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// One Way
// let filtered = coursesAndDurationArray.filter(function (value){
//     return value.monthDuration > 5;
// })
// console.log(filtered)

// Second Way
// let filtered = coursesAndDurationArray.filter((value) =>{
//     return value.monthDuration > 5;
// })
// console.log(filtered);


//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
const suits = [
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'}
]

const cardNames = [6,7,8,9,10,'jack','queen','king','ace'];
const deck = [];

for (const suit of suits) {
    for (const cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            name: cardName,
            color: suit.color
        }
        deck.push(card);
    }
    
}
console.log(deck);

// описати колоду карт
// - знайти піковий туз
let filtered = deck.filter(function (value){
    return value.cardSuit === 'spade' && value.name === 'ace'
})
console.log(filtered)
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше


//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
































// let str = 'hello okten !!!';
// console.log(str)
// concat додає значення в кінець массиву або стрінги
// let s = str.concat('!!!');
// console.log(s);
    

// // toUpperCase переводить стрінгу в Великий регістр
// console.log(str.toUpperCase());


//toLowerCase переводить стрінгу в Низький регістр
// console.log(str.toLowerCase());


// startsWith визначає чи починається стрінга із зазначенного значення та повертає буллове значення
// console.log(str.startsWith('hel'));


//startsWith визначає чи закінчується стрінга із зазначенного значення та повертає буллове значення
// console.log(str.endsWith('en'));


// substring повертає підстрічку стрічки між двума індексами
// console.log(str.substring(0, 7));


// Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, 
// на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.
// console.log(str.indexOf('o'));


// Метод lastIndexOf() возвращает индекс последнего вхождения указанного значения в строковый объект String, на котором 
// он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex.
// console.log(str.lastIndexOf('o'));


// indexOf() начинает поиск с указанного индекса
// console.log(str.indexOf('o', 5));


// Метод charAt() возвращает указанный символ из строки
// console.log(str.charAt(8));


// Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель
// console.log(str.replace('e', '!'));


// Метод replaceAll() возвращает новую строку со всеми совпадениями pattern , который меняется на replacement
// console.log(str.replaceAll('e', '!'));


// Метод split() разбивает объект String на массив строк. Указываем по какому элементу будет разбивка.
// Указанный элемент вырезается.
// let split = str.split(' '); 
// по пробелу
// console.log(split);




// let arr = [];


// Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
// console.log(Array.isArray(arr));


// Добавляет в конец массива значение
// arr[arr.length] = 100; 
// console.log(arr)


// Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
// console.log(arr.push('new element1'));
// console.log(arr.push('new element2'));
// console.log(arr.push('new element3'));
// console.log(arr.push('new element4'));
// console.log(arr.push('new element5'));
// // console.log(arr);


// Метод pop() удаляет последний элемент из массива и возвращает его значение.
// console.log(arr.pop());
// console.log(arr);


// Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
// console.log(arr.unshift('asd', 'dasd'));
// console.log(arr);


// Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
// console.log(arr.shift());
// console.log(arr.shift());
// console.log(arr);


// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
// const concat = ['ant', 'bison', 'camel', 'duck', 'bison'];
// let join = concat.join(';');
// console.log(join);

// let nums = [11, 22, 33];
// let some = concat.concat('sda');
// console.log(concat.concat('???'));
// console.log(concat)


//Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
// console.log(nums.reverse());


// Метод slice() возвращает новый массив, содержащий копию части исходного массива (диапазон от до невключительно)

// // let slice = concat.slice(0,2);
// // console.log(slice);
// console.log(concat);


// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
// let splice = concat.splice(0, 1, '!!!');
// console.log(splice);
// console.log(concat.splice(0,2,'???'));
// console.log(concat)
// // concat.splice(concat.indexOf('o'), 0);
// // console.log(concat)
// //
// console.log(concat.indexOf('ant'));
//
// // Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
// console.log(concat.includes('ant'));
// console.log('hello okten'.includes('ok'));