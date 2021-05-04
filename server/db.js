const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "newpassword",
  host: "localhost",
  port: 5432,
  database: "employee_db"
});

module.exports = pool;