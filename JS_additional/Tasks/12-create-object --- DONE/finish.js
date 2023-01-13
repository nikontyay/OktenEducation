/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObject = {
    name: 'Danylo',
    surname: 'Nikonov',
    favoriteNumber: 7
}

let string = `My name is ${myObject.name} ${myObject.surname} and my favorite number is ${myObject.favoriteNumber}`;
console.log(string);