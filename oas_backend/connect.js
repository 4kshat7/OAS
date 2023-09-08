const mysql = require("mysql2");

// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost", // Replace with your MySQL server host name
  user: "root", // Replace with your MySQL username
  password: "0242", // Replace with your MySQL password
  database: "oas_schema", // Replace with the name of your MySQL database
});

module.exports = db;
