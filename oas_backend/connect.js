const mysql = require("mysql2");

// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost", 
  user: "root", 
  password: "0242", 
  database: "oas_schema", 
});

module.exports = db;
