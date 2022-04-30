//import express
const express = require('express');

//import mysql2
const mysql =  require('mysql2');

const inquirer = require ("inquirer");
const db = require("/config.connection.js");
const Choices = require('inquirer/lib/objects/choices');


const promptUser = () => {

    type:'list',
    name: 'menuChoice',
    message: 'Please select an action.',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee']
}

//port destination and app expression
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database under middleware
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       // Your MySQL username,
//       user: 'root',
//       // Your MySQL password
//       password: '',
//       database: 'REPLACE WITH DATABASE'
//     },
//     console.log('Connected to the REPLACE WITH DATABASE.')
//   );

//Default response for any other request (not found)
app.use((req. res) => {
    res.status(404).end();
});

//add department 
const newDepartment = async ()=>{

}


//add employee
const newEmployee = async ()=>{
    
}

//add a role
const newRole = async ()=>{
    
}


//update employee role 
const updateEmployeeRole = async ()=>{
    
}


//view all employees 
const viewDepartments  = async ()=>{
    
}

//listener at BOTTOM
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});