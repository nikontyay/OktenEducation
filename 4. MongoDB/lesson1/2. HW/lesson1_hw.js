
// // 1) Знайти всіх юзерів в кого вік менше за 20
// db.users.find(
//     {age:
//             {$lt:20}
//     }
//     );

// // 2) Знайти всіх юзерів в котрих хоча б один з батьків Tamara або Petro
// db.users.find(
//     {$or:[
//             {parents: 'Tamara'},
//             {parents: 'Petro'}
//         ]}
//     );

// // 3) Знайти всіх юзерів які вивчають js
// db.users.find(
//     {studying: /js/i}
//     );

// // 4) Знайти всіх юзерів котрі вивчають тільки один предмет и додати їм java
// db.users.updateMany(
//     {$and:[
//             {studying:{$size:1}},
//             {studying:{$nin:[/java/i]}}
//         ]},
//     {$push:{studying:'java'}}
//     );

// // 5) Знайти всіх юзерів номера будинків яких знаходяться в межах 1-20
// db.users.find(
//     {'address.house':{$gte: 1, $lte:20}}
//     )

// //// 6) Знайти всіх юзерів в яких назва вулиці містить пробіл
// db.getCollection('users').find(
//     {'address.street':/.* .*/}
//     );
// //or
// db.getCollection('users').find(
//     {'address.street':/.*\s.*/}
//     );

// // 7) Видалити всіх юзерів в котрих немає поля studying
// db.users.find();
// db.users.deleteMany({studying:{$exists:0}});

// // 8) Знайти всіх юзерів в котрих в ім'я когось с батьків закінчується на 'na'
// db.users.find({
//     parents:/na$/i
// });

// // 9) Всім юзерам котрі не вивчають python додати його
// db.users.updateMany(
//     {studying:{$nin:[/python/i]}},
//     {$push:{studying: 'python'}}
//     );
// //or
// db.users.updateMany(
//     {studying:{$ne:'css'}},
//     {$push:{studying:'css'}}
//     )

// // 10) Посортувати юзерів по рейтингу та по номеру квартири (що то що то, від більшого меншого)
// db.users.find().sort({rating:-1, 'address.flat':-1})