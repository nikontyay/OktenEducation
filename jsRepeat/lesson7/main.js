//   // function foo(obj) {
//     //     try {
//     //         console.log(obj.name);
//     //     } catch (asdasdadas) {
//     //         console.error(asdasdadas);
//     //     }
//     //
//     //     console.log('end');
//     // }
//     //
//     // // foo();
//     //
//     //
//     // function divider(a, b) {
//     //     if (b === 0) {
//     //         throw new Error('ouououou B is - Zero');
//     //     }
//     //
//     //     return a / b;
//     //
//     // }
//     //
//     // try {
//     //     divider(10, 5);
//     // } catch (e) {
//     //     console.log(e);
//     //     console.log(divider(10, 2));
//     // } finally {
//     //     console.log('asfdhasfdh');
//     // }
// 
//     // let user = {
//     //     name: 'asdasd'
//     // }
//     // console.log(user?.name);
//     // console.log(user?.wife?.age);
// 
// 
//     // let name = 'vasya';
//     // let age = 31;
//     //
//     // let user = {
//     //     name,
//     //     age
//     // }
// 
// 
//     // let user = {
//     //     name: 'kokos',
//     //     age: 31,
//     //     wife: {
//     //         name: 'olya',
//     //         age: 32
//     //     }
//     // };
//     // // let {age, name} = user;
//     // // console.log(age, name);
//     //
//     // let {name, age,  wife: {name: wName, age: wAge}, status} = user;
//     //
//     // console.log(name, age, wName, wAge);
//     // console.log(status);
// 
// 
//     let user = {
//         name: 'kokos',
//         age: 31,
//         wife: {name: 'anna', age: 32},
//         skills: ['html', 'js']
//     }
//     //
//     // let user2 = {...user};// {name:user.name,age:user.age}
//     //
//     //
//     // let user3 = {...user, status: true, name: 'abrikos'};
//     // console.log(user3);
//     //
//     // let user4 = {
//     //     ...user
//     // };
//     // user4.wife.name = 'olya';
//     // console.log(user.wife);
//     console.log(user);
//     let stringify = JSON.stringify(user);
//     console.log(typeof stringify, stringify);
// 
//     let parse = JSON.parse(stringify);
//     console.log(parse);
// 
//     function copyCentr(obj) {
//         return JSON.parse(JSON.stringify(obj));
//     }
// 
//     const copy = (obj) => JSON.parse(JSON.stringify(obj));
// 
//     // let users = [
//     //     {name: 'vasya', age: 31, status: false},
//     //     {name: 'petya', age: 30, status: true},
//     //     {name: 'kolya', age: 29, status: true},
//     //     {name: 'olya', age: 28, status: false},
//     //     {name: 'max', age: 30, status: true},
//     //     {name: 'anya', age: 31, status: false},
//     //     {name: 'oleg', age: 28, status: false},
//     //     {name: 'andrey', age: 29, status: true},
//     //     {name: 'masha', age: 30, status: true},
//     //     {name: 'olya', age: 31, status: false},
//     //     {name: 'max', age: 31, status: true}
//     // ];
//     //
//     // users.map((value, index) => ({
//     //         name: value.name,
//     //         age: value.age,
//     //         status: value.status,
//     //         id: index + 1,
//     //     }
//     // ));
//     //
//     // console.log(users.map((value, index) => ({...value, id: index + 1})));



//   // let user = {
//     //     name : 'kokos',
//     //     age: 31
//     // }
//     // user.age = 'dog';
// 
// 
//     function userBuilder(name, age) {
//         let user = {name, age};
// 
//         return {
//             setAge: function (age) {
//                 if (typeof age === 'string') {
//                     throw new Error('newAge must be a number type')
//                 } else {
//                     user.age = age;
//                 }
//             },
//             userInfo: function () {
//                 return {...user}
//             },
//             getAge: function () {
//                 return user.age;
//             },
//         };
// 
//     }
// 
//     console.log();
//     let builder = userBuilder('asd', 123);
//     builder.setAge(100);
//     console.log(builder.userInfo());