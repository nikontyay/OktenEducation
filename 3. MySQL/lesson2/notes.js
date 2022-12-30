//create table cities
// (
//     id int primary key auto_increment,
//     city varchar(20)
// );
//
// create table users
// (
//     id int primary key auto_increment,
//     name varchar(20) not null,
//     age int not null,
//     city_id int,
//     foreign key (city_id) references cities(id)
// );
//
// insert into cities values (null, 'Lviv');
//
// select * from users
// join cities on cities.id = users.city_id;
//
// select * from users
// right join cities on cities.id = users.city_id;
//
// select client.*, CountOfWorkers from client
// join application  on client.idClient = Client_idClient
// join department on client.Department_idDepartment = idDepartment;