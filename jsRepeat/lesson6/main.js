// let str = 'hello okten';
// // console.log(str[0]);

// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);

// console.log(toUpperCase.toLowerCase());
// console.log(str.startsWith('h'));

// console.log(str.endsWith('n'));

// let subString = str.substring(0,7);
// console.log(subString);

// let indexOfE = str.indexOf('e');
// console.log(indexOfE);
// let indexOfT = str.indexOf('t');
// console.log(str.substring(indexOfE, indexOfT));

// console.log(str.charAt(7));

// let phone = '(067)123-12-12';
// // let resultOfReplace = phone
// //     .replaceAll('(','')
// //     .replaceAll(')','')
// //     .replaceAll('-','');
// // console.log(resultOfReplace);
// // console.log(phone.replaceAll(/[()-]/g, ''));

// let obj = 'name: Vasya age:31';
// let splitOjStr = obj.split('3');
// console.log(splitOjStr);
// let tupleName = splitOjStr[0];
// console.log(tupleName);
// let nameValue = tupleName.split(':');
// console.log(nameValue);

// let arr = [];
//
// console.log(Array.isArray(arr));
//
// arr[arr.length] = 'qwerty1';
// arr.push('qwerty2');
// arr.push('qwerty3');
// arr.push('qwerty4');
// arr.push('qwerty5');
// console.log(arr);
//
// console.log(arr.pop());
// console.log(arr);
//
// console.log(arr.shift());
// console.log(arr);
//
// console.log(arr.unshift('WOW'));
// console.log(arr);
//
// let joinArray = arr.join(';');
// console.log(joinArray);
// console.log(typeof joinArray);
//
// let nums =[1,2,3,4,5,6,7,8,9];
// let concatArray = arr.concat(nums);
// console.log(concatArray);

// let users = [
//     {id:1, name:'Petya', age:20, status:true},
//     {id:2, name:'Vasya', age:21, status:false},
//     {id:3, name:'Katya', age:22, status:true},
//     {id:4, name:'Danya', age:24, status:false}
// ];
//
// let spliceUsers = users.splice(0,2, 'InsertedItems');
// console.log(spliceUsers);
// console.log(users);

// let arr =[11,22,33,44,55];
// let nums = arr.reverse();
// console.log(nums);
// console.log(arr.includes(11));

// let str = ' sdfdsdf '
// console.log(str.length);
// let newStr = str.trim();
// console.log(newStr.length);

let users = [
    {id:1, name:'Petya', age:25, status:true},
    {id:2, name:'Vasya', age:29, status:false},
    {id:3, name:'Katya', age:23, status:true},
    {id:4, name:'Danya', age:27, status:false}
];

//ForEach
// function whatiWantToDo (item) {
//     console.log(item);
// }
// users.forEach(whatiWantToDo);
//or
// users.forEach(function whatiWantToDo (item) {
//     console.log(item);
// })
//or
// users.forEach((item) => console.log(item));
//or
// function someThing (arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// someThing(users);

// Filter
// let filteredUsers = users.filter(function (user){
//     return user.age > 20;
// })
// console.log(filteredUsers);
//
//or
//
// let filteredUsers = users.filter((user) => user.age > 20 && user.status === false);
// console.log(filteredUsers);
//
//or
//
// let arr = [];
// function filter (users){
//     for (const user of users) {
//         if (user.age > 20) {
//             arr.push(user)
//         }
//     }
// }
// filter(users);
// console.log(arr);

// Map - змінити старий тип данних на новий тип данних
// let mapUser = users.map(function (user) {
//     let newUser = {name: user.name, age: user.age};
//     return newUser;
// })
// console.log(mapUser);
//
//or
//
// let mapUser = users.map((user,index) => ({id: index+1, name: user.name, age: user.age}));
// console.log(mapUser);

// Sort
// let sortedUsers = users.sort((a,b) => b.age - a.age);
// console.log(sortedUsers);
//
// let sortedUsers = users.sort(function (a,b){
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// })
// console.log(sortedUsers);

// Reduce
// let reducedUsers = users.reduce((accumulator,user) => {
//     accumulator.names.push(user.name);
//     accumulator.ages.push(user.age);
//     accumulator.statuses.push(user.status);
//     return accumulator
// }, {names: [], ages:[], statuses:[]});
// console.log(reducedUsers);

// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// 
// 
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// 
// 
// 
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
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
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// 
//  описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
// 
// 
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// 
// 
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }