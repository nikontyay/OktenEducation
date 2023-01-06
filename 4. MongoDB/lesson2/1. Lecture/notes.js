// Якщо є можливість обійтись без aggregate функцій, то краще їх не використовувати,
// бо вона довше виконується чим find, та займає більше ресурсів
// Код виконується зверху вниз

// group - групування. Завжди звертаємося по _id
db.teacher.aggregate([{
    $group: {
        _id: '$lesson'
    }
}])

// min, max, avg, sum
//sum: 1 (групує та множить на 1)
db.teacher.aggregate([{
    $group: {
        _id: '$lesson',
        countOfTeachers: {$sum: 1},
        min: {$min: '$payment'},
        max: {$max: '$payment'},
        avg: {$avg: '$payment'},
        sumMoney: {$sum: '$payment'}
    }
}]);

// match - пошук типу find, можна юзати в агрегатці.
// Спочатку знайши те що треба, а потім погрупували, щоб база даних не рахувала зайвого
db.teacher.aggregate([{
    $match: {
        lesson: 'basic'
    }
}, {
    $group: {
        _id: '$lesson',
        countOfTeachers: {$sum: 1},
        min: {$min: '$payment'},
        max: {$max: '$payment'},
        avg: {$avg: '$payment'},
        sumMoney: {$sum: '$payment'}
    }
}]);

//sort - сортування
//project - змінити відображення об'єкта (зазвичай виконують в самому кінці - фінальне відображення).
// всі інші ключі пропадають, потрібну записувати їх руцями
db.teacher.aggregate([{
    $group: {
        _id: '$lesson',
        countOfTeachers: {$sum: 1},
        min: {$min: '$payment'},
        max: {$max: '$payment'},
        avg: {$avg: '$payment'},
        sumMoney: {$sum: '$payment'}
    }
}, {
    $sort: {sumMoney: 1}
}, {
    $project: {
        lesson: '$_id',
        countOfTeachers: 1,
        min: 1,
        max: 1,
        avg: 1,
        sumMoney: 1,
        _id: 0
    }
}]);

// lookup - з'єднання таблиць
// спочатку skip, потім limit - бо порядок має значення (код виконується зверху вниз)
db.teacher.aggregate([{
    $lookup: {
        from: 'students',
        localField: 'class_curator',
        foreignField: 'class',
        as: 'myStudents'
    }
},
    {$skip: 2},
    {$limit: 2}
]);

db.teacher.aggregate([
    {
        $match: {
            class_curator: {$gte: 5}
        }
    },
    {$sort: {class_curator: -1}},
    {
        $lookup: {
            from: 'students',
            localField: 'class_curator',
            foreignField: 'class',
            as: 'myStudents'
        }
    },
    {
        $match: {
            'myStudents.parents.profession': 'doctor'
        }
    },
])

//unwind - розбиває масив по об'єктах
//count - рахує кількість об'єктів в масиві
db.students.aggregate([
    {
        $match: {'parents.profession': 'doctor'}
    },
    {
        $unwind:'$parents'
    },
    {
        $match: {'parents.profession':'doctor'}
    },
    {
        $count:'DoctorCount'
    }
])