db.users.find();
db.users.insertOne({cars:'BMW', model:'530M'});
db.users.find({gender:'female', age:29});
db.users.find({
    $or:[
        {rating:2},
        {rating:5},
        {age:12}
    ]
});

db.users.find({
    $and:[
        {rating:5},
        {age:25}
    ]
});

db.users.find({age:{$in:[12,25,26]}});

db.users.find({age:{$nin:[12,25,26]}});
//or
db.users.find({
    age:{
        $not:{
            $in:[12,25,26]
        }
    }
});
//Регулярний вираз, пошук типу like в MySQL (всі що починаються на A, регістр має значення)
db.users.find({name:/^A/});
// На регістр звертати увагу не буде (ставимо "i")
db.users.find({name:/^a/i});
// Ім'я має закінчуватися на А
db.users.find({name:/a$/i});
// .{2} - пропуск 2 символів, третя буква t
db.users.find({name:/^.{2}t/i});
// Починається на K, закінчується на А;
// .* --- пропуск між символами
db.users.find({name:/^k.*a$/i});
// Просто знайти букву, все одно де
db.users.find({name:/.*v.*/i});
// Третя буква з кінця
db.users.find({name:/.*o.{2}$/i});
// Довжина слова
db.users.find({name:/^.{4}$/i});
// Сортування по зростанню
db.users.find().sort({rating:1});
// Сортування по спаданню
db.users.find().sort({rating:-1});
// Другий параметр сортування
db.users.find().sort({rating:-1, age: 1});
// Limit як в MySQL, посортував та взяв тільки одного
db.users.find().sort({rating:-1, age: 1}).limit(1);
// метод Skip - пропустити
db.users.find().sort({rating:-1, age: 1}).limit(1).skip(2);
// gt(greater than) - більше. Знайти всіх у кого рейтинг більше за 2
db.users.find({rating:{$gt:2}});
// gte (greater than equal) - більше рівно
db.users.find({rating:{$gte:2}});
//lt (less than)
db.users.find({rating:{$lt:2}});
// lte (less than equal)
db.users.find({rating:{$lte:2}});
// ne(not equal)
db.users.find({rating:{$ne:2}});
// eq (equal)
db.users.find({rating:{$eq:2}});
// UpdateOne - оновлюємо одного
// шукаємо по _id через ObjectID та робимо set
db.users.updateOne(
    {_id: ObjectId("63b4138663eef3551d9a07e4")},
    {$set:{rating: 7}}
);

//UpdateMany
db.users.updateMany(
    {gender: 'none'},
    {$set:{gender:'male'}}
)

//Знаходимо юзера по _id
db.users.find({_id:ObjectId("63b4138663eef3551d9a07e4")});

// пошук по всім полям та вивести тільки age та gender;
// _id виводиться примусово, виключаємо через 0
db.users.find({},{age:1,gender:1, _id:0});

// Якщо є вкладеність, то пошук починаємо як стрічку
db.users.find({'address.house':45});
// Пошук з масиву (сам перебере масив)
db.users.find({studying: /Java/i});
// знайти всіх юзерів в яких довжина масиву studying дорівнює 1
db.users.find({studying:{$size:1}});
// Exists - шукає юзерів у яких немає поля parents
db.users.find({parents:{$exists:0}});

// '' звертаюсь до всіх елементів масиву, беру в стрічку
// .$[] --- звертаюсь до кожного елементу масиву
db.users.updateMany(
    {parents:{$exists:1}},
    {$set:{'parents.$[]':'Kokos'}}
);

// push - додаємо ще одне значення в масив studying
db.users.updateOne(
    {_id:ObjectId('63b4138663eef3551d9a07e2')},
    {$push:{studying:'django'}}
);

// pull - видаляю значення в масив studying
db.users.updateOne(
    {_id:ObjectId('63b4138663eef3551d9a07e2')},
    {$pull:{studying:'django'}}
);

db.users.find({_id:ObjectId('63b4138663eef3551d9a07e2')});

// deleteOne - видалення
db.users.deleteOne({_id:ObjectId('63b4138663eef3551d9a07e2')})





