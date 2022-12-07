// Функція-конструктор нічого не повертає, але вона будує об'єкт
// function User(name,age,status) {
//     this.name = name;
//     this.age = age;
//     this.status = status
// }
//
// let user1 = new User('asd', 123, true);
// console.log(user1);
//
// function User(name,age,status,wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
// let user2 = new User('qwe',123,false,{name:'asd',age:243});
// console.log(user2);
//
//or
//
// function User(name,age,status,wifeName,wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name:wifeName, age:wifeAge};
//     this.greeting = function () {
//         console.log('hi')
//     }
// }
// let user2 = new User('asd',123,true,'qwe',234);
// console.log(user2);
// user2.greeting()

// Звертаємось до функції-конструктора і починаємо її розширювати за допомогою prototype
// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
//
// console.log(User);
// User.prototype.greeting = function () {
//     return`hello my name is ${this.name}`
// };
//
// let user = new User('vasya', 12);
// console.log(user.greeting());

//.apply бере функцію з іншого об'єкту і застосовує її в цьому об'єкті, 'this' буде застосовуватись до цього об'єкту.
// Якщо потрібно передати якийсь 'msg', то в 'apply' буду передавати ще аргументи як масив (Apply приймає тільки
// 2 аргументи - перший це для кого використовуємо цю функцію, другий - масив в якому передаємо аргументи).
// call - замість масиву, приймає n-кількість аргументів
// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasya',31);
// user.greeting = function (msg1,msg2){
//     return `${msg1} ${msg2} hello my name is ${this.name}`
// };
// console.log(user.greeting('hello'));
// let user2 = new User('petya',35);
// console.log(user.greeting.apply(user2, ['hi','again']));
// console.log(user.greeting.call(user2, 'hi', 'again'));

// для bind треба робити нову змінну і задавати rest arguments можна вже при виклику самої змінної
// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasya',31);
// user.greeting = function (msg1,msg2){
//     return `${msg1} ${msg2} hello my name is ${this.name}`
// };
//
// let user2 = new User('petya',123);
// let greetingCopy = user.greeting.bind(user2);
// console.log(greetingCopy('hello','again'));

// class (прописати характеристики які потрібні, та нажати alt + insert), конструктор і клас генерують майбутній об'єкт.
// Класова конструкція дозволяє нам визначати поведінку в тілі самого класу.
// Функція, яка знаходиться в межах класу називається - методом.
// class User {
// constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     greeting () {
//         return `hello my name is ${this.name}`;
//     }
// }
//
// let user = new User('vasya',31);
// console.log(user);
// console.log(user.greeting());

//Static методи - до цього могли викликати метод greeting, якщо у нас існує екземпляр певного класу, після 'static'
// можна звертатись безпосередньо до самого класу. Але this матиме характеристики класу User.
// console.log(this.age) буде undefined, бо user невизначенний
// class User {
//     constructor(username,age) {
//         this.username = username;
//         this.age = age;
//     }
//     static greeting () {
//         console.log(this.age)
//         return `hello my name is ${this.username}`;
//     }
// }
//
// console.log(User.greeting());

// Extend - з його допомогою беремо властивості іншого конструктора та добавляємо у свій.
//Super - батьківський елемент, бере властивості нащадка (якщо натиснути Ctrl + left click -> відправлюсь в батьківський
// елемент.
// Ctrl + o -> override methods
// class User {
//     constructor(username,age) {
//         this.username = username;
//         this.age = age;
//     }
//     work () {
//         return `work in process`;
//     }
// }
//
// class Customer extends User {
//
//     constructor(username, age, password) {
//         super(username, age);
//         this.password = password;
//     }
//
//     work() {
//         return super.work();
//     }
// }
//
// let customer = new Customer('petya', 31, 'qwertyui');
// console.log(customer);
// console.log(customer.work());

// Конструктор також можна побудувати без 'новітніх фіч'. За допомогою apply, прописуємо arguments щоб передати
// аргументи батьківської функції, та вручну через `this` дописуємо ті елементи яких немає в батьківскій ф-ції.
// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// function Customer (name, age, password) {
//     User.apply(this, arguments);
//     this.password = password;
// }
//
// let customer = new Customer('mykita',29,'asdfgh');
// console.log(customer);
