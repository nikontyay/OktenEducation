//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
// }
//
// const user1 = new User(1,'Petya', 'Kokos', 'petyakokos@gmail.com', '+1380670000000');
// const user2 = new User(2,'Vasya', 'Kokos', 'vasyakokos@gmail.com', '+2380670000000');
// const user3 = new User(3,'Anna', 'Kokos', 'annakokos@gmail.com', '+3380670000000');
// const user4 = new User(4,'Kolya', 'Kokos', 'kolyakokos@gmail.com', '+4380670000000');
// const user5 = new User(5,'Ihor', 'Kokos', 'ihorkokos@gmail.com', '+5380670000000');
// const user6 = new User(6,'Petro', 'Kokos', 'petrokokos@gmail.com', '+6380670000000');
// const user7 = new User(7,'Danya', 'Kokos', 'danyakokos@gmail.com', '+7380670000000');
// const user8 = new User(8,'Katya', 'Kokos', 'katyakokos@gmail.com', '+8380670000000');
// const user9 = new User(9,'Olha', 'Kokos', 'olhakokos@gmail.com', '+9380670000000');
// const user10 = new User(10,'Yurii', 'Kokos', 'yuriikokos@gmail.com', '+10380670000000');
//
// let usersArray = [];
// usersArray.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(usersArray);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filteredUsers = usersArray.filter(function (user) {
//     if (user.id %2 === 0) {
//         return user
//     }
// })
// console.log(filteredUsers);
//
// // - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortedUsers = filteredUsers.sort((a,b) => a.id - b.id);
// console.log(sortedUsers);
//
// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// class Client {
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }
// const client1 = new Client(1,'Petya', 'Kokos', 'petyakokos@gmail.com', '+1380670000000',[1,2,3]);
// const client2 = new Client(2,'Vasya', 'Kokos', 'vasyakokos@gmail.com', '+2380670000000',[1,2,3,4]);
// const client3 = new Client(3,'Anna', 'Kokos', 'annakokos@gmail.com', '+3380670000000',[1,2,3,4,5]);
// const client4 = new Client(4,'Kolya', 'Kokos', 'kolyakokos@gmail.com', '+4380670000000',[1,2,3]);
// const client5 = new Client(5,'Ihor', 'Kokos', 'ihorkokos@gmail.com', '+5380670000000',[1,2]);
// const client6 = new Client(6,'Petro', 'Kokos', 'petrokokos@gmail.com', '+6380670000000',[1,2,3,4,5]);
// const client7 = new Client(7,'Danya', 'Kokos', 'danyakokos@gmail.com', '+7380670000000',[1,2,4,5]);
// const client8 = new Client(8,'Katya', 'Kokos', 'katyakokos@gmail.com', '+8380670000000',[1,2,3,4,5,6]);
// const client9 = new Client(9,'Olha', 'Kokos', 'olhakokos@gmail.com', '+9380670000000',[1,2,3,4]);
// const client10 = new Client(10,'Yurii', 'Kokos', 'yuriikokos@gmail.com', '+10380670000000',[1,2]);
//
// let clients = [];
// clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10)
// console.log(clients);
//
// let sortedClients = clients.sort((a,b) => a.order.length - b.order.length);
// console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function User(model, manufacturer, year, maxSpeed, volumeOfEngine) {
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volumeOfEngine = volumeOfEngine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (const element in this) {
//             if (typeof this[element] !== 'function')
//                 console.log(`${element}: ${this[element]}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = newSpeed
//     };
//     this.changeYear = function (newYear) {
//         return this.year = newYear
//     };
//     this.addDriver = function (nameOfDriver) {
//         return this.driver = nameOfDriver
//     }
// }
//
// let user1 = new User('Toyota','Japan',2015,150,1.6);
// user1.info();
// user1.increaseMaxSpeed(180);
// user1.changeYear(2020)
// console.log(user1);
// user1.addDriver('Danylo');
// console.log(user1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princess {
    constructor(name,age,size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let princess1 = new Princess('Anna',21,10);
let princess2 = new Princess('Olha',23,9);
let princess3 = new Princess('Katya',25,8);
let princess4 = new Princess('Oksana',22,7);
let princess5 = new Princess('Lila',24,6);
let princess6 = new Princess('Sveta',25,7);
let princess7 = new Princess('Mariya',18,8);
let princess8 = new Princess('Ganna',22,9);
let princess9 = new Princess('Inna',28,10);
let princess10 = new Princess('Natalya',25,9);

let princessArray = [];
princessArray.push(princess1,princess2,princess3,princess4,princess5,princess6,princess7,princess8,princess9,princess10)

class Prince extends Princess {
    constructor(name,age,size) {
        super(name,age,size);
    }
}
let prince1 = new Prince('Kyrylo',19,7);
let prince2 = new Prince('Nazar',19,8);
let prince3 = new Prince('Sasha',19,9);
let prince4 = new Prince('Sergiy',19,10);
let prince5 = new Prince('Petya',19,6);




let findMarried = function (array,prince) {
    for (const element of array) {
        if (element.size === prince.size) {
            console.log(`My princes is ${element.name} with size ${element.size} and my size is ${prince.size}`)
        }
    }
}

findMarried(princessArray,prince2);

let filteredArray = [];

let filtered = function (array, prince) {
    for (const element of array) {
        if (element.size === prince.size) {
            filteredArray.push(element)
        }
    }
}
filtered(princessArray,prince1);
console.log(filteredArray);


