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

// Функція - це об'єкт; console.dir(Функція) - відобразить тіло функції
// function myFn(a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c
// }
// console.log(myFn(10, 20));

// Створення функції, яка мутує оригінальний об'єкт (не рекомендується, але є випадки коли це необхідно)
// const personOne = {
//     name: 'Bob',
//     age: 21
// }
// function increasePersonAge(somePerson) {
//     somePerson.age += 1
//     return somePerson
// }
//
// console.log(increasePersonAge(personOne));

// Створення копії об'єкта всередині функції, щоб не мутувати оригінальний об'єкт
// const personOne = {
//     name: 'Bob',
//     age: 21
// }
//
// function increasePersonAge(somePerson) {
//     const someUpdatedPerson = Object.assign({}, somePerson)
//     someUpdatedPerson.age += 1
//     return someUpdatedPerson
// }
//
// const personTwo = increasePersonAge(personOne);
// console.log(personTwo);
// console.log(personOne);

// Callback функція - коли аргументом однієї функції є інша функція (одна функція викликає іншу функцію)
// Зміст callback функції, що вона викликається всередині іншої функції
// function printMyName() {
//     console.log('Danylo')
// }
//
// setTimeout(printMyName,1000);
//
// function greet (name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback ();
// }
//
// function hello () {
//     console.log('something')
// }
//
// greet('Danylo', hello);

// Правила функцій:
// 1. Називати функції виходячи з результату функції (щоб назва була логічна)
// 2. Одна функція повинна виконувати одну дію
// 3. Не рекомендується змінювати зовнішні щодо функції змінні (яка мутує оригінальний об'єкт) - але є випадки коли це необхідно
// Якщо нема return - то функція поверне undefined

// Глобальні та локальні області видимості (локальні мають пріоритет)
// Якщо в Глобальній області видимості та Локальній області видимості "Один" будуть створені змінні "b",
// то при роботі в Локальній області "Один" ми будемо працювати зі змінною, яка створена в Локальній області видимості "Один".
// Якщо в Локальній області видимості "Два" не була створена змінна "b",
// то при роботі з нею в Локальній області видимості "Два", ми будемо брати значення змінної "b" з Глобальної області видимості.
// let a; //глобальна змінна
// let b; //глобальна змінна
//
// function myFn() {
//     let b //локальна змінна
//     a = true;
//     b = 10;
//     console.log(b);
// }
//
// myFn();
//
// console.log(a); // true
// console.log(b); // undefined

// Ланцюг областей видимості
// let a = 5;
//
// function myFn () {
//     let a = 8
//     function innerFn () {
//         console.log(a);
//     }
//     innerFn();
// }
//
// myFn();
//
// console.log(a);

// Якщо не визначити змінну всередині функції, а просто присвоїти значення, то така змінна буде визначена
// автоматично в глобальній області видимості (не рекомендується)
// function myFn () {
//     a = true
//     console.log(a);
// }
// myFn();
// console.log(a);

// Правила по використанню змінних:
// 1. Всі змінні присвоювати перед їх використанням
// 2. Намагатися використовувати const всюди, де це можливо
// 3. Всередині функції не змінювати змінні з зовнішніх областей видимості

//'use strict' (строгий режим) - забороняє використання невизначених змінних (якщо є бажання, можна додати перед використанням)
// 'use strict'
//
// function myFn () {
//     a = true;
//     console.log(a);
// }
// myFn();

// Оператори - це вбудована функція в Javascript
// " + - * / " - арифметичні
// " === !=== <= >= " - порівняння
// " ! && || " (ні - завжди повертає значення boolean, і, чи) - логічні
// " = " - визначення

// Унарні оператори (завжди один операнд(аргумент)):
// typeof - тип значення
// new - створити новий екземпляр об'єкта
// delete - видалення об'єкта
// "а++" - збільшує число на одиницю
// "+а" - можна конвертувати стрічку в число

// Бінарні оператори (два операнди):
// а = 5
// а + b
// a += 5 - збільшуємо значення змінної на 5, та визначаємо нове значення для цієї змінної
// a === b - порівняння (порівнює як тип, так і значення)
// a && b - оператор "і"
// a || b - оператор "чи"

// instanceof - приналежність об'єкта до того чи іншого класу

// Хибні значення
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// Практика операторів
// console.log(typeof 10 === 'number');
// console.log('string' === 'string');
//
// let a
// console.log(typeof a);
// console.log(typeof a === 'undefined');

// Оператор "!"
// console.log(!10); //не 10
// console.log(!0); // не 0
// console.log(!'abc');  // і так далі
// console.log(!true);
// console.log(!'');
// console.log(!undefined);
//
// Оператор "!!" - можна перевірити яке булове значення у об'єкта
// console.log(!!10);
// console.log(!!0);
// console.log(!!'abc');
// console.log(!!true);
// console.log(!!'');
// console.log(!!undefined);

// Оператор короткого замикання && - "і" (Якщо буде хибне значення - покаже його. Якщо хибного не буде - буде йти по ланцюгу зліва направо та виведе останнє правдиве)
// console.log(0 && 'string') //- якщо вираження 1 хибне, то повернеться результат вираження 1 (на наступні операнди JS не дивиться)
// console.log(1 && 'string') //- якщо вираження 1 нехибне, то повернеться результат вираження 2
// console.log(1 && null) //-  якщо вираження 2 хибне, то повернеться результат вираження 2

// Оператор короткого замикання || - "чи" (Шукаємо перше правдиве значення)
// console.log(0 || 'string') // - якщо вираження 1 хибне, то повернеться результат вираження 2
// console.log(1 || 'string') //- якщо вираження 1 нехибне, то повернеться результат вираження 1 (на наступні операнди JS не дивиться)
// console.log(1 || null) //- якщо вираження 2 хибне, то повернеться результат вираження 1

// Практика операторів
// let a = null
// let b = 10
// let c = undefined
// let d = 'string';
//
// console.log(a && b && c && d); // буде значення змінної a
// console.log(a || b || c || d); // буде значення змінної b

// Оператор ... - бере ключі об'єктів
// const  button = {
//     width: 200,
//     text: 'Buy',
//     color: 'red'
// }
//
// const button2 = {
//     ...button,
//     color: 'black'
// }
// console.log(button2);
//
// const buttonInfo = {
//     text: 'Buy'
// }
//
// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 300
// }
//
// const completeButton = {
//     ...buttonInfo,
//     ...buttonStyle
// }
// console.log(completeButton);

// Template String (шаблонна стрічка)
// let myName = 'Danylo';
// let c = `Hello, my name is ${myName}`;
// console.log(c);

// Функціональне вираження
// Анонімна функція
// function () {
//     console.log('Hello')
//
// let someFunction = function () {
//     console.log('Hello')
// }
//
// Часто використовується як callback (аргумент)
// setTimeout(function () {
//     console.log('Відкладене сповіщення ')
// }, 1000)

//Стрілкова функція - завжди анонімна
// const myFn = (a, b) => {
//     let c
//     a = a + 1;
//     c = a + b;
//     return c
// }
// console.log(myFn(10, 4));
//
// const myFn2 = (a, b) => a + b;
// console.log(myFn2(10, 8));
//
// Як callback
// setTimeout(() => {
//     console.log('Hello')
// }, 1000);

// Значення функції за замовчуванням
// Функціональне вираження
// function multiplier (value, multiplier = 1) {
//     return value * multiplier;
// }
// console.log(multiplier(10,2));
//
// Анонімне функціональне вираження
// let multiplier = function (value, multiplier = 1) {
//     return value * multiplier;
// }
// console.log(multiplier(10,2));
//
// Стрілкова функція
// let multiplier = ((value, multiplier = 1) => value * multiplier);
// console.log(multiplier(10,2));
//
// Якщо робити не через замовчування, то код буде більший
// function multiplier (value, multiplier) {
//     if (typeof multiplier === 'undefined') {
//         multiplier = 1
//     }
//     return value * multiplier
// }
// console.log(multiplier(10,2));

// Значення функції за замовчуванням
// Після => ставимо круглі дужки, щоб JS думав ми формуємо новий об'єкт, використовуючи spread оператор, та додаємо
// новий ключ до нового об'єкта
// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// });
//
// const firstPost = {
//     id: 1,
//     name: 'Danylo'
// }
//
// let secondPost = newPost(firstPost);
// console.log(secondPost);
//
// const newPost = function (post, addedAt = Date()) {
//     let somePost = {
//         ...post,
//         addedAt
//     }
//     return somePost
// }
//
// const firstPost = {
//     id: 1,
//     name: 'Danylo'
// }
// console.log(newPost(firstPost));

// Обробка помилок
// const fnWithError = () => {
//     throw new Error('Some error')
// }
//
// try {
//     fnWithError()
// } catch (e) {
//     console.error(e);
//     console.log(e.message)
// }
//
// console.log('Continue...')
//
// function foo(obj) {
//         try {
//             console.log(obj.name);
//         } catch (e) {
//             console.error(e);
//             console.log(e.message);
//         } finally {
//             console.log('something')
//         }
//         console.log('end');
//     }
//
//     foo();

// Інструкції - звичайно закінчуються ";", але можна ними нехтувати для зручності читання коду
// let a; // кожну інструкції потрібно завершувати ";"
// const b = 5; // кожну інструкції потрібно завершувати ";"
// if (a > b) {
//     console.log('a is bigger');
// } // блоки кода в умовних інструкціях, або циклах не потребують ";"
// for (let i = 0; i++; i < 5) {
//     console.log(i);
// } // блоки кода в умовних інструкціях, або циклах не потребують ";"
//
// Вираз-інструкція
// 'abc'; // с виразу зробили інструкцію добавляючи ";" - без неї це вираз
// a = a + 3; // с виразу зробили інструкцію добавляючи ";" - без неї це вираз
// c = a + b; // с виразу зробили інструкцію добавляючи ";" - без неї це вираз
// d = 'Good' + 'Evening'; // с виразу зробили інструкцію добавляючи ";" - без неї це вираз
// myFunction (c,d); // с виразу зробили інструкцію добавляючи ";" - без неї це вираз
// console.log('Hey') // с виразу зробили інструкцію добавляючи ";" - без неї це вираз
//Коротко
// якщо оголошуємо змінну через let, const - це інструкція.
// якщо просто пишемо "а = 5", без оголошення через let, const - то це вираз
// якщо до виразу "а = 5" додамо ";" - "a = 5;", то це вже буду інструкція
// myFn (a = a + 1;) - не буде працювати, бо функція потребує вираз в якості аргументу, а не інструкцію
// myFn (a = a + 1) - ця функція буде працювати, бо всередині вираз

//Масив - це об'єкт
// const myArray = [1,2,3];
// console.log(myArray);
//
// const myArray2 = new Array(1,true,'hello');
// console.log(myArray2);
// console.log(myArray2.length);
//
// console.log(myArray[0]);
// myArray[2] = true;
// console.log(myArray);

// Методи масивів - функції вищого порядку (функції прототипів)
// const myArray = [1,2,3];
//
// метод push - додає значення в кінець масиву
// myArray.push('hello');
// console.log(myArray);
//
//
// метод pop - видаляє значення в кінці масиву, та повертає видалене значення (можна задати змінну)
// const removedElement = myArray.pop();
// console.log(removedElement);
//
//
// метод unshift - додає елемента в початок масиву
// myArray.unshift('okten');
// console.log(myArray);
//
//
// метод shift - видаляє елемент з початку масиву, та повертає видалене значення (можна задати змінну)
// const removedElement2 = myArray.shift();
// console.log(removedElement2);
//
//
// метод forEach - аргумент це функція. Перебирає кожен елемент. Не змінює оригінальний масив
// myArray.forEach(el => console.log(el * 2));
// const result = myArray.forEach(el => console.log(el * 2)); // метод forEach повертає undefined
// console.log(result);
//
//
// метод map - аргумент це функція. Перебирає кожен елемент. Не змінює оригінальний масив.
// Повертає новий масив (є return)
// myArray.map(el => console.log(el * 2));
// console.log(myArray);
//
// const result = myArray.map(el => el * 3);
// console.log(result);
// //or
// const result2 = myArray.map(el => {
//     return el * 10
// });
// console.log(result2);
// //or
// const result3 = myArray.map(function (el) {
//     return el * 30
// })
// console.log(result3);

// Деструктуризація об'єктів
// const userProfile = {
//     name: 'Bogdan',
//     commentsQty : 23,
//     hasSignedAgreement: false
// }
//
// const  {name:userName, commentsQty} = userProfile;
// const {hasSignedAgreement} = userProfile;
//
// console.log(userName);
// console.log(commentsQty);
// console.log(hasSignedAgreement);

// Деструктуризація масивів - призначення змінних згідно з індексом масиву (одночасно даємо нову назву змінної)
// const fruits = ['Apple', 'Banana'];
//
// const [fruitOne, fruitTwo] = fruits;
//
// console.log(fruitOne);
// console.log(fruitTwo);
//
// // Деструктуризація в функціях
// const userProfile = {
//     name: 'Bogdan',
//     commentsQty : 23,
//     hasSignedAgreement: false
// }
//
// const userInfo = ({name, commentsQty}) => {
//     if (!commentsQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }
//
// console.log(userInfo(userProfile));

// Умовні інструкції
// if - виконується якщо умова правдиве
// else - виконується якщо умова хибна
// let value = 10;
//
// if (value >= 5) {
//     value += 30
// } else {
//     value -= 30
// }
// console.log(value);

// перевірка на наявність значень
// const person = {
//     age: 20
// }
// const checkName = function (object) {
//     if (!object.name) {
//         console.log(`Ім'я не вказано`)
//     } else {
//         console.log(object.name)
//     }
// }
// checkName(person);

// if else if - якщо умова 1 хибна - переходимо на умову 2, якщо умова 2 хибна - переходимо на else
// const age = 19;
//
// if (age > 18) {
//     console.log('is Adult')
// } else if (age >= 12) {
//     console.log('is Teenager')
// } else {
//     console.log('is Child')
// }

// if if if - якщо всі умови вірні, то будуть всі результати (Такий код більш читальний)
// const age = 19;
//
// if (age >= 18) {
//     console.log('is Adult')
// }
// if (age >= 12) {
//     console.log('is Teenager') // або написати age >= 12 && age < 18 --- для того щоб вивести один результат
// }
// if (age < 12) {
//     console.log('is Child')
// }

// Умови в функціях
// const sumPositiveNumbers = (a,b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of the argument is not a number'
//     }
//     if (a <=0 || b <= 0) {
//         return 'Numbers are not positive'
//     }
//     return a + b
// }
//
// console.log(sumPositiveNumbers(10, -10));

// switch
// const month = 1
// switch (month) {
//     case 12:
//         console.log('December')
//         break
//     case 1:
//         console.log('January')
//         break
//     case 2:
//         console.log('February')
//         break
//     default:
//         console.log('It is not a winter month')
// }

// Тернарний оператор - якщо умова вірна, повертається результат Виразу 1, якщо хибне - результат Виразу 2
// Синтаксис:
// Умова
//      ? Вираз 1
//      : Вираз 2
//
// const value = 0;
// value
//     ? console.log('True')
//     : console.log('False')
//
// const value1 = 11;
// const value2 = 25;
// value1 && value2
//     ? console.log('True')
//     : console.log('False')
//
// let value3 = 10
// console.log(value3 >=0 ? value3: -value3);
//
// value3 = -5;
// const result = value3 >= 0
//     ? value3
//     : -value3
// console.log(result)

// Цикл for - використовуємо для масивів (але не рекомендується, краще використовувати forEach та map)
// for (let i =0; i< 5; i++) {
//     console.log(i)
// }
//
// const myArray = ['first','second','third'];
//
// for (let i = 0; i < myArray.length; i++) {
//     let item = myArray[i];
//     console.log(item)
// }
//
//
// //Краще forEach (можна також мати доступ до індексу елементу)
// myArray.forEach((element,index) => {
//     console.log(element,index)
// })

// Цикл while - виконується поки умова вірна (може виконуватися нескінченно, якщо є така умова, тому що умова
// зазначена в середині циклу, а не за його межами - якщо прибрати і++, то цикл стане нескінченним)
// let i = 0
//
// while (i < 5) {
//     console.log(i)
//     i++
// }

// Цикл do while - виконується якнайменше один раз, а далі якщо умова хибна - вийде з цикла
// let i = 5;
//
// do {
//     console.log(i)
//     i++
// } while (i < 5)

// Цикл for in - виконується з кожним ключем об'єкта
// const myObject = {
//     name: 'Bogdan',
//     age: 21,
//     status: true
// }
// for (const key in myObject) {
//     console.log(`${key}: ${myObject[key]}`)
// }

// forEach для об'єктів
// const myObject = {
//     name: 'Bogdan',
//     age: 21,
//     status: true
// }
//
// console.log(Object.keys(myObject)); // за допомогою виклику метода keys, яка є методом змінної Object, можна отримати
// // всі ключі об'єкта у вигляді масиву
//
// // а потім за допомогою forEach перебираємо масив
// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key])
// })
//
// // можна перебрати всі значення об'єкта
// Object.values(myObject).forEach(value => {
//     console.log(value)
// })

// for in для масивів - не рекомендується, краще forEach
// const myArray = [true, 10, 'abc', null]
//
// for (const key in myArray) {
//     console.log(myArray[key])
// }

// цикл for of (не для об'єктів)
// const myString = 'Hello'
// for (const element of myString) {
//     console.log(element)
// }
//
// const myArray = [true, 10, 'abc', null];
//
// for (const element of myArray) {
//     console.log(element);
// }
//
//краще forEach
// myArray.forEach(element => {
//     console.log(element)
// })

// Всі об'єкти можна конвертувати в масив за допомогою Object.keys or Object.values, а потім юзати метод forEach

// Класи дозволяють створювати прототипи для об'єктів
// Кожен екземпляр може мати свої власні властивості та методи. Екземпляр наслідує властивості й методи прототипів
// this вказує на екземпляр класу
// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//
//     upvote() {
//         this.votesQty +=1
//     }
// }
//
// const firstComment = new Comment('You are welcome');
// console.log(firstComment);
//

// instanceof - перевірка приналежності екземплярів класу
// console.log(firstComment instanceof Comment); // true - firstComment  є екземпляром класу Comment
// console.log(firstComment instanceof Object); // true - firstComment  є екземпляром батьківського класу Object
//
// firstComment.upvote()
// console.log(firstComment.votesQty);

// перевірка приналежності властивостей екземпляра об'єкта
// console.log(firstComment.hasOwnProperty('text')); //true
// console.log(firstComment.hasOwnProperty('votesQty')); //true - наслідується від firstComment
// console.log(firstComment.hasOwnProperty('upvote')); //false - upvote наслідується від класу Comment

// static методи - не наслідуються екземпляром класу, але доступні як методи самого Класу
// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//
//     upvote() {
//         this.votesQty +=1
//     }
//     static mergeComments(first, second) {
//         return `${first} ${second}`
//     }
// }
//
// const finalComment = Comment.mergeComments('firstComment','secondComment');
//
// const firstComment = new Comment('hello');
// console.log(firstComment);

// extends
// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((el, acc) => acc += el, 0)
//     }
// }
//
// const myArray = new NumbersArray(10,20,30);
// console.log(myArray)
// console.log(myArray.sum());

//THIS THIS THIS THIS THIS
//Trying to summarize 'this' after watching this video for at least 5th time:
//
// For fns inside Objects: 'this' refers to the object calling the function.
// For fns not called by objects - Eg call back functions -    'this' refers to the global object.
// For fns defined using arrow functions - 'this' simple refers to the object that is executing the arrow function -
// Irrespective of object's scope. Meaning:  if the arrow function is called from a global scope? 'this' will refer
// to the global object. If the arrow function is called with in a function which belongs to an object?'this'
// will refer to the calling function's scope and in this case the object itself.
//
//
// Якщо функція це метод об'єкта, то this дивиться на об'єкт (method -> obj)
// const video = {
//     title: 'OKTEN',
//     play() {
//         console.log(this)
//     }
// }
//
// video.play()
//
//
// Якщо функція не всередині об'єкта, то this дивиться на window (function -> global (window))
// let playVideo = function () {
//     console.log(this)
// }
// playVideo()
//
//
// Якщо функція всередині конструктора, то this дивиться на елемент конструктора
// function Constructor
// function Video(title) {
//     this.title = title;
//     console.log(this)
// }
//
// const v = new Video('Education');
//
//
// Тут this дивиться на Window, бо this всередині callback функції (це не метод video2)
// const video2 = {
//     title: 'OKTEN',
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach(function (tag){
//             console.log(this, tag) // Тут this дивиться на Window, бо this всередині callback функції (це не метод video2)
//         })
//     }
// }
// video2.showTags();
//
//
// для вирішення цієї проблеми, додамо this як другий аргумент forEach, і this всередині функції запрацює (працює не зі всіма методами)
// const video3 = {
//     title: 'OKTEN',
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach(function (tag){
//             console.log(this.title, tag)
//         },this)
//     }
// }
// video3.showTags()
//
//
// якщо функція додана в об'єкт, то this буду дивитися на сам об'єкт
// function context() {
//     return this
// }
//
// const object = {
//     method: context
// }
// console.log(object.method());
//
//
// в вкладених об'єктах this буде дивитися на об'єкт в який він вкладенний
// const object2 = {
//     method: context,
//     inner: {
//         someFunction: function () {
//             return this
//         }
//     }
// }
//
//
// стрілкова функція не має this (дивиться на window)
// const someFunc = () => this;
// console.log(someFunc());





