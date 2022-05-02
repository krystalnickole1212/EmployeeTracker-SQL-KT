//import express
const express = require("express");

//import mysql2
const mysql =  require("mysql2");

const inquirer = require ("inquirer");
const db = require("./config/connection.js");
const Choices = require("inquirer/lib/objects/choices");

//const {viewDepartment} = require ("./queries.js");

 function main() {
 inquirer.prompt([
  {
      type: "list",
      name: "menuChoices",
      message: "What action would you like to take?",
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
  }
]).then((answers) => {})}




//Default response for any other request (not found)
// app.use((req. res) => {
//     res.status(404).end();
// });

//add department 
// const newDepartment = async ()=>{

// }


//add employee
// const newEmployee = async ()=>{
    
// }

// //add a role
// const newRole = async ()=>{
    
// }


// //update employee role 
// const updateEmployeeRole = async ()=>{
    
// }


// //view all employees 
// const viewDepartments  = async ()=>{
    
// }

// //listener at BOTTOM
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
  main()
