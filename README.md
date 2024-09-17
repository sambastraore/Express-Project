This project is an express js api containerized with docker and orchestrated with docker-compose. It's for academic purpose. It has three endpoints :
- GET test/ : to get all employees in the table.
- GET test/employee/{id} : to get a specific employee
- DELETE test/employee/{id} : to delete a specific employee

The name of the database is already set as an environment variable (employee_db) but in its current state, the endpoints are written to use a table named 'employees' with at least a field 'id'.

To run the containers (the **mysql_db** and the **expressjs_api** containers), move to the **express-project** directory and use this command : **docker-compose --env-file ./docker-compose.env up --build -d**

After that, the containers are running but to test the api, we need to have some data. 
For that, enter the mysql_db container in terminal mode and connect with root (the password is root). 
Then, use these queries : 
1) USE employee_db;
  
2) CREATE TABLE employees (
id int NOT NULL AUTO_INCREMENT,
name varchar(45) DEFAULT NULL,
employee_code varchar(45) DEFAULT NULL,
salary int DEFAULT NULL
PRIMARY KEY (id)
);

3) INSERT INTO employees VALUES 
(1,'Ndaraw Fall','EMP1',100000),
(2,'Abdoulaye Diallo','EMP2',100000),
(3,'Mohamed Dieng','EMP3',100000),
(4,'Mansour Kholle','EMP4',100000);
