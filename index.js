const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware run when browser hits a route
app.use(cors());
app.use(express.json()); 

// ROUTES THAT WE CREATE FOR REST API 

//create a new employee

app.post("/employees", async (req, res) => {
     try {
     const { employee_name, top_skill } = req.body;
     const newEmployee = await pool.query(
       "INSERT INTO employee_table (employee_name, top_skill) VALUES($1,$2) RETURNING *",
       [employee_name, top_skill]
     );

     res.json(newEmployee.rows[0]);
   } catch (err) {
     console.error(err.message);
   }
 });

//get all employees information

app.get("/employees", async (req, res) => {
   try {
     const allEmployees = await pool.query("SELECT * FROM employee_table");
     res.json(allEmployees.rows);
   } catch (err) {
     console.error(err.message);
   }
 });

//get a todo

 app.get("/employees/:id", async (req, res) => {
   try {
     const { id } = req.params;
     const employee = await pool.query("SELECT * FROM employee_table WHERE employee_id = $1", [
       id
     ]);

     res.json(employee.rows[0]);
   } catch (err) {
     console.error(err.message);
   }
 });

//update an employee information with id

app.put("/employees/:id", async (req, res) => {
   try {
     const { id } = req.params;
     const { employee_name, top_skill } = req.body;
     const updateTodo = await pool.query(
       "UPDATE employee_table SET (employee_name, top_skill) = ($1,$2) WHERE employee_id = $3",
       [employee_name, top_skill, id]
     );

     res.json("Employee information was updated!");
   } catch (err) {
     console.error(err.message);
   }
 });

//delete an employee with id

app.delete("/employees/:id", async (req, res) => {
   try {
     const { id } = req.params;
     const deleteEmployee = await pool.query("DELETE FROM employee_table WHERE employee_id = $1", [
       id
     ]);
     res.json("Employee was deleted!");
   } catch (err) {
     console.log(err.message);
   }
 });

app.listen(5000, () => {
  console.log("server is running on port 5000");
});