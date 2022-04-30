const mysql = require('mysql2');
require('dotenv').config();

//connect to db
const db = mysql.createConnection(
  {
    host: 'localhost',
    //your sql username
    user: process.env.DB.USER,
    //your sql password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log('Connected to the election database.')
);

module.exports = db;
