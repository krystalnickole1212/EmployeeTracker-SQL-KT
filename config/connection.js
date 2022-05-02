const mysql = require('mysql2');
require('dotenv').config();

//connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    //your sql username
    user: 'root',
    //your sql password
    password: '1213tuttle',
    database: 'employeeDB'
  },
  console.log('Connected to the employee database.')
);

module.exports = db;
