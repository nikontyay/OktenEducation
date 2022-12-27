// use 'назва бази даних', в кінці команди повинна бути ';'
//show tables; - показати таблиці
// int - інтове значення
// primary key - пошук по primary key (спеціальний ключ), швидкий спосіб пошуку
// auto increment - автоматом заповнює
// varchar() - передаємо кількість символів стрінги в дужки (не більше 255 символів, бо можуть бути проблеми)
// not null - щоб поля не були пустими
// insert into - наповнюємо табличку
// values - які значення додаємо

// select * from users - вибрати все з таблички users (* - вибрати все)
// select * from  users where name = 'Oleg'  --- виводить всі стовпці таблиці де name = oleg
// select * from  users where name like  'o%'; --- like робить пошук де ім'я починається на "о", а далі байдуже (знак %)
// select * from  users where name like  '%o%'; --- знайти де хоча б є одне "о" - байдуже скільки букв буде до та після "о".
// select * from  users where name like  '__e%'; --- Символ пропуску - нижнє підкреслення "_". Перші дві пропускаємо, третя літера "е", потім байдуже

// select * from  users where age = 30;
// select * from  users where age >= 30;
// select * from  users where age <= 20;
// select * from  users where age != 20;
// select * from users where age between 20 and 30;
// select * from users where age not between 20 and 30;
// select * from users where name = 'oleg' or name = 'olha';
// select * from users where name = 'oleg' or name = 'olha' and age = 20;

// select  * from users where age in (18,30,45); --- вивести юзерів вік яких дорівнює тому що в дужках
// select  * from users where age not in (18,30,45); --- вивести юзерів вік яких не дорівнює тому що в дужках

// select * from users where length(name) = 3;
// select * from users where length(name) <= 4;

// select * from users order by age asc; --- сортувати по зростанню, asc можна не писати (по замовченню)
// select * from users order by age desc; --- сортувати по спаданню

// select * from users limit 2; --- покаже перших двох
// select * from users limit 2 offset 2; --- пропустити перших двох та взяти наступних двох

// Агрегатні функції
// select max(age) from users; - максимальний вік
// select max(age) as maxAge from users; --- 'as' перейменує колонку max(age) в maxAge - для зручності в бекенд
// select min(age) as minAge from users; --- мін вік
// select avg(age) as avgAge from users; --- середній вік
// select count(*) as qtyOfUsers from users;  --- порахує скільки юзерів

// select count(*) as qtyOfUsers from users where name = 'oleg'; --- порахує скільки юзерів, де name = oleg
// select count(*) as countUsers from users group by gender; --- групування по гендеру
// select count(*) as countUsers, gender from users group by gender; --- групування по гендеру, та виведе додаткові поля male та female
// select max(age) as maxAge, gender from users group by gender;

// select count(*) as countCars, model from cars where year > 2020 group by model having countCars >=2;
// having - після фільтрації неможна знову написати where, тому використовують having

// delete from users where id = 3; --- видалити юзера
// update users set age = 27 where id = 1; --- оновити інфу юзера
