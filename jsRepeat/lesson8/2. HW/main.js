//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id,name,surname,email,phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [];
//
// let userFunction = function (id,name,surname,email,phone) {
//     users.push(new User(id,name,surname,email,phone))
// }
//
// userFunction(1,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(2,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(3,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(4,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(5,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(6,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(7,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(8,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(9,'Vasya','Somebody','someemail@gmail.com', +380679999999);
// userFunction(10,'Vasya','Somebody','someemail@gmail.com', +380679999999);
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
// let client1 = new User('1','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','111');
// let client2 = new User('2','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','112');
// let client3 = new User('3','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','113');
// let client4 = new User('4','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','114');
// let client5 = new User('5','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','115');
// let client6 = new User('6','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','116');
// let client7 = new User('7','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','117');
// let client8 = new User('8','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','118');
// let client9 = new User('9','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','119');
// let client10 = new User('10','kokos','kokosovich','sadasdasdasd@gmail.com','+380679999999','120');
//
// clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortedClients = clients.sort((a,b) => a.order - b.order);
// console.log(sortedClients);

//Як вивести ключ info// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars (model,manufactor,year,maxspeed,volumeofengine) {
//         this.model = model;
//         this.manufactor = manufactor;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volumeofengine = volumeofengine;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//         }
//         this.info = function () {
//             console.log(`model: ${this.model}, manufactor: ${this.manufactor}, year: ${this.year}, maxspeed: ${this.maxspeed}, volumeofengine: ${this.volumeofengine}`)
//          
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             return this.maxspeed = newSpeed;
//         }
//         this.changeYear = function (newValueOfYear) {
//             return this.year = newValueOfYear;
//         }
//         this.addDriver = function (nameOfDriver) {
//             return this.driver = nameOfDriver;
//         }
// }
//
// let car = new Cars('Toyota Corolla','Japan','2015','160 км/год',1.6);
// console.log(car);
//
// car.drive()
// car.info();
// car.increaseMaxSpeed(300);
// car.info();
// car.changeYear(2020);
// car.info();
// car.addDriver('John');
// car.info()

//NOT DONE// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

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
// let girls = [girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10]

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

//NOT DONE// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку






