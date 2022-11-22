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
let string = 'Ревуть воли як ясла повні';
function stringToarray (str) {
    return str.split(' ');
}

console.log(stringToarray(string));


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
// let join = arr.join(';');
// console.log(join);

// let nums = [11, 22, 33];
// let concat = arr.concat(nums);
// console.log(concat)


//Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
// console.log(nums.reverse());


// Метод slice() возвращает новый массив, содержащий копию части исходного массива (диапазон от до невключительно)
// let slice = concat.slice(0, 4);
// console.log(slice);
// console.log(concat);


// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
// let splice = concat.splice(0, 2, '!!!', '#$%^', '*&&^%$65');
// console.log(splice);
// console.log(concat);
// concat.splice(concat.indexOf(11), 1);
// console.log(concat)
//
//
// // Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
// console.log(concat.includes(11));
// console.log('hello okten'.includes('ok'));