//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id,name,surname,email,phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let user1 = new User(1,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user2 = new User(2,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user3 = new User(3,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user4 = new User(4,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user5 = new User(5,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user6 = new User(6,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user7 = new User(7,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user8 = new User(8,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user9 = new User(9,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
// let user10 = new User(10,'Vasya','Somebody','someemail@gmail.com', '+380679999999');
//
// let users = [];
//
// users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
//
// console.log(users);

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
// let filteredUsers= users.filter((user) =>user.id %2 === 0);
// console.log(filteredUsers);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortedUsers = filteredUsers.sort((a,b) => a.id - b.id);
// console.log(sortedUsers);

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//         constructor(id, name, surname, email, phone, order) {
//                 this.id = id;
//                 this.name = name;
//                 this.surname = surname;
//                 this.email = email;
//                 this.phone = phone;
//                 this.order = order;
//         }
// }

// створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [];
// let client1 = new Client('1','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3]);
// let client2 = new Client('2','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3,4]);
// let client3 = new Client('3','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3,4,5]);
// let client4 = new Client('4','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3]);
// let client5 = new Client('5','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3,4,5,6,7]);
// let client6 = new Client('6','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3,4]);
// let client7 = new Client('7','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3,4,5,6]);
// let client8 = new Client('8','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3,4,5]);
// let client9 = new Client('9','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3]);
// let client10 = new Client('10','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999',[1,2,3,4]);
//
// clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortedClients = clients.sort((a,b) => a.order.length - b.order.length);
// console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- ch/*angeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набороfgvgh
//                 return this.year = newValueOfYear;
//         }
//         this.addDriver = function (nameOfDriver) {
//                 return this.driver = nameOfDriver;
//         }
// }
//
// let car = new Cars('Toyota Corolla','Japan','2015','160 км/год',1.6);
// console.log(car);
//
// car.drive()
// car.increaseMaxSpeed(300);
// car.changeYear(2020);
// car.addDriver('John');
// console.log(car);
// car.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars {
//     constructor(model, manufactor, year, maxspeed, volumeOfEngine) {
//         this.model = model;
//         this.manufactor = manufactor;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volumeOfEngine = volumeOfEngine;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     };
//     info () {
//             for (const item in this) {
//                     if (typeof this[item] !== 'function') {
//                             console.log(`${item}: ${this[item]}`)
//                     }
//
//             }
//     }
//     increaseMaxSpeed (newSpeed) {
//         return this.maxspeed = newSpeed
//     }
//     changeYear (newYear) {
//         return this.year = newYear
//     }
//     addDriver (driverName) {
//         this.driver = driverName
//     }
// }
//
// let car = new Cars('Toyota', 'Japan',2015,160,1.6);
// console.log(car);
// car.drive();
// car.increaseMaxSpeed(200);
// car.changeYear(2020);
// car.info();
// car.addDriver('Kokos');
// console.log(car);

// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Popelushka {
//
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let girl1 = new Popelushka('girl1', 18,34);
// let girl2 = new Popelushka('girl2', 19,35);
// let girl3 = new Popelushka('girl3', 20,36);
// let girl4 = new Popelushka('girl4', 21,37);
// let girl5 = new Popelushka('girl5', 22,38);
// let girl6 = new Popelushka('girl6', 23,34);
// let girl7 = new Popelushka('girl7', 24,35);
// let girl8 = new Popelushka('girl8', 25,36);
// let girl9 = new Popelushka('girl9', 26,37);
// let girl10 = new Popelushka('girl10', '27','38');
//
// let girls = [];
// girls.push(girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10);
// console.log(girls);

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince extends Popelushka {
//     constructor(name,age,size) {
//         super(name,age,size );
//     }
// }
// let prince = new Prince('prince1',19,34);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let findGirls = function (arr,ourPrince) {
//     for (const item of arr) {
//         if (item.size === ourPrince.size) {
//             console.log(`My princess is ${item.name}`)
//         }    
//     }
// }
// findGirls(girls,prince)

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let filtered = girls.find(item => item.size === prince.size);
// console.log(filtered);


