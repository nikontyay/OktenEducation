// # 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
// select * from client where length(FirstName) < 6;
//
// # 2.Вибрати львівські відділення банку.
// select * from department where DepartmentCity = 'Lviv';
//
// # 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
// select * from client where Education = 'High' order by LastName;
//
// # 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
// select * from application order by idApplication desc limit 5;
//
// # 5.Вивести усіх клієнтів, чиє прізвище закінчується на IV чи IVA.
// select * from client where LastName like '%iva' or LastName like '%iv';
//
// # 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
// select idClient,FirstName,LastName, DepartmentCity from client
// join department on idDepartment = client.Department_idDepartment
// where DepartmentCity = 'Kyiv' order by idClient;
//
// # 7.Знайти унікальні імена клієнтів.
// select distinct FirstName from client;
//
// # 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 гривень.
// select * from application
//     join client on idClient = application.Client_idClient
//     where Sum > 5000;
//
// # 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
// # select (select count(DepartmentCity) from client
// #     join department d on d.idDepartment = client.Department_idDepartment) as all_Department,
// # (select count(DepartmentCity) from client
// #     join department d on d.idDepartment = client.Department_idDepartment
// # where DepartmentCity = 'Lviv') as lviv_Department;
//
// # 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
// select max(Sum) as maxCredit, client.* from client
//     join application on Client_idClient = client.idClient group by idClient;
//
// # 11. Визначити кількість заявок на кредит для кожного клієнта.
// select count(idApplication) as qtyApplication, idClient, FirstName, LastName from client
//     join application on Client_idClient = client.idClient group by idClient;
//
// # 12. Визначити найбільший та найменший кредити.
// select Sum, FirstName, LastName from client
//     join application on Client_idClient = client.idClient where Sum = (select max(Sum) as maxCredit from application)
// union
// select Sum, FirstName, LastName from client
//     join application on Client_idClient = client.idClient where Sum = (select min(Sum) as maxCredit from application);
// # or
// select max(Sum) as maxCredit, client.* from client
//     join application on Client_idClient = client.idClient group by idClient order by maxCredit desc limit 1;
//
// # 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
// select FirstName, LastName, Education, count(idApplication) as qtyCredits
// from client
//     join application on Client_idClient = client.idClient where Education = 'high' group by idClient;
//
// # 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
// select avg(Sum) as avgSum, client.* from client
//     join application on Client_idClient = client.idClient group by idClient order by avgSum desc limit 1;
//
// # 15. Вивести відділення, яке видало в кредити найбільше грошей
// select sum(Sum) as maxSum, DepartmentCity from client
//     join application on Client_idClient = client.idClient
//     join department on idDepartment = client.Department_idDepartment group by DepartmentCity order by maxSum desc limit 1;
//
// # 16. Вивести відділення, яке видало найбільший кредит.
// select max(Sum) as maxSum, DepartmentCity from client
//     join application on Client_idClient = client.idClient
//     join department on idDepartment = client.Department_idDepartment group by DepartmentCity order by maxSum desc limit 1;
//
// # 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
// update application join client on idClient = application.Client_idClient
// set Sum = 6000
// where Education = 'High';
//
// select * from client
// join application on client.idClient = application.Client_idClient;
//
// # 18. Усіх клієнтів київських відділень пересилити до Києва.
// update client join department on client.Department_idDepartment = department.idDepartment
// set City = 'Kyiv'
// where DepartmentCity = 'Kyiv';
//
// # 19. Видалити усі кредити, які є повернені.
// delete application from application where CreditState = 'returned';
//
// # 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
// delete application
// from application
// join client on client.idClient = application.Client_idClient
// where
//     LastName like '_e%' or
//     LastName like '_o%';
//
// # 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
// select idDepartment, DepartmentCity, sum(Sum) as maxSum from client
// join application on application.Client_idClient = client.idClient
// join department on department.idDepartment = client.Department_idDepartment
// where DepartmentCity = 'Lviv' group by idDepartment having sum(Sum) > 5000;
//
// # 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
// select * from client
// join application on application.Client_idClient = client.idClient
// where CreditState = 'returned' and Sum > 5000;
//
// # 23.Знайти максимальний неповернений кредит.
// select * from client
// join application on application.Client_idClient = client.idClient
// where CreditState = 'not returned' order by Sum desc limit 1;
//
// # 24.Знайти клієнта, сума кредиту якого найменша
// select * from client
// join application on application.Client_idClient = client.idClient
// order by Sum limit 1;
//
// # 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
// select * from client
// join application on application.Client_idClient = client.idClient
// where Sum > (select avg(Sum) from application);
//
// # 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
// select * from client
//     where City =
// (select City from application
// join client on client.idClient = application.Client_idClient group by idClient order by count(idApplication) desc limit 1);
//
// # 27. Місто клієнта з найбільшою кількістю кредитів
// select City from application
//     join client on client.idClient = application.Client_idClient group by idClient order by count(idApplication) desc limit 1;