// 1) Знайти всіх дітей в яких сердня оцінка 4.2
db.students.find({
    avgScore: 4.2
})

// 2) Знайди всіх дітей з 1 класу
db.students.find({
    class: 1
})

// 3) Знайти всіх дітей які вивчають фізику
db.students.find({
    lessons: 'physics'
})

// 4) Знайти всіх дітей, батьки яких працюють в науці (scientist)
db.students.find({
    'parents.profession': 'scientist'
})

// 5) Знайти дітей, в яких середня оцінка більша за 4
db.students.find({
    avgScore: {$gt: 4}
})

// 6) Знайти найкращого учня
db.students.find({
    avgScore: {$gt: 4}
}).sort({
    avgScore: -1
}).limit(1)

// 7) Знайти найгіршого учня
db.students.find().sort({
    avgScore: 1
}).limit(1)

// 8) Знайти топ 3 учнів
db.students.find().sort({
    avgScore: -1
}).limit(3)

// 9) Знайти середній бал по школі
db.students.aggregate([
    {
        $group: {
            _id: '$students',
            avgMark: {$avg: '$avgScore'}
        }
    },
    {
        $project: {
            avgMark: 1,
            _id: 0
        }
    }
])

// 10) Знайти середній бал дітей які вивчають математику або фізику
db.students.aggregate([
    {
        $match: {
            $or: [
                {lessons: 'mathematics'},
                {lessons: 'physics'}
            ]
        }
    },
    {
        $group: {
            _id: '$students',
            avgMark: {$avg: '$avgScore'}
        }
    }
])


// 11) Знайти середній бал по 2 класі
db.students.aggregate([
    {
        $match: {
            class: 2
        }
    },
    {
        $group: {
            _id: '$students',
            avgScore: {$avg: '$avgScore'}
        }
    },
    {
        $project: {
            _id: 0,
            avgScore: 1
        }
    }
])

// 12) Знайти дітей з не повною сімєю
db.students.aggregate([
    {
        $match: {
            parents: {$size: 1}
        }
    }
])

// 13) Знайти батьків які не працюють
db.students.aggregate([
    {
        $unwind: '$parents'
    },
    {
        $match: {
            'parents.profession': null
        }
    }
])

// 14) Вигнати дітей, які мають середній бал менше ніж 2.5
db.students.deleteMany(
    {
        avgScore: {$lt: 2.5}
    }
)


// 15) Дітям, батьки яких працюють в освіті ( teacher ) поставити 5
db.students.updateMany(
    {
        'parents.profession': 'teacher'
    },
    {
        $set: {
            avgScore: 5
        }
    }
)

// 16) Знайти дітей які вчаться в початковій школі (до 5 класу) і вивчають фізику ( physics )
db.students.aggregate([
    {
        $match: {
            $and: [
                {class: {$lte: 5}},
                {lessons: 'physics'}
            ]
        }
    }
])

// 17) Знайти найуспішніший клас
db.students.aggregate([
    {
        $group: {
            _id: '$class',
            avgMark: {$avg: '$avgScore'}
        }
    },
    {
        $sort: {
            avgMark: -1
        }
    },
    {
        $limit: 1
    },
    {
        $project: {
            avgMark: 1,
            class: '$_id',
            _id: 0
        }
    }
])

// ********** Не працюючих батьків влаштувати офіціантами (підказка: гуглимо "arrayFilters")
db.students.updateMany(
    {
        'parents.profession': null
    },
    {
        $push: {
            "parents.profession": 'officiant'
        }
    }
)

