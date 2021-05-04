# employeeAPI

restful api (node, express, postgres)

-to run the app

-"$npm init" to create node_moduless

-install the dependencies by "$npm install express pg cors"

-connect your postgress by "$psql -U postgres"

-create the database and tables by "CREATE DATABASE employee_db;" and connect it by "\c employee_db"

-create tables 

by "CREATE TABLE employee_table(
  employee_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  top_skill VARCHAR(100)
);" 

-to seed your db, use postman or insomnia to post new employee information 
(example {"employee_name": "alex",
           "top_skill": "python"})

-check your table by "\dt" in your database

-You can post, delete, get all employees, get an employee information by id and update it.


-create a new react app run "$npx create-react-app client" in your terminal

-copy the necessary component into your folder

-run "$npm start"

-you will render data from your database that you put with insomnia or postman


