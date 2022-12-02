//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let maxValueFunction = function () {
//     if (arguments[0] < arguments [1] && arguments [0] < arguments [2]) {
//         return arguments [0];
//     }
//     else if (arguments[1] < arguments [0] && arguments [1] < arguments [2]) {
//         return arguments[1];
//     }
//     else if (arguments[2] < arguments [0] && arguments [2] < arguments [1]) {
//         return arguments[2]
//     }
// }
// console.log(maxValueFunction(1, 0, -1));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxValueFunction = function () {
//     if (arguments[0] > arguments [1] && arguments [0] > arguments [2]) {
//         return arguments [0];
//     }
//     else if (arguments[1] > arguments [0] && arguments [1] > arguments [2]) {
//         return arguments[1];
//     }
//     else if (arguments[2] > arguments [0] && arguments [2] > arguments [1]) {
//         return arguments[2]
//     }
// }
// console.log(maxValueFunction(1, 4, 5));

// - створити функцію яка повертає найбільше число з масиву
// let arr = [1,2,3,4,5,6,7,8,9];
// let maxValueFunction = function (array) {
//     let maxValue = array[0];
//     for (const number of array) {
//         if (number > maxValue) {
//             maxValue = number;
//         }
//     }
//     return maxValue;
// }
// console.log(maxValueFunction(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [10,20,30]
// let avarageValue = function (arr) {
//     return (arr[0] + arr[1] + arr[2]) / 3;
// }
// console.log(avarageValue(numbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let calcFunc = function () {
//     let minValue = arguments[0];
//     let maxValue = arguments[0];
//     for (const value of arguments) {
//         if (value < minValue) {
//             minValue = value;
//         }
//         if (value > maxValue) {
//             maxValue = value;
//         }
//     }
//     console.log(maxValue);
//     return minValue;
// }
// console.log(calcFunc(10, 20, 30, 40));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomValue = function () {
//     return Math.round(Math.random()*100);
// }
// console.log(randomValue());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let limitRandomValue = function (limit) {
//     return Math.round(Math.random()*limit);
// }
// console.log(limitRandomValue(10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let someArr = [1,2,3];
// let reverseArray = function (array) {
//     return array.reverse();
// };
// console.log(reverseArray(someArr));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// let someFunc = function () {
//     if (arguments.length === 1) {
//         console.log(arguments);
//     } else if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     }
// }
// console.log(someFunc(10,20));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
// let someFunc = function (arr1, arr2) {
//     return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
// };
// console.log(someFunc([10, 20], [30, 40]));
//
// let someFunc = function () {
//     let someValue = arguments[0];
//     for (const value of arguments) {
//         someValue = value + someValue;
//     }
//     return someValue;
// }
// console.log(someFunc(10, 20, 30));
//
// let calcFunc = function (arr1,arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArr.push(arr1[i] + arr2[i]);
// }
//    
//     return newArr;
// }
// //
// console.log(calcFunc([10, 20], [20, 30]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr = [
//     {name: 'Dima', age: 13}
// ]
// console.log(Object.keys(arr[0]));

let someFunction = function () {
    for (let i = 0; i < arguments.length; i++){
        console.log(Object.keys(arguments[0]))
    }
}
someFunction({name:10, age:10, model:'asd'},{asd:'das'});
// console.log(asd);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]