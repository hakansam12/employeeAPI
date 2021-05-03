CREATE DATABASE employee_db;

CREATE TABLE employee_table (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(255),
    top_skill VARCHAR(255)
);