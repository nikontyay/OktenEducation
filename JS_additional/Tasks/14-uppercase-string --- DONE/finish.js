/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

let something = 'Snowboarding';

console.log(something instanceof String);
console.log(typeof something === 'string');

let something2 = something.toUpperCase();
console.log(something2);

const myString = new String('Okten');
console.log(myString instanceof String); //true
console.log(typeof myString); //object
console.log(myString.toUpperCase());
