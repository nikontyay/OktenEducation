/** ЗАДАЧА 7 - Объявление и вызов функции
 *
 * 1. Объявите функцию, использую ключевое слово "function"
 *
 * 2. Не указывайте параметры функции
 *
 * 3. Внутри функции выведите в консоль своё имя
 *
 * 4. Вызовите функцию
 */

function printMyName () {
    const myName = 'Danylo'
    console.log(myName)
}
printMyName()

const result = printMyName();
console.log(result); //undefined, немає return