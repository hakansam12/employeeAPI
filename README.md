# employeeAPI

restful api (node, express, postgres)

-to run the app

-"$npm init" to create node_moduless

-install the dependencies by "$npm install express pg cors"

-connect your postgress by "$psql -U postgress"

-create the database and tables by "CREATE DATABASE employee_db;" and connect it by "\c employee_db"

-create tables 

by "CREATE TABLE employee_table(
  employee_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  top_skill VARCHAR(100)
);" 

-check your table by "\dt" in your database

-You can post, delete, get all employees, get an employee information by id and update it.



front-end...
