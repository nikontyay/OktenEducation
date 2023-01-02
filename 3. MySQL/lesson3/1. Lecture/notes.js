// create table shops
// # (
// #     id int primary key auto_increment,
// #     shop_name varchar(255) not null
// # );
// #
// # insert into shops(id, shop_name) values (null,'Four Paws'), (null,'Mr.Zoo'), (null,'Murzilla'), (null,'Cats&Dogs');
// #
// # create table cats
// # (
// #     name varchar(255) not null,
// #     shop_id int,
// #     foreign key (shop_id) references shops(id)
// # );
// #
// # insert into cats(name,shop_id) values ('Vlass',1), ('Nemo', 2),('Vicont', null), ('Zuza',null) ;
// #
// # select * from cats;
// #
// # select * from cats
// #      right join shops s on s.id = cats.shop_id
// # union
// # select * from cats
// #     left join shops s on s.id = cats.shop_id